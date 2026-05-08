package com.example.servlet;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;

/**
 * 字符編碼過濾器
 * 確保所有請求和回應都使用 UTF-8 編碼
 * 
 * @author 程式設計教授
 * @version 1.0
 */
@WebFilter("/*")
public class CharacterEncodingFilter implements Filter {
    
    private String encoding = "UTF-8";
    
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        String encodingParam = filterConfig.getInitParameter("encoding");
        if (encodingParam != null && !encodingParam.trim().isEmpty()) {
            this.encoding = encodingParam;
        }
    }
    
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, 
                        FilterChain chain) throws IOException, ServletException {
        
        // 設定請求編碼
        request.setCharacterEncoding(encoding);
        
        // 設定回應編碼
        response.setCharacterEncoding(encoding);
        
        // 繼續處理請求
        chain.doFilter(request, response);
    }
    
    @Override
    public void destroy() {
        // 清理資源
    }
}