package com.example.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * MathOPServlet - 數學運算 Servlet
 * 
 * 此 Servlet 處理來自 HTML 表單的數學運算請求
 * 支援加法、減法、乘法、除法四種基本運算
 * 
 * @author 程式設計教授
 * @version 1.0
 */
@WebServlet("/MathOPServlet")
public class MathOPServlet extends HttpServlet {
    
    private static final long serialVersionUID = 1L;
    
    /**
     * 處理 POST 請求
     * 從表單接收兩個數字和運算類型，執行相應的數學運算
     * 
     * @param request  HTTP 請求物件
     * @param response HTTP 回應物件
     * @throws ServletException Servlet 異常
     * @throws IOException      I/O 異常
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // 設定回應內容類型為 HTML，編碼為 UTF-8
        response.setContentType("text/html;charset=UTF-8");
        
        // 設定請求編碼，處理中文字符
        request.setCharacterEncoding("UTF-8");
        
        // 取得 PrintWriter 物件用於輸出 HTML
        PrintWriter out = response.getWriter();
        
        try {
            // 從表單取得參數
            String no1Str = request.getParameter("no1");
            String no2Str = request.getParameter("no2");
            String operation = request.getParameter("submit");
            
            // 驗證參數是否為空
            if (no1Str == null || no2Str == null || operation == null) {
                showError(out, "參數不完整，請重新輸入！");
                return;
            }
            
            // 轉換字串為數字
            double num1 = Double.parseDouble(no1Str.trim());
            double num2 = Double.parseDouble(no2Str.trim());
            
            // 執行數學運算
            double result = performCalculation(num1, num2, operation);
            
            // 顯示結果頁面
            showResult(out, num1, num2, operation, result);
            
        } catch (NumberFormatException e) {
            // 處理數字格式錯誤
            showError(out, "輸入的不是有效數字，請檢查輸入！");
        } catch (ArithmeticException e) {
            // 處理數學運算錯誤（如除以零）
            showError(out, "數學運算錯誤：" + e.getMessage());
        } catch (Exception e) {
            // 處理其他未預期的錯誤
            showError(out, "系統發生錯誤：" + e.getMessage());
        } finally {
            // 確保關閉輸出流
            out.close();
        }
    }
    
    /**
     * 執行數學運算
     * 
     * @param num1      第一個數字
     * @param num2      第二個數字
     * @param operation 運算類型
     * @return 運算結果
     * @throws ArithmeticException 當除以零時拋出異常
     */
    private double performCalculation(double num1, double num2, String operation) 
            throws ArithmeticException {
        
        switch (operation.toLowerCase()) {
            case "add":
                return num1 + num2;
                
            case "substract":  // 注意：原表單中的拼字為 "substract"
                return num1 - num2;
                
            case "multiply":
                return num1 * num2;
                
            case "divide":
                if (num2 == 0) {
                    throw new ArithmeticException("除數不能為零！");
                }
                return num1 / num2;
                
            default:
                throw new IllegalArgumentException("不支援的運算類型：" + operation);
        }
    }
    
    /**
     * 顯示運算結果頁面
     * 
     * @param out       PrintWriter 輸出物件
     * @param num1      第一個數字
     * @param num2      第二個數字
     * @param operation 運算類型
     * @param result    運算結果
     */
    private void showResult(PrintWriter out, double num1, double num2, 
                           String operation, double result) {
        
        out.println("<!DOCTYPE html>");
        out.println("<html lang='zh-TW'>");
        out.println("<head>");
        out.println("    <meta charset='UTF-8'>");
        out.println("    <meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        out.println("    <title>數學運算結果</title>");
        out.println("    <style>");
        out.println("        body { font-family: Arial, '微軟正黑體', sans-serif; margin: 50px; background-color: #f5f5f5; }");
        out.println("        .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }");
        out.println("        .result-box { background: #e8f5e8; border: 2px solid #4CAF50; padding: 20px; border-radius: 5px; margin: 20px 0; }");
        out.println("        .calculation { font-size: 24px; font-weight: bold; color: #2e7d32; text-align: center; }");
        out.println("        .back-btn { background: #2196F3; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; }");
        out.println("        .back-btn:hover { background: #1976D2; }");
        out.println("        h1 { color: #333; text-align: center; }");
        out.println("    </style>");
        out.println("</head>");
        out.println("<body>");
        out.println("    <div class='container'>");
        out.println("        <h1>🧮 數學運算結果</h1>");
        out.println("        <div class='result-box'>");
        out.println("            <div class='calculation'>");
        
        // 根據運算類型顯示相應的符號和中文說明
        String operatorSymbol = getOperatorSymbol(operation);
        String operatorName = getOperatorName(operation);
        
        out.println("                " + formatNumber(num1) + " " + operatorSymbol + " " + formatNumber(num2) + " = " + formatNumber(result));
        out.println("            </div>");
        out.println("            <p style='text-align: center; margin-top: 15px; color: #666;'>");
        out.println("                運算類型：" + operatorName);
        out.println("            </p>");
        out.println("        </div>");
        out.println("        <div style='text-align: center;'>");
        out.println("            <button class='back-btn' onclick='history.back()'>返回計算器</button>");
        out.println("        </div>");
        out.println("    </div>");
        out.println("</body>");
        out.println("</html>");
    }
    
    /**
     * 顯示錯誤頁面
     * 
     * @param out     PrintWriter 輸出物件
     * @param message 錯誤訊息
     */
    private void showError(PrintWriter out, String message) {
        out.println("<!DOCTYPE html>");
        out.println("<html lang='zh-TW'>");
        out.println("<head>");
        out.println("    <meta charset='UTF-8'>");
        out.println("    <meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        out.println("    <title>錯誤頁面</title>");
        out.println("    <style>");
        out.println("        body { font-family: Arial, '微軟正黑體', sans-serif; margin: 50px; background-color: #f5f5f5; }");
        out.println("        .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }");
        out.println("        .error-box { background: #ffebee; border: 2px solid #f44336; padding: 20px; border-radius: 5px; margin: 20px 0; }");
        out.println("        .error-message { color: #c62828; font-size: 18px; text-align: center; }");
        out.println("        .back-btn { background: #f44336; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; }");
        out.println("        .back-btn:hover { background: #d32f2f; }");
        out.println("        h1 { color: #333; text-align: center; }");
        out.println("    </style>");
        out.println("</head>");
        out.println("<body>");
        out.println("    <div class='container'>");
        out.println("        <h1>⚠️ 發生錯誤</h1>");
        out.println("        <div class='error-box'>");
        out.println("            <div class='error-message'>" + message + "</div>");
        out.println("        </div>");
        out.println("        <div style='text-align: center;'>");
        out.println("            <button class='back-btn' onclick='history.back()'>返回重試</button>");
        out.println("        </div>");
        out.println("    </div>");
        out.println("</body>");
        out.println("</html>");
    }
    
    /**
     * 取得運算符號
     */
    private String getOperatorSymbol(String operation) {
        switch (operation.toLowerCase()) {
            case "add": return "+";
            case "substract": return "-";
            case "multiply": return "×";
            case "divide": return "÷";
            default: return "?";
        }
    }
    
    /**
     * 取得運算中文名稱
     */
    private String getOperatorName(String operation) {
        switch (operation.toLowerCase()) {
            case "add": return "加法";
            case "substract": return "減法";
            case "multiply": return "乘法";
            case "divide": return "除法";
            default: return "未知運算";
        }
    }
    
    /**
     * 格式化數字顯示（去除不必要的小數點）
     */
    private String formatNumber(double number) {
        if (number == (long) number) {
            return String.format("%d", (long) number);
        } else {
            return String.format("%.2f", number);
        }
    }
    
    /**
     * 處理 GET 請求，重導向到 POST 方法
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        
        out.println("<!DOCTYPE html>");
        out.println("<html lang='zh-TW'>");
        out.println("<head><meta charset='UTF-8'><title>錯誤</title></head>");
        out.println("<body>");
        out.println("<h2>此 Servlet 僅支援 POST 方法</h2>");
        out.println("<p>請使用表單提交數據。</p>");
        out.println("<a href='index.html'>返回首頁</a>");
        out.println("</body>");
        out.println("</html>");
        
        out.close();
    }
}