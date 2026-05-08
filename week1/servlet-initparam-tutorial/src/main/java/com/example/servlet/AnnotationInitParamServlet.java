package com.example.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

/**
 * AnnotationInitParamServlet - 使用 @WebServlet 註解配置 InitParam 的範例
 * 
 * 此 Servlet 示範如何透過 @WebServlet 註解來設定初始化參數
 * 這是 Servlet 3.0+ 推薦的現代化配置方式
 * 
 * @author 程式設計教授
 * @version 1.0
 */
@WebServlet(
    name = "AnnotationInitParamServlet",
    urlPatterns = {"/AnnotationInitParamServlet", "/annotation-init"},
    loadOnStartup = 1,
    initParams = {
        @WebInitParam(name = "username", value = "John Doe"),
        @WebInitParam(name = "email", value = "john.doe@example.com"),
        @WebInitParam(name = "department", value = "Computer Science"),
        @WebInitParam(name = "welcomeMessage", value = "歡迎使用註解式 InitParam 範例！"),
        @WebInitParam(name = "debugMode", value = "true"),
        @WebInitParam(name = "maxConnections", value = "100"),
        @WebInitParam(name = "timeout", value = "30000"),
        @WebInitParam(name = "version", value = "2.0.1"),
        @WebInitParam(name = "author", value = "程式設計教授"),
        @WebInitParam(name = "description", value = "這是使用 @WebServlet 註解配置 InitParam 的示範程式")
    }
)
public class AnnotationInitParamServlet extends HttpServlet {
    
    private static final long serialVersionUID = 1L;
    
    // 儲存從 InitParam 讀取的設定值
    private String username;
    private String email;
    private String department;
    private String welcomeMessage;
    private String debugMode;
    private String maxConnections;
    private String timeout;
    private String version;
    private String author;
    private String description;
    
    /**
     * Servlet 初始化方法
     * 在 Servlet 容器載入此 Servlet 時執行一次
     * 用於讀取 @WebServlet 註解中定義的初始化參數
     */
    @Override
    public void init() throws ServletException {
        super.init();
        
        // 從註解讀取初始化參數
        username = super.getInitParameter("username");
        email = super.getInitParameter("email");
        department = super.getInitParameter("department");
        welcomeMessage = super.getInitParameter("welcomeMessage");
        debugMode = super.getInitParameter("debugMode");
        maxConnections = super.getInitParameter("maxConnections");
        timeout = super.getInitParameter("timeout");
        version = super.getInitParameter("version");
        author = super.getInitParameter("author");
        description = super.getInitParameter("description");
        
        // 如果參數為空，設定預設值
        if (username == null) username = "Anonymous";
        if (email == null) email = "anonymous@example.com";
        if (department == null) department = "Unknown";
        if (welcomeMessage == null) welcomeMessage = "Welcome!";
        if (debugMode == null) debugMode = "false";
        if (maxConnections == null) maxConnections = "50";
        if (timeout == null) timeout = "15000";
        if (version == null) version = "1.0.0";
        if (author == null) author = "Unknown";
        if (description == null) description = "No description";
        
        // 在伺服器日誌中記錄初始化資訊
        log("AnnotationInitParamServlet 初始化完成");
        log("讀取的參數值 - username: " + username + ", email: " + email + 
            ", department: " + department + ", version: " + version);
        
        if ("true".equalsIgnoreCase(debugMode)) {
            log("除錯模式已啟用 - 將輸出詳細資訊");
        }
    }
    
    /**
     * 處理 GET 請求
     * 顯示從 InitParam 讀取的設定資訊
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // 設定回應內容類型和編碼
        response.setContentType("text/html;charset=utf-8");
        
        // 取得輸出流
        PrintWriter out = response.getWriter();
        
        try {
            // 生成 HTML 回應
            generateResponse(out);
            
            // 如果啟用除錯模式，記錄請求資訊
            if ("true".equalsIgnoreCase(debugMode)) {
                logRequestInfo(request);
            }
            
        } catch (Exception e) {
            // 錯誤處理
            log("AnnotationInitParamServlet 發生錯誤", e);
            showError(out, e.getMessage());
        } finally {
            out.close();
        }
    }
    
    /**
     * 處理 POST 請求，重導向到 GET 方法
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        doGet(request, response);
    }
    
    /**
     * 生成 HTML 回應內容
     */
    private void generateResponse(PrintWriter out) {
        out.println("<!DOCTYPE html>");
        out.println("<html lang='zh-TW'>");
        out.println("<head>");
        out.println("    <meta charset='UTF-8'>");
        out.println("    <meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        out.println("    <title>@WebServlet InitParam 範例</title>");
        out.println("    <style>");
        out.println("        body { font-family: Arial, '微軟正黑體', sans-serif; margin: 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; }");
        out.println("        .container { max-width: 900px; margin: 0 auto; background: white; border-radius: 15px; box-shadow: 0 15px 35px rgba(0,0,0,0.1); overflow: hidden; }");
        out.println("        .header { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 30px; text-align: center; }");
        out.println("        .header h1 { margin: 0; font-size: 28px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }");
        out.println("        .header p { margin: 10px 0 0 0; opacity: 0.9; }");
        out.println("        .content { padding: 40px; }");
        out.println("        .param-section { background: #f8f9fa; border-radius: 10px; padding: 25px; margin-bottom: 25px; border-left: 5px solid #28a745; }");
        out.println("        .param-title { color: #28a745; font-size: 20px; font-weight: bold; margin-bottom: 15px; display: flex; align-items: center; }");
        out.println("        .param-list { list-style: none; padding: 0; margin: 0; }");
        out.println("        .param-item { background: white; margin: 8px 0; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; justify-content: space-between; align-items: center; }");
        out.println("        .param-name { font-weight: bold; color: #495057; }");
        out.println("        .param-value { color: #007bff; font-family: 'Courier New', monospace; background: #e3f2fd; padding: 5px 10px; border-radius: 4px; }");
        out.println("        .all-params { background: #e8f5e8; border-radius: 10px; padding: 25px; border-left: 5px solid #28a745; }");
        out.println("        .code-section { background: #f8f9fa; border-radius: 10px; padding: 25px; border-left: 5px solid #6f42c1; }");
        out.println("        .code-title { color: #6f42c1; font-size: 20px; font-weight: bold; margin-bottom: 15px; display: flex; align-items: center; }");
        out.println("        .code-block { background: #2d3748; color: #e2e8f0; border-radius: 6px; padding: 20px; margin: 15px 0; font-family: 'Courier New', monospace; font-size: 14px; overflow-x: auto; }");
        out.println("        .code-comment { color: #68d391; }");
        out.println("        .code-annotation { color: #fbb6ce; }");
        out.println("        .code-string { color: #90cdf4; }");
        out.println("        .code-keyword { color: #f687b3; }");
        out.println("        .highlight { background: #fff3cd; padding: 2px 5px; border-radius: 3px; }");
        out.println("        .navigation { text-align: center; margin-top: 30px; }");
        out.println("        .nav-button { display: inline-block; background: #28a745; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; margin: 0 10px; transition: background 0.3s; }");
        out.println("        .nav-button:hover { background: #1e7e34; }");
        out.println("        .nav-button.secondary { background: #6c757d; }");
        out.println("        .nav-button.secondary:hover { background: #545b62; }");
        out.println("        .icon { margin-right: 8px; }");
        out.println("        .comparison-table { width: 100%; border-collapse: collapse; margin: 20px 0; }");
        out.println("        .comparison-table th, .comparison-table td { border: 1px solid #dee2e6; padding: 12px; text-align: left; }");
        out.println("        .comparison-table th { background: #e9ecef; font-weight: bold; }");
        out.println("        .comparison-table tr:nth-child(even) { background: #f8f9fa; }");
        out.println("    </style>");
        out.println("</head>");
        out.println("<body>");
        out.println("    <div class='container'>");
        out.println("        <div class='header'>");
        out.println("            <h1>📝 @WebServlet InitParam 範例</h1>");
        out.println("            <p>透過 @WebServlet 註解設定 Servlet 初始化參數</p>");
        out.println("        </div>");
        out.println("        <div class='content'>");
        
        // 顯示主要的 InitParam 資訊
        out.println("            <div class='param-section'>");
        out.println("                <div class='param-title'>");
        out.println("                    <span class='icon'>👤</span>基本配置參數");
        out.println("                </div>");
        out.println("                <ul class='param-list'>");
        out.println("                    <li class='param-item'>");
        out.println("                        <span class='param-name'>使用者名稱 (username):</span>");
        out.println("                        <span class='param-value'>" + escapeHtml(username) + "</span>");
        out.println("                    </li>");
        out.println("                    <li class='param-item'>");
        out.println("                        <span class='param-name'>電子郵件 (email):</span>");
        out.println("                        <span class='param-value'>" + escapeHtml(email) + "</span>");
        out.println("                    </li>");
        out.println("                    <li class='param-item'>");
        out.println("                        <span class='param-name'>部門 (department):</span>");
        out.println("                        <span class='param-value'>" + escapeHtml(department) + "</span>");
        out.println("                    </li>");
        out.println("                    <li class='param-item'>");
        out.println("                        <span class='param-name'>歡迎訊息 (welcomeMessage):</span>");
        out.println("                        <span class='param-value'>" + escapeHtml(welcomeMessage) + "</span>");
        out.println("                    </li>");
        out.println("                </ul>");
        out.println("            </div>");
        
        // 顯示系統配置參數
        out.println("            <div class='param-section'>");
        out.println("                <div class='param-title'>");
        out.println("                    <span class='icon'>⚙️</span>系統配置參數");
        out.println("                </div>");
        out.println("                <ul class='param-list'>");
        out.println("                    <li class='param-item'>");
        out.println("                        <span class='param-name'>除錯模式 (debugMode):</span>");
        out.println("                        <span class='param-value'>" + escapeHtml(debugMode) + "</span>");
        out.println("                    </li>");
        out.println("                    <li class='param-item'>");
        out.println("                        <span class='param-name'>最大連接數 (maxConnections):</span>");
        out.println("                        <span class='param-value'>" + escapeHtml(maxConnections) + "</span>");
        out.println("                    </li>");
        out.println("                    <li class='param-item'>");
        out.println("                        <span class='param-name'>超時時間 (timeout):</span>");
        out.println("                        <span class='param-value'>" + escapeHtml(timeout) + " ms</span>");
        out.println("                    </li>");
        out.println("                    <li class='param-item'>");
        out.println("                        <span class='param-name'>版本 (version):</span>");
        out.println("                        <span class='param-value'>" + escapeHtml(version) + "</span>");
        out.println("                    </li>");
        out.println("                </ul>");
        out.println("            </div>");
        
        // 顯示所有可用的 InitParam
        out.println("            <div class='all-params'>");
        out.println("                <div class='param-title'>");
        out.println("                    <span class='icon'>📋</span>所有初始化參數");
        out.println("                </div>");
        out.println("                <ul class='param-list'>");
        
        Enumeration<String> paramNames = getInitParameterNames();
        if (paramNames != null && paramNames.hasMoreElements()) {
            while (paramNames.hasMoreElements()) {
                String paramName = paramNames.nextElement();
                String paramValue = getInitParameter(paramName);
                out.println("                    <li class='param-item'>");
                out.println("                        <span class='param-name'>" + escapeHtml(paramName) + ":</span>");
                out.println("                        <span class='param-value'>" + escapeHtml(paramValue) + "</span>");
                out.println("                    </li>");
            }
        }
        
        out.println("                </ul>");
        out.println("            </div>");
        
        // 顯示註解程式碼範例
        out.println("            <div class='code-section'>");
        out.println("                <div class='code-title'>");
        out.println("                    <span class='icon'>💻</span>@WebServlet 註解範例");
        out.println("                </div>");
        out.println("                <div class='code-block'>");
        out.println("<span class='code-annotation'>@WebServlet</span>(");
        out.println("    name = <span class='code-string'>\"AnnotationInitParamServlet\"</span>,");
        out.println("    urlPatterns = {<span class='code-string'>\"/AnnotationInitParamServlet\"</span>},");
        out.println("    loadOnStartup = <span class='code-string'>1</span>,");
        out.println("    initParams = {");
        out.println("        <span class='code-annotation'>@WebInitParam</span>(name = <span class='code-string'>\"username\"</span>, value = <span class='code-string'>\"John Doe\"</span>),");
        out.println("        <span class='code-annotation'>@WebInitParam</span>(name = <span class='code-string'>\"email\"</span>, value = <span class='code-string'>\"john.doe@example.com\"</span>),");
        out.println("        <span class='code-comment'>// 更多參數...</span>");
        out.println("    }");
        out.println(")");
        out.println("<span class='code-keyword'>public class</span> AnnotationInitParamServlet <span class='code-keyword'>extends</span> HttpServlet {");
        out.println("    <span class='code-comment'>// 在 init() 方法中讀取參數</span>");
        out.println("    String <span class='highlight'>name = super.getInitParameter(\"username\")</span>;");
        out.println("}");
        out.println("                </div>");
        out.println("            </div>");
        
        // 顯示特殊訊息
        out.println("            <div class='param-section'>");
        out.println("                <div class='param-title'>");
        out.println("                    <span class='icon'>📞</span>根據您的程式碼範例");
        out.println("                </div>");
        out.println("                <div style='background: white; padding: 20px; border-radius: 8px; border: 2px solid #28a745;'>");
        out.println("                    <h2 style='color: #28a745; margin-top: 0;'>UserName is " + escapeHtml(username) + "</h2>");
        out.println("                    <p style='color: #6c757d; margin-bottom: 0;'>這就是您所要求的輸出格式！</p>");
        out.println("                </div>");
        out.println("            </div>");
        
        // 導航按鈕
        out.println("            <div class='navigation'>");
        out.println("                <a href='index.html' class='nav-button'>🏠 返回首頁</a>");
        out.println("                <a href='WebXmlInitParamServlet' class='nav-button secondary'>🔧 查看 web.xml 版本</a>");
        out.println("                <a href='javascript:location.reload()' class='nav-button'>🔄 重新載入</a>");
        out.println("            </div>");
        
        out.println("        </div>");
        out.println("    </div>");
        out.println("</body>");
        out.println("</html>");
    }
    
    /**
     * 記錄請求資訊（僅在除錯模式下）
     */
    private void logRequestInfo(HttpServletRequest request) {
        log("=== 請求資訊 (除錯模式) ===");
        log("請求方法: " + request.getMethod());
        log("請求 URI: " + request.getRequestURI());
        log("查詢字串: " + request.getQueryString());
        log("遠端地址: " + request.getRemoteAddr());
        log("User-Agent: " + request.getHeader("User-Agent"));
        log("========================");
    }
    
    /**
     * 顯示錯誤頁面
     */
    private void showError(PrintWriter out, String message) {
        out.println("<!DOCTYPE html>");
        out.println("<html lang='zh-TW'>");
        out.println("<head>");
        out.println("    <meta charset='UTF-8'>");
        out.println("    <title>錯誤頁面</title>");
        out.println("    <style>");
        out.println("        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background-color: #f5f5f5; }");
        out.println("        .error-container { max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }");
        out.println("        .error-title { color: #dc3545; font-size: 24px; margin-bottom: 20px; }");
        out.println("        .error-message { color: #6c757d; font-size: 16px; }");
        out.println("    </style>");
        out.println("</head>");
        out.println("<body>");
        out.println("    <div class='error-container'>");
        out.println("        <div class='error-title'>❌ 發生錯誤</div>");
        out.println("        <div class='error-message'>" + escapeHtml(message) + "</div>");
        out.println("    </div>");
        out.println("</body>");
        out.println("</html>");
    }
    
    /**
     * HTML 字符轉義，防止 XSS 攻擊
     */
    private String escapeHtml(String input) {
        if (input == null) return "";
        return input.replace("&", "&amp;")
                   .replace("<", "&lt;")
                   .replace(">", "&gt;")
                   .replace("\"", "&quot;")
                   .replace("'", "&#x27;");
    }
}