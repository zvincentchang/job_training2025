package com.example.servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

/**
 * WebXmlInitParamServlet - 使用 web.xml 配置 InitParam 的範例
 * 
 * 此 Servlet 示範如何透過 web.xml 配置檔案來設定初始化參數
 * 並在 Servlet 中讀取這些參數值
 * 
 * @author 程式設計教授
 * @version 1.0
 */
public class WebXmlInitParamServlet extends HttpServlet {
    
    private static final long serialVersionUID = 1L;
    
    // 儲存從 InitParam 讀取的設定值
    private String username;
    private String email;
    private String department;
    private String welcomeMessage;
    private String debugMode;
    
    /**
     * Servlet 初始化方法
     * 在 Servlet 容器載入此 Servlet 時執行一次
     * 用於讀取 web.xml 中定義的初始化參數
     */
    @Override
    public void init() throws ServletException {
        super.init();
        
        // 從 web.xml 讀取初始化參數
        username = super.getInitParameter("username");
        email = super.getInitParameter("email");
        department = super.getInitParameter("department");
        welcomeMessage = super.getInitParameter("welcomeMessage");
        debugMode = super.getInitParameter("debugMode");
        
        // 如果參數為空，設定預設值
        if (username == null) username = "Guest";
        if (email == null) email = "unknown@example.com";
        if (department == null) department = "General";
        if (welcomeMessage == null) welcomeMessage = "Welcome to our system!";
        if (debugMode == null) debugMode = "false";
        
        // 在伺服器日誌中記錄初始化資訊
        log("WebXmlInitParamServlet 初始化完成");
        log("讀取的參數值 - username: " + username + ", email: " + email + 
            ", department: " + department + ", debugMode: " + debugMode);
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
            
        } catch (Exception e) {
            // 錯誤處理
            log("WebXmlInitParamServlet 發生錯誤", e);
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
        out.println("    <title>web.xml InitParam 範例</title>");
        out.println("    <style>");
        out.println("        body { font-family: Arial, '微軟正黑體', sans-serif; margin: 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; }");
        out.println("        .container { max-width: 800px; margin: 0 auto; background: white; border-radius: 15px; box-shadow: 0 15px 35px rgba(0,0,0,0.1); overflow: hidden; }");
        out.println("        .header { background: linear-gradient(135deg, #ff6b6b, #ee5a52); color: white; padding: 30px; text-align: center; }");
        out.println("        .header h1 { margin: 0; font-size: 28px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }");
        out.println("        .header p { margin: 10px 0 0 0; opacity: 0.9; }");
        out.println("        .content { padding: 40px; }");
        out.println("        .param-section { background: #f8f9fa; border-radius: 10px; padding: 25px; margin-bottom: 25px; border-left: 5px solid #007bff; }");
        out.println("        .param-title { color: #007bff; font-size: 20px; font-weight: bold; margin-bottom: 15px; display: flex; align-items: center; }");
        out.println("        .param-list { list-style: none; padding: 0; margin: 0; }");
        out.println("        .param-item { background: white; margin: 8px 0; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; justify-content: space-between; align-items: center; }");
        out.println("        .param-name { font-weight: bold; color: #495057; }");
        out.println("        .param-value { color: #28a745; font-family: 'Courier New', monospace; background: #e8f5e8; padding: 5px 10px; border-radius: 4px; }");
        out.println("        .all-params { background: #fff3cd; border-radius: 10px; padding: 25px; border-left: 5px solid #ffc107; }");
        out.println("        .code-block { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 6px; padding: 15px; margin: 15px 0; font-family: 'Courier New', monospace; font-size: 14px; }");
        out.println("        .highlight { background: #fff3cd; padding: 2px 5px; border-radius: 3px; }");
        out.println("        .navigation { text-align: center; margin-top: 30px; }");
        out.println("        .nav-button { display: inline-block; background: #007bff; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; margin: 0 10px; transition: background 0.3s; }");
        out.println("        .nav-button:hover { background: #0056b3; }");
        out.println("        .icon { margin-right: 8px; }");
        out.println("    </style>");
        out.println("</head>");
        out.println("<body>");
        out.println("    <div class='container'>");
        out.println("        <div class='header'>");
        out.println("            <h1>🔧 web.xml InitParam 範例</h1>");
        out.println("            <p>透過 web.xml 配置文件設定 Servlet 初始化參數</p>");
        out.println("        </div>");
        out.println("        <div class='content'>");
        
        // 顯示主要的 InitParam 資訊
        out.println("            <div class='param-section'>");
        out.println("                <div class='param-title'>");
        out.println("                    <span class='icon'>👤</span>主要配置參數");
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
        out.println("                    <li class='param-item'>");
        out.println("                        <span class='param-name'>除錯模式 (debugMode):</span>");
        out.println("                        <span class='param-value'>" + escapeHtml(debugMode) + "</span>");
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
        } else {
            out.println("                    <li class='param-item'>");
            out.println("                        <span style='color: #6c757d; font-style: italic;'>沒有找到任何初始化參數</span>");
            out.println("                    </li>");
        }
        
        out.println("                </ul>");
        out.println("            </div>");
        
        // 顯示程式碼範例
        out.println("            <div class='param-section'>");
        out.println("                <div class='param-title'>");
        out.println("                    <span class='icon'>💻</span>程式碼範例");
        out.println("                </div>");
        out.println("                <div class='code-block'>");
        out.println("// 在 Servlet 的 init() 方法中讀取參數<br>");
        out.println("String <span class='highlight'>name = super.getInitParameter(\"username\")</span>;<br>");
        out.println("response.setContentType(\"text/html;charset=utf-8\");<br>");
        out.println("response.getWriter().append(\"&lt;h2&gt;UserName is \").append(name+\"&lt;/h2&gt;\");");
        out.println("                </div>");
        out.println("            </div>");
        
        // 導航按鈕
        out.println("            <div class='navigation'>");
        out.println("                <a href='index.html' class='nav-button'>🏠 返回首頁</a>");
        out.println("                <a href='AnnotationInitParamServlet' class='nav-button'>📝 查看註解版本</a>");
        out.println("                <a href='javascript:location.reload()' class='nav-button'>🔄 重新載入</a>");
        out.println("            </div>");
        
        out.println("        </div>");
        out.println("    </div>");
        out.println("</body>");
        out.println("</html>");
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