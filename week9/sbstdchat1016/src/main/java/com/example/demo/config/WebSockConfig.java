package com.example.demo.config;

import org.springframework.stereotype.Component;

import com.example.demo.controller.ChatRoomServer;

import org.springframework.context.ApplicationContext;
import org.springframework.context.event.EventListener;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.servlet.ServletContext;
import java.lang.reflect.Method;
import java.util.Enumeration;

/**
 * 在 ApplicationReadyEvent 觸發時再去找 ServerContainer 並註冊 Endpoint。
 * 同時列出所有 ServletContext attribute（協助偵錯）。
 */
@Component
public class WebSockConfig {

    private static final Logger logger = LoggerFactory.getLogger(WebSockConfig.class);

    private final ApplicationContext applicationContext;

    public WebSockConfig(ApplicationContext applicationContext) {
        this.applicationContext = applicationContext;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void onApplicationReady() {
        logger.info("ApplicationReadyEvent 嘗試搜尋 ServerContainer ...");

        if (!(applicationContext instanceof ServletWebServerApplicationContext swc)) {
            logger.error("沒有 ServletWebServerApplicationContext. 跳出 WebSocket.");
            return;
        }

        ServletContext servletContext = swc.getServletContext();
        if (servletContext == null) {
            logger.error("沒有 ServletContext.");
            return;
        }

        // 列出所有 attribute，協助確認 key 與時序
        logger.info("Listing ServletContext attributes for debugging:");
        Enumeration<String> names = servletContext.getAttributeNames();
        while (names.hasMoreElements()) {
            String name = names.nextElement();
            Object val = servletContext.getAttribute(name);
            logger.info("  attribute(屬性): {} -> {}", name, val != null ? val.getClass().getName() : "null");
        }

        // 常見的 attribute keys
        Object containerObj = servletContext.getAttribute("jakarta.websocket.server.ServerContainer");
        if (containerObj == null) {        	
            containerObj = servletContext.getAttribute("javax.websocket.server.ServerContainer");
        }

        if (containerObj == null) {
            logger.warn("No ServerContainer found in ServletContext. WebSocket won't be available.");
            logger.warn("If using embedded Tomcat: ensure 'tomcat-embed-websocket' is on the classpath.");
            return;
        }

        try {
            // 以 reflection 找 addEndpoint(Class) 並註冊
            Method addEndpoint = containerObj.getClass().getMethod("addEndpoint", Class.class);
            addEndpoint.invoke(containerObj, ChatRoomServer.class);
            logger.info("註冊 ChatRoomServer via ServerContainer: {}", containerObj.getClass().getName());
        } catch (NoSuchMethodException nsme) {
            logger.error("ServerContainer 沒有 addEndpoint(Class).", nsme);
        } catch (Exception e) {
            logger.error("Failed to register endpoint via reflection", e);
        }
    }
}