# Spring Boot + Thymeleaf 完整教學指南
## 顧客管理系統實作

### 📚 學習目標
通過本教學，您將學會：
- Spring Boot MVC 架構設計
- Thymeleaf 模板引擎的使用
- 表單處理與資料綁定
- RESTful 控制器設計
- 前後端資料傳遞最佳實務

### 🏗️ 專案結構
```
src/main/java/
├── com.example.sbweb1113/
│   ├── controller/
│   │   └── ViewController.java
│   ├── model/
│   │   └── Customer.java
│   └── SbWeb1113Application.java
src/main/resources/
├── templates/
│   ├── index.html
│   ├── customerlist.html
│   ├── viewcustomer.html
│   └── customerupdate.html
└── application.properties
```

### 🎯 Maven 依賴設定

```xml
<dependencies>
    <!-- Spring Boot Web Starter -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    
    <!-- Thymeleaf Template Engine -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-thymeleaf</artifactId>
    </dependency>
    
    <!-- Spring Boot DevTools (開發用) -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
        <scope>runtime</scope>
        <optional>true</optional>
    </dependency>
</dependencies>
```

---

## 📋 第一部分：資料模型設計

### Customer.java - 顧客實體類別

```java
package com.example.sbweb1113.model;

import javax.validation.constraints.*;

/**
 * 顾客實體類別
 * 包含基本的顾客信息和驗證規則
 */
public class Customer {
    
    @NotBlank(message = "姓名不能為空")
    @Size(min = 2, max = 50, message = "姓名長度必須在2-50字符之間")
    private String name;
    
    @NotBlank(message = "地址不能為空")
    @Size(max = 200, message = "地址長度不能超過200字符")
    private String address;
    
    @Pattern(regexp = "^[0-9]+$", message = "重量必須是數字")
    @NotBlank(message = "重量不能為空")
    private String weight;

    // 預設建構子
    public Customer() {}

    // 完整建構子
    public Customer(String name, String address, String weight) {
        this.name = name;
        this.address = address;
        this.weight = weight;
    }

    // Getter 和 Setter 方法
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getWeight() { return weight; }
    public void setWeight(String weight) { this.weight = weight; }

    @Override
    public String toString() {
        return "Customer{name='" + name + "', address='" + address + "', weight='" + weight + "'}";
    }
}
```

---

## 🎮 第二部分：控制器設計

### ViewController.java - MVC 控制器

```java
package com.example.sbweb1113.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.example.sbweb1113.model.Customer;

import java.util.*;
@Controller
public class ViewController {
    /**
     * 🏠 首頁 - 基本字串傳遞示範
     * URL: /nameview
     * 功能：展示如何將簡單字串傳遞到 Thymeleaf 模板
     */
	@GetMapping(value="/nameview")
    public String home(Model model) {
       model.addAttribute("username", "ben");      
       return "index.html";
    }
	
    /**
     * 👤 顧客檢視 - Map 資料傳遞示範
     * URL: /customerview  
     * 功能：使用 Map 將顧客資料傳遞到模板
     */
	@GetMapping(value="/customerview")
    public String vcustomer(Model model) {
	   Map<String,String> data=new HashMap<>();
	   data.put("name","Henrry");
	   data.put("address","Kung Yuan Road");
	   data.put("weight","60");
       model.addAttribute("customer", data);      
       return "viewcustomer.html";
    }
	
    /**
     * ➕ 新增顧客 - 表單資料處理
     * URL: /customerCreate (POST)
     * 功能：處理表單提交的顧客資料，使用 @ModelAttribute 綁定
     */
	@PostMapping(value="/customerCreate")
    public String addCustomer(@ModelAttribute Customer data, Model model) {	   
       model.addAttribute("customer", data);      
       return "viewcustomer.html";
    }
    
    /**
     * 📝 JSON 顧客資料處理
     * URL: /jsoncustomer (POST)
     * 功能：處理 JSON 格式的顧客資料，使用 @RequestBody 綁定
     */
	@PostMapping(value="/jsoncustomer")
    public String addJsonCustomer(@RequestBody Customer data, Model model) {	   
       model.addAttribute("customer", data);      
       return "viewcustomer.html";
    }
	
    /**
     * 🔄 顧客更新頁面 - URL 參數處理
     * URL: /customerUpdate?id=name
     * 功能：根據 URL 參數載入顧客資料進行編輯
     */
	@GetMapping(value="/customerUpdate")
    public String customerUpdate(@RequestParam("id")String name,Model model) {
	   Customer data=new Customer();
	   data.setName(name);
	   data.setAddress("NA");
	   data.setWeight("0");
       model.addAttribute("customer", data);      
       return "customerupdate.html";
    }
	
    /**
     * 🔄 顧客更新頁面 - 預設資料示範
     * URL: /customerupdate
     * 功能：顯示編輯表單，預載入範例顧客資料
     */
	@GetMapping(value="/customerupdate")
    public String v2customer(Model model) {
	   Customer data=new Customer("Henrry","Fu Yuan Road","50");
       model.addAttribute("customer", data);      
       return "customerupdate.html";
    }
    
    /**
     * 🔄 顧客更新頁面 - ModelAndView 示範
     * URL: /customerupdate2
     * 功能：使用 ModelAndView 方式返回視圖和資料
     */
	@GetMapping(value="/customerupdate2")
    public ModelAndView v3customer() {
	   ModelAndView mv=new ModelAndView("customerupdate");	
	   Customer data=new Customer("Danis","Fu Yuan Road","55");
       mv.addObject("customer", data);      
       return mv;
    }
	
    /**
     * 📋 顧客清單 - 集合資料處理
     * URL: /customerlist
     * 功能：顯示所有顧客的清單，展示 Thymeleaf 迴圈處理
     */
	@GetMapping(value="/customerlist")
    public String listcustomer(Model model) {
	   List<Customer> data=List.of(
			   new Customer("Alan","Fu Yuan Road","50"),
			   new Customer("White","Lily Road","55"),
			   new Customer("Rose","Flower Road","53"));
	   
       model.addAttribute("customers", data);      
       return "customerlist.html";
    }
    
    /**
     * 💾 處理顧客表單提交
     * URL: /customerreceive (POST)
     * 功能：接收更新後的顧客資料並重導向到列表頁面
     */
    @PostMapping(value="/customerreceive")
    public String receiveCustomer(@ModelAttribute Customer customer, Model model) {
        // 在實際應用中，這裡會保存到資料庫
        System.out.println("收到顧客資料: " + customer);
        
        // 重導向到顧客列表頁面
        return "redirect:/customerlist";
    }
    
    /**
     * ❌ 刪除顧客 - URL 參數處理
     * URL: /customerDelete?id=name
     * 功能：根據顧客姓名刪除顧客（示範用）
     */
    @GetMapping(value="/customerDelete")
    public String deleteCustomer(@RequestParam("id") String name, Model model) {
        // 在實際應用中，這裡會從資料庫刪除
        System.out.println("刪除顧客: " + name);
        
        // 重導向到顧客列表頁面
        return "redirect:/customerlist";
    }
}
---

## 🎨 第三部分：Thymeleaf 模板設計

### 📝 Thymeleaf 語法速覽

| 功能 | 語法 | 說明 |
|-------------|-------------------------------------|--------------|
| **文字輸出** |       `th:text="${variable}"`       | 顯示變數內容 |
| **HTML輸出** |       `th:utext="${variable}"`      | 顯示HTML內容 |
| **屬性設定** |        `th:attr="href=${url}"`      | 設定屬性值   |
| **條件判斷** |        `th:if="${condition}"`       | 條件顯示     |
| **迴圈處理** |        `th:each="item : ${list}"`   | 遍歷集合     |
| **表單綁定** |       `th:object="${object}"`       | 綁定表單物件 |
| **欄位綁定** |       `th:field="*{property}"`      | 綁定物件屬性 |
| **URL產生**  |`th:href="@{/path(param=${value})}"`| 生成連結    |

### 🏠 index.html - 基本文字顯示

```html
<!DOCTYPE html>
<html lang="zh-TW" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Spring Boot + Thymeleaf 示範</title>
    <style>
        body { 
            font-family: 'Microsoft JhengHei', Arial, sans-serif; 
            margin: 40px; 
            background-color: #f5f5f5; 
        }
        .container { 
            max-width: 800px; 
            margin: 0 auto; 
            background: white; 
            padding: 30px; 
            border-radius: 10px; 
            box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
        }
        h1 { color: #2c3e50; }
        .welcome { 
            font-size: 18px; 
            color: #27ae60; 
            margin: 20px 0; 
        }
        .nav-links a { 
            display: inline-block; 
            margin: 10px 15px 10px 0; 
            padding: 10px 20px; 
            background: #3498db; 
            color: white; 
            text-decoration: none; 
            border-radius: 5px; 
        }
        .nav-links a:hover { background: #2980b9; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎉 歡迎使用 Spring Boot + Thymeleaf</h1>
        
        <!-- Thymeleaf 文字輸出示範 -->
        <div class="welcome">
            👋 您好，<span th:text="${username}">訪客</span>！
        </div>
        
        <!-- 導航連結 -->
        <div class="nav-links">
            <h3>📖 教學示範頁面：</h3>
            <a th:href="@{/customerview}">🔍 檢視顧客資料</a>
            <a th:href="@{/customerlist}">📋 顧客清單</a>
            <a th:href="@{/customerupdate}">✏️ 編輯顧客</a>
        </div>
        
        <!-- 新增顧客表單 -->
        <div style="margin-top: 30px; padding: 20px; background: #ecf0f1; border-radius: 5px;">
            <h3>➕ 新增顧客</h3>
            <form th:action="@{/customerCreate}" method="post" style="display: grid; gap: 10px; max-width: 400px;">
                <div>
                    <label>👤 姓名：</label>
                    <input type="text" name="name" required style="width: 200px; padding: 5px;"/>
                </div>
                <div>
                    <label>🏠 地址：</label>
                    <input type="text" name="address" required style="width: 200px; padding: 5px;"/>
                </div>
                <div>
                    <label>⚖️ 重量：</label>
                    <input type="number" name="weight" required style="width: 200px; padding: 5px;"/>
                </div>
                <div>
                    <button type="submit" style="width: 100px; padding: 8px; background: #27ae60; color: white; border: none; border-radius: 3px;">
                        新增
                    </button>
                </div>
            </form>
        </div>
    </div>
</body>
</html>
```

### 📋 customerlist.html - 清單與迴圈處理

```html
<!DOCTYPE html>
<html lang="zh-TW" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>顧客清單管理</title>
    <style>
        body { 
            font-family: 'Microsoft JhengHei', Arial, sans-serif; 
            margin: 20px; 
            background-color: #f8f9fa; 
        }
        .container { 
            max-width: 1000px; 
            margin: 0 auto; 
            background: white; 
            padding: 30px; 
            border-radius: 10px; 
            box-shadow: 0 2px 15px rgba(0,0,0,0.1); 
        }
        h1 { 
            color: #2c3e50; 
            border-bottom: 3px solid #3498db; 
            padding-bottom: 10px; 
        }
        .header-actions { 
            margin: 20px 0; 
            text-align: right; 
        }
        .btn { 
            display: inline-block; 
            padding: 10px 20px; 
            color: white; 
            text-decoration: none; 
            border-radius: 5px; 
            margin: 0 5px; 
        }
        .btn-primary { background-color: #3498db; }
        .btn-primary:hover { background-color: #2980b9; }
        .btn-success { background-color: #27ae60; }
        .btn-success:hover { background-color: #229954; }
        .btn-warning { background-color: #f39c12; }
        .btn-warning:hover { background-color: #e67e22; }
        .btn-danger { background-color: #e74c3c; }
        .btn-danger:hover { background-color: #c0392b; }
        
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-top: 20px;
            box-shadow: 0 1px 5px rgba(0,0,0,0.1);
        }
        th { 
            background-color: #34495e; 
            color: white; 
            padding: 15px; 
            text-align: left; 
            font-weight: bold;
        }
        td { 
            padding: 12px 15px; 
            border-bottom: 1px solid #ddd; 
        }
        tr:nth-child(even) { 
            background-color: #f8f9fa; 
        }
        tr:hover { 
            background-color: #e8f4fd; 
        }
        .actions { 
            white-space: nowrap; 
        }
        .actions a { 
            font-size: 12px; 
            padding: 5px 10px; 
            margin: 0 2px; 
        }
        .empty-message {
            text-align: center;
            color: #7f8c8d;
            font-style: italic;
            padding: 40px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📋 顧客清單管理</h1>
        
        <div class="header-actions">
            <a th:href="@{/}" class="btn btn-primary">🏠 回到首頁</a>
            <a th:href="@{/customerupdate}" class="btn btn-success">➕ 新增顧客</a>
        </div>

        <!-- Thymeleaf 條件判斷：檢查是否有顧客資料 -->
        <div th:if="${customers != null and #lists.size(customers) > 0}">
            <p><strong>📊 總計：</strong><span th:text="${#lists.size(customers)}">0</span> 位顧客</p>
            
            <table>
                <thead>
                    <tr>  
                        <th>👤 姓名</th>
                        <th>🏠 地址</th>
                        <th>⚖️ 重量</th>
                        <th>🔧 操作</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Thymeleaf 迴圈：遍歷顧客清單 -->
                    <tr th:each="customer, iterStat : ${customers}">      
                        <td>
                            <span th:text="${customer.name}">姓名</span>
                            <!-- 顯示索引號碼 -->
                            <small th:text="'(#' + ${iterStat.count} + ')'"></small>
                        </td>
                        <td th:text="${customer.address}">地址</td>
                        <td>
                            <span th:text="${customer.weight}">重量</span>
                            <small>kg</small>
                        </td>
                        <td class="actions">
                            <!-- Thymeleaf URL 產生：帶參數的連結 -->
                            <a th:href="@{/customerUpdate(id=${customer.name})}" 
                               class="btn btn-warning">✏️ 修改</a>
                            <a th:href="@{/customerDelete(id=${customer.name})}" 
                               class="btn btn-danger"
                               onclick="return confirm('確定要刪除這位顧客嗎？')">🗑️ 刪除</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <!-- Thymeleaf 條件判斷：沒有資料時的顯示 -->
        <div th:if="${customers == null or #lists.size(customers) == 0}" class="empty-message">
            <h3>📭 目前沒有顧客資料</h3>
            <p>點擊上方的「新增顧客」按鈕來新增第一位顧客吧！</p>
        </div>
    </div>
</body>
</html>
```

### 👤 viewcustomer.html - 物件顯示

```html
<!DOCTYPE html>
<html lang="zh-TW" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>顧客資料檢視</title>
    <style>
        body { 
            font-family: 'Microsoft JhengHei', Arial, sans-serif; 
            margin: 20px; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            min-height: 100vh;
        }
        .container { 
            max-width: 600px; 
            margin: 50px auto; 
            background: white; 
            padding: 40px; 
            border-radius: 15px; 
            box-shadow: 0 10px 30px rgba(0,0,0,0.2); 
        }
        h1 { 
            color: #2c3e50; 
            text-align: center; 
            margin-bottom: 30px;
        }
        .customer-card {
            background: #f8f9fa;
            border-left: 5px solid #3498db;
            padding: 25px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .customer-field {
            display: flex;
            align-items: center;
            margin: 15px 0;
            font-size: 18px;
        }
        .field-label {
            min-width: 80px;
            font-weight: bold;
            color: #34495e;
        }
        .field-value {
            color: #27ae60;
            font-weight: 500;
            margin-left: 10px;
        }
        .actions {
            text-align: center;
            margin-top: 30px;
        }
        .btn {
            display: inline-block;
            padding: 12px 25px;
            margin: 0 10px;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            transition: all 0.3s;
        }
        .btn-primary { background-color: #3498db; }
        .btn-primary:hover { background-color: #2980b9; transform: translateY(-2px); }
        .btn-secondary { background-color: #95a5a6; }
        .btn-secondary:hover { background-color: #7f8c8d; transform: translateY(-2px); }
        .btn-warning { background-color: #f39c12; }
        .btn-warning:hover { background-color: #e67e22; transform: translateY(-2px); }
    </style>
</head>
<body>
    <div class="container">
        <h1>👤 顧客資料詳情</h1>
        
        <div class="customer-card">
            <div class="customer-field">
                <span class="field-label">👤 姓名:</span>
                <span class="field-value" th:text="${customer.name}">顧客姓名</span>
            </div>
            
            <div class="customer-field">
                <span class="field-label">🏠 地址:</span>
                <span class="field-value" th:text="${customer.address}">顧客地址</span>
            </div>
            
            <div class="customer-field">
                <span class="field-label">⚖️ 重量:</span>
                <span class="field-value">
                    <span th:text="${customer.weight}">重量</span> kg
                </span>
            </div>
            
            <!-- Thymeleaf 表達式：計算BMI (假設身高170cm) -->
            <div class="customer-field" th:if="${customer.weight != null and customer.weight != '0'}">
                <span class="field-label">📊 BMI:</span>
                <span class="field-value" 
                      th:text="${#numbers.formatDecimal(T(Double).parseDouble(customer.weight) / (1.7 * 1.7), 1, 2)}">
                    計算中
                </span>
                <small>(假設身高170cm)</small>
            </div>
        </div>
        
        <div class="actions">
            <a th:href="@{/}" class="btn btn-primary">🏠 回首頁</a>
            <a th:href="@{/customerlist}" class="btn btn-secondary">📋 顧客清單</a>
            <a th:href="@{/customerUpdate(id=${customer.name})}" class="btn btn-warning">✏️ 編輯資料</a>
        </div>
    </div>
</body>
</html>
```

### ✏️ customerupdate.html - 表單處理

```html
<!DOCTYPE html>
<html lang="zh-TW" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>編輯顧客資料</title>
    <style>
        body { 
            font-family: 'Microsoft JhengHei', Arial, sans-serif; 
            margin: 20px; 
            background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); 
            min-height: 100vh;
        }
        .container { 
            max-width: 500px; 
            margin: 50px auto; 
            background: white; 
            padding: 40px; 
            border-radius: 15px; 
            box-shadow: 0 8px 25px rgba(0,0,0,0.1); 
        }
        h1 { 
            color: #2c3e50; 
            text-align: center; 
            margin-bottom: 30px;
            border-bottom: 3px solid #e74c3c;
            padding-bottom: 10px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #34495e;
            font-size: 16px;
        }
        input[type="text"], input[type="number"] {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid #bdc3c7;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s;
            box-sizing: border-box;
        }
        input[type="text"]:focus, input[type="number"]:focus {
            outline: none;
            border-color: #3498db;
            box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
        }
        input[readonly] {
            background-color: #f1f2f6;
            color: #7f8c8d;
            cursor: not-allowed;
        }
        .form-actions {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #ecf0f1;
        }
        .btn {
            display: inline-block;
            padding: 12px 30px;
            margin: 0 10px;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: bold;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s;
        }
        .btn-primary {
            background-color: #27ae60;
            color: white;
        }
        .btn-primary:hover {
            background-color: #229954;
            transform: translateY(-2px);
        }
        .btn-secondary {
            background-color: #95a5a6;
            color: white;
        }
        .btn-secondary:hover {
            background-color: #7f8c8d;
            transform: translateY(-2px);
        }
        .required {
            color: #e74c3c;
        }
        .form-note {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #17a2b8;
            margin-bottom: 20px;
            color: #495057;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>✏️ 編輯顧客資料</h1>
        
        <div class="form-note">
            💡 <strong>提示：</strong>帶有 <span class="required">*</span> 的欄位為必填項目
        </div>
        
        <!-- Thymeleaf 表單物件綁定：th:object="${customer}" -->
        <form th:action="@{/customerreceive}" th:object="${customer}" method="post">
            
            <div class="form-group">
                <label for="name">👤 顧客姓名 <span class="required">*</span></label>
                <!-- Thymeleaf 欄位綁定：th:field="*{name}" -->
                <input type="text" 
                       id="name" 
                       th:field="*{name}" 
                       required 
                       placeholder="請輸入顧客姓名"
                       maxlength="50"/>
            </div>
            
            <div class="form-group">
                <label for="address">🏠 地址 <span class="required">*</span></label>
                <!-- th:field 會自動處理 name, id, value 屬性 -->
                <input type="text" 
                       id="address" 
                       th:field="*{address}" 
                       required 
                       placeholder="請輸入詳細地址"
                       maxlength="200"/>
            </div>
            
            <div class="form-group">
                <label for="weight">⚖️ 重量 (公斤) <span class="required">*</span></label>
                <input type="number" 
                       id="weight" 
                       th:field="*{weight}" 
                       required 
                       min="1" 
                       max="500" 
                       step="0.1"
                       placeholder="請輸入重量"/>
            </div>
            
            <div class="form-actions">
                <button type="submit" class="btn btn-primary">💾 儲存變更</button>
                <a th:href="@{/customerlist}" class="btn btn-secondary">❌ 取消</a>
            </div>
        </form>
        
        <!-- 額外的導航連結 -->
        <div style="text-align: center; margin-top: 20px; padding-top: 15px; border-top: 1px solid #ecf0f1;">
            <a th:href="@{/}" style="color: #3498db; text-decoration: none;">🏠 回到首頁</a>
        </div>
    </div>
</body>
</html>
```

---

## ⚙️ 第四部分：專案配置與進階功能

### 📋 完整的 application.properties 配置

```properties
# 應用程式基本配置
spring.application.name=spring-boot-thymeleaf-demo
server.port=8080
server.servlet.context-path=/sbweb1113

# Thymeleaf 模板引擎配置
spring.thymeleaf.prefix=classpath:/templates/
spring.thymeleaf.suffix=.html
spring.thymeleaf.mode=HTML
spring.thymeleaf.encoding=UTF-8
spring.thymeleaf.servlet.content-type=text/html
spring.thymeleaf.cache=false
spring.thymeleaf.check-template=true

# 開發環境配置
spring.devtools.restart.enabled=true
spring.devtools.livereload.enabled=true

# 靜態資源配置
spring.mvc.static-path-pattern=/static/**
spring.web.resources.static-locations=classpath:/static/

# 日誌配置
logging.level.org.springframework.web=INFO
logging.level.com.example.sbweb1113=DEBUG
```

### 🔧 增強版 Customer 實體類別

```java
package com.example.sbweb1113.model;

import javax.validation.constraints.*;
import java.time.LocalDateTime;

/**
 * 增強版顧客實體類別
 * 包含驗證規則和審計欄位
 */
public class Customer {
    
    @NotBlank(message = "姓名不能為空")
    @Size(min = 2, max = 50, message = "姓名長度必須在2-50字符之間")
    private String name;
    
    @NotBlank(message = "地址不能為空")
    @Size(max = 200, message = "地址長度不能超過200字符")
    private String address;
    
    @Pattern(regexp = "^[0-9]+(\\.[0-9]+)?$", message = "重量必須是有效數字")
    @NotBlank(message = "重量不能為空")
    private String weight;
    
    @Email(message = "請輸入有效的電子郵件格式")
    private String email;
    
    private String phone;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    // 建構子
    public Customer() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    public Customer(String name, String address, String weight) {
        this();
        this.name = name;
        this.address = address;
        this.weight = weight;
    }

    public Customer(String name, String address, String weight, String email, String phone) {
        this(name, address, weight);
        this.email = email;
        this.phone = phone;
    }

    // Getter 和 Setter 方法
    public String getName() { return name; }
    public void setName(String name) { 
        this.name = name; 
        this.updatedAt = LocalDateTime.now();
    }

    public String getAddress() { return address; }
    public void setAddress(String address) { 
        this.address = address; 
        this.updatedAt = LocalDateTime.now();
    }

    public String getWeight() { return weight; }
    public void setWeight(String weight) { 
        this.weight = weight; 
        this.updatedAt = LocalDateTime.now();
    }

    public String getEmail() { return email; }
    public void setEmail(String email) { 
        this.email = email; 
        this.updatedAt = LocalDateTime.now();
    }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { 
        this.phone = phone; 
        this.updatedAt = LocalDateTime.now();
    }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    // 輔助方法
    public double getWeightAsDouble() {
        try {
            return Double.parseDouble(this.weight);
        } catch (NumberFormatException e) {
            return 0.0;
        }
    }
    
    public double calculateBMI(double heightInMeters) {
        return getWeightAsDouble() / (heightInMeters * heightInMeters);
    }
    
    public String getWeightCategory() {
        double w = getWeightAsDouble();
        if (w < 60) return "輕量級";
        if (w > 75) return "重量級";
        return "標準級";
    }

    @Override
    public String toString() {
        return String.format("Customer{name='%s', address='%s', weight='%s', email='%s'}", 
                           name, address, weight, email);
    }
}
```

### 🎯 進階控制器功能

```java
package com.example.sbweb1113.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import com.example.sbweb1113.model.Customer;

import javax.validation.Valid;
import java.util.*;
import java.util.stream.Collectors;

@Controller
public class AdvancedViewController {

    // 模擬資料庫
    private static List<Customer> customerDatabase = new ArrayList<>(Arrays.asList(
        new Customer("Alice Johnson", "台北市信義區忠孝東路123號", "55", "alice@email.com", "0912-345-678"),
        new Customer("Bob Smith", "新北市板橋區文化路456號", "70", "bob@email.com", "0923-456-789"),
        new Customer("Carol Davis", "桃園市中壢區中正路789號", "48", "carol@email.com", "0934-567-890"),
        new Customer("David Brown", "台中市西屯區台灣大道321號", "82", "david@email.com", "0945-678-901"),
        new Customer("Emily Wilson", "高雄市前金區中正四路654號", "52", "emily@email.com", "0956-789-012")
    ));
    
    /**
     * 🏠 改良版首頁
     */
    @GetMapping("/")
    public String homepage(Model model) {
        model.addAttribute("customerCount", customerDatabase.size());
        model.addAttribute("averageWeight", calculateAverageWeight());
        model.addAttribute("recentCustomers", getRecentCustomers(3));
        model.addAttribute("systemStats", getSystemStats());
        return "homepage";
    }
    
    /**
     * 📊 顧客統計儀表板
     */
    @GetMapping("/customerStats")
    public String customerStatistics(Model model) {
        Map<String, Object> stats = generateStatistics();
        model.addAttribute("statistics", stats);
        model.addAttribute("customers", customerDatabase);
        model.addAttribute("chartData", generateChartData());
        return "customerstats";
    }
    
    /**
     * 🔍 進階搜尋功能
     */
    @GetMapping("/customerAdvancedSearch")
    public String advancedSearch(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String minWeight,
            @RequestParam(required = false) String maxWeight,
            @RequestParam(required = false) String email,
            Model model) {
        
        List<Customer> filteredCustomers = performAdvancedSearch(name, city, minWeight, maxWeight, email);
        
        model.addAttribute("customers", filteredCustomers);
        model.addAttribute("searchParams", buildSearchParams(name, city, minWeight, maxWeight, email));
        model.addAttribute("resultCount", filteredCustomers.size());
        model.addAttribute("totalCount", customerDatabase.size());
        model.addAttribute("searchSummary", generateSearchSummary(name, city, minWeight, maxWeight, email));
        
        return "customeradvancedsearch";
    }
    
    /**
     * 📝 完整的顧客表單處理
     */
    @GetMapping("/customerForm")
    public String showCustomerForm(@RequestParam(required = false) Integer index, Model model) {
        Customer customer;
        boolean isEdit = false;
        
        if (index != null && index >= 0 && index < customerDatabase.size()) {
            customer = customerDatabase.get(index);
            isEdit = true;
            model.addAttribute("customerIndex", index);
        } else {
            customer = new Customer();
        }
        
        model.addAttribute("customer", customer);
        model.addAttribute("isEdit", isEdit);
        model.addAttribute("cities", getCityOptions());
        
        return "customerform";
    }
    
    /**
     * 💾 提交顧客表單
     */
    @PostMapping("/customerSubmit")
    public String submitCustomer(
            @Valid @ModelAttribute Customer customer,
            BindingResult bindingResult,
            @RequestParam(required = false) Integer customerIndex,
            Model model,
            RedirectAttributes redirectAttributes) {
        
        // 自訂驗證
        if (!bindingResult.hasErrors()) {
            performCustomValidation(customer, bindingResult, customerIndex);
        }
        
        if (bindingResult.hasErrors()) {
            model.addAttribute("customer", customer);
            model.addAttribute("isEdit", customerIndex != null);
            model.addAttribute("customerIndex", customerIndex);
            model.addAttribute("cities", getCityOptions());
            model.addAttribute("validationErrors", bindingResult.getAllErrors());
            return "customerform";
        }
        
        // 保存或更新顧客
        String message;
        if (customerIndex != null && customerIndex >= 0 && customerIndex < customerDatabase.size()) {
            customerDatabase.set(customerIndex, customer);
            message = "✅ 顧客「" + customer.getName() + "」資料更新成功！";
        } else {
            customerDatabase.add(customer);
            message = "✅ 顧客「" + customer.getName() + "」新增成功！";
        }
        
        redirectAttributes.addFlashAttribute("successMessage", message);
        return "redirect:/customerlist";
    }
    
    /**
     * 🗑️ 刪除顧客 (POST 方式更安全)
     */
    @PostMapping("/customerDelete/{index}")
    public String deleteCustomer(
            @PathVariable int index,
            RedirectAttributes redirectAttributes) {
        
        if (index < 0 || index >= customerDatabase.size()) {
            redirectAttributes.addFlashAttribute("errorMessage", "❌ 找不到要刪除的顧客！");
            return "redirect:/customerlist";
        }
        
        Customer deletedCustomer = customerDatabase.remove(index);
        redirectAttributes.addFlashAttribute("successMessage", 
            "🗑️ 顧客「" + deletedCustomer.getName() + "」已成功刪除！");
        
        return "redirect:/customerlist";
    }
    
    /**
     * 📊 AJAX API 端點
     */
    @GetMapping("/api/customers")
    @ResponseBody
    public Map<String, Object> getCustomersApi(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        
        int start = page * size;
        int end = Math.min(start + size, customerDatabase.size());
        
        List<Customer> pageCustomers = customerDatabase.subList(start, end);
        
        Map<String, Object> response = new HashMap<>();
        response.put("customers", pageCustomers);
        response.put("totalElements", customerDatabase.size());
        response.put("totalPages", (int) Math.ceil((double) customerDatabase.size() / size));
        response.put("currentPage", page);
        response.put("pageSize", size);
        response.put("timestamp", new Date());
        
        return response;
    }
    
    /**
     * 📈 統計 API
     */
    @GetMapping("/api/statistics")
    @ResponseBody
    public Map<String, Object> getStatisticsApi() {
        return generateStatistics();
    }
    
    // === 輔助方法 ===
    
    private List<Customer> performAdvancedSearch(String name, String city, String minWeight, String maxWeight, String email) {
        return customerDatabase.stream()
            .filter(customer -> {
                boolean matches = true;
                
                if (name != null && !name.trim().isEmpty()) {
                    matches &= customer.getName().toLowerCase().contains(name.toLowerCase());
                }
                
                if (city != null && !city.trim().isEmpty()) {
                    matches &= customer.getAddress().toLowerCase().contains(city.toLowerCase());
                }
                
                if (email != null && !email.trim().isEmpty()) {
                    matches &= customer.getEmail() != null && 
                              customer.getEmail().toLowerCase().contains(email.toLowerCase());
                }
                
                if (minWeight != null && !minWeight.trim().isEmpty()) {
                    try {
                        double min = Double.parseDouble(minWeight);
                        matches &= customer.getWeightAsDouble() >= min;
                    } catch (NumberFormatException ignored) {}
                }
                
                if (maxWeight != null && !maxWeight.trim().isEmpty()) {
                    try {
                        double max = Double.parseDouble(maxWeight);
                        matches &= customer.getWeightAsDouble() <= max;
                    } catch (NumberFormatException ignored) {}
                }
                
                return matches;
            })
            .collect(Collectors.toList());
    }
    
    private Map<String, String> buildSearchParams(String name, String city, String minWeight, String maxWeight, String email) {
        Map<String, String> params = new HashMap<>();
        params.put("name", name != null ? name : "");
        params.put("city", city != null ? city : "");
        params.put("minWeight", minWeight != null ? minWeight : "");
        params.put("maxWeight", maxWeight != null ? maxWeight : "");
        params.put("email", email != null ? email : "");
        return params;
    }
    
    private String generateSearchSummary(String name, String city, String minWeight, String maxWeight, String email) {
        List<String> conditions = new ArrayList<>();
        if (name != null && !name.trim().isEmpty()) conditions.add("姓名包含「" + name + "」");
        if (city != null && !city.trim().isEmpty()) conditions.add("地址包含「" + city + "」");
        if (email != null && !email.trim().isEmpty()) conditions.add("郵箱包含「" + email + "」");
        if (minWeight != null && !minWeight.trim().isEmpty()) conditions.add("重量 ≥ " + minWeight + "kg");
        if (maxWeight != null && !maxWeight.trim().isEmpty()) conditions.add("重量 ≤ " + maxWeight + "kg");
        
        return conditions.isEmpty() ? "顯示所有顧客" : String.join("、", conditions);
    }
    
    private void performCustomValidation(Customer customer, BindingResult bindingResult, Integer customerIndex) {
        // 檢查重複姓名 (編輯模式下排除自己)
        boolean nameExists = customerDatabase.stream()
            .anyMatch(c -> {
                if (customerIndex != null) {
                    int currentIndex = customerDatabase.indexOf(c);
                    return currentIndex != customerIndex.intValue() && 
                           c.getName().equalsIgnoreCase(customer.getName());
                } else {
                    return c.getName().equalsIgnoreCase(customer.getName());
                }
            });
        
        if (nameExists) {
            bindingResult.rejectValue("name", "duplicate.name", "姓名「" + customer.getName() + "」已存在");
        }
        
        // 檢查重量範圍
        try {
            double weight = Double.parseDouble(customer.getWeight());
            if (weight < 20 || weight > 200) {
                bindingResult.rejectValue("weight", "invalid.weight.range", "重量必須在 20-200 kg 之間");
            }
        } catch (NumberFormatException e) {
            bindingResult.rejectValue("weight", "invalid.weight.format", "重量格式無效");
        }
    }
    
    private double calculateAverageWeight() {
        return customerDatabase.stream()
            .mapToDouble(Customer::getWeightAsDouble)
            .average()
            .orElse(0.0);
    }
    
    private List<Customer> getRecentCustomers(int limit) {
        return customerDatabase.stream()
            .sorted((a, b) -> b.getCreatedAt().compareTo(a.getCreatedAt()))
            .limit(limit)
            .collect(Collectors.toList());
    }
    
    private Map<String, Object> getSystemStats() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("javaVersion", System.getProperty("java.version"));
        stats.put("osName", System.getProperty("os.name"));
        stats.put("totalMemory", Runtime.getRuntime().totalMemory() / (1024 * 1024) + " MB");
        stats.put("freeMemory", Runtime.getRuntime().freeMemory() / (1024 * 1024) + " MB");
        return stats;
    }
    
    private Map<String, Object> generateStatistics() {
        Map<String, Object> stats = new HashMap<>();
        
        stats.put("totalCustomers", customerDatabase.size());
        stats.put("averageWeight", calculateAverageWeight());
        stats.put("maxWeight", customerDatabase.stream().mapToDouble(Customer::getWeightAsDouble).max().orElse(0));
        stats.put("minWeight", customerDatabase.stream().mapToDouble(Customer::getWeightAsDouble).min().orElse(0));
        
        // 城市分佈
        Map<String, Long> cityDistribution = customerDatabase.stream()
            .collect(Collectors.groupingBy(c -> extractCity(c.getAddress()), Collectors.counting()));
        stats.put("cityDistribution", cityDistribution);
        
        // 重量分佈
        long lightWeight = customerDatabase.stream().filter(c -> c.getWeightAsDouble() < 60).count();
        long normalWeight = customerDatabase.stream().filter(c -> c.getWeightAsDouble() >= 60 && c.getWeightAsDouble() <= 75).count();
        long heavyWeight = customerDatabase.stream().filter(c -> c.getWeightAsDouble() > 75).count();
        
        Map<String, Long> weightDistribution = new HashMap<>();
        weightDistribution.put("輕量級", lightWeight);
        weightDistribution.put("標準級", normalWeight);
        weightDistribution.put("重量級", heavyWeight);
        stats.put("weightDistribution", weightDistribution);
        
        return stats;
    }
    
    private Map<String, Object> generateChartData() {
        Map<String, Object> chartData = new HashMap<>();
        
        // 重量趨勢數據
        List<Double> weights = customerDatabase.stream()
            .map(Customer::getWeightAsDouble)
            .collect(Collectors.toList());
        chartData.put("weights", weights);
        
        // 城市標籤
        Set<String> cities = customerDatabase.stream()
            .map(c -> extractCity(c.getAddress()))
            .collect(Collectors.toSet());
        chartData.put("cities", new ArrayList<>(cities));
        
        return chartData;
    }
    
    private String extractCity(String address) {
        if (address == null) return "未知";
        if (address.contains("台北")) return "台北";
        if (address.contains("新北")) return "新北";
        if (address.contains("桃園")) return "桃園";
        if (address.contains("台中")) return "台中";
        if (address.contains("台南")) return "台南";
        if (address.contains("高雄")) return "高雄";
        return "其他";
    }
    
    private List<String> getCityOptions() {
        return Arrays.asList("台北市", "新北市", "桃園市", "台中市", "台南市", "高雄市", "其他");
    }
}
```

---

## 🎨 第五部分：進階 Thymeleaf 模板

### 🏠 homepage.html - 改良版首頁

```html
<!DOCTYPE html>
<html lang="zh-TW" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Spring Boot Thymeleaf 顧客管理系統</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Microsoft JhengHei', 'Segoe UI', Arial, sans-serif; 
            line-height: 1.6;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .container { 
            max-width: 1200px; 
            margin: 0 auto; 
            padding: 20px;
        }
        .header {
            text-align: center;
            color: white;
            margin-bottom: 40px;
            padding: 40px 0;
        }
        .header h1 {
            font-size: 3em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .header p {
            font-size: 1.2em;
            opacity: 0.9;
        }
        .dashboard {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        .card {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }
        .card h3 {
            color: #2c3e50;
            margin-bottom: 15px;
            font-size: 1.4em;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-bottom: 20px;
        }
        .stat-item {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
        }
        .stat-number {
            font-size: 2em;
            font-weight: bold;
            color: #3498db;
            display: block;
        }
        .stat-label {
            color: #7f8c8d;
            font-size: 0.9em;
        }
        .navigation-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        .nav-button {
            display: block;
            padding: 15px 20px;
            background: linear-gradient(135deg, #3498db, #2980b9);
            color: white;
            text-decoration: none;
            border-radius: 10px;
            text-align: center;
            font-weight: bold;
            transition: all 0.3s;
            border: none;
            cursor: pointer;
        }
        .nav-button:hover {
            background: linear-gradient(135deg, #2980b9, #1f4e79);
            transform: translateY(-2px);
        }
        .nav-button.green { 
            background: linear-gradient(135deg, #27ae60, #229954); 
        }
        .nav-button.green:hover { 
            background: linear-gradient(135deg, #229954, #1e7e34); 
        }
        .nav-button.orange { 
            background: linear-gradient(135deg, #f39c12, #e67e22); 
        }
        .nav-button.orange:hover { 
            background: linear-gradient(135deg, #e67e22, #d35400); 
        }
        .nav-button.purple { 
            background: linear-gradient(135deg, #9b59b6, #8e44ad); 
        }
        .nav-button.purple:hover { 
            background: linear-gradient(135deg, #8e44ad, #7d3c98); 
        }
        .recent-customers {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            margin-top: 20px;
        }
        .customer-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #ecf0f1;
        }
        .customer-item:last-child {
            border-bottom: none;
        }
        .customer-info strong {
            color: #2c3e50;
        }
        .customer-meta {
            font-size: 0.9em;
            color: #7f8c8d;
        }
        .system-info {
            background: #2c3e50;
            color: white;
            border-radius: 15px;
            padding: 20px;
            margin-top: 20px;
            font-size: 0.9em;
        }
        .system-info h4 {
            margin-bottom: 10px;
        }
        .system-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 10px;
        }
        @media (max-width: 768px) {
            .stats-grid {
                grid-template-columns: 1fr;
            }
            .navigation-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- 頁面標題 -->
        <div class="header">
            <h1>🏢 顧客管理系統</h1>
            <p>Spring Boot + Thymeleaf 完整解決方案</p>
            <p><small th:text="'當前時間：' + ${#dates.format(currentTime, 'yyyy年MM月dd日 HH:mm:ss')}">載入中...</small></p>
        </div>
        
        <!-- 儀表板卡片 -->
        <div class="dashboard">
            <!-- 統計摘要卡片 -->
            <div class="card">
                <h3>📊 系統統計</h3>
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-number" th:text="${customerCount}">0</span>
                        <span class="stat-label">總顧客數</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number" th:text="${#numbers.formatDecimal(averageWeight, 1, 1)}">0</span>
                        <span class="stat-label">平均重量(kg)</span>
                    </div>
                </div>
            </div>
            
            <!-- 功能導航卡片 -->
            <div class="card">
                <h3>🚀 快速操作</h3>
                <div class="navigation-grid">
                    <a th:href="@{/customerlist}" class="nav-button">📋 顧客清單</a>
                    <a th:href="@{/customerForm}" class="nav-button green">➕ 新增顧客</a>
                    <a th:href="@{/customerAdvancedSearch}" class="nav-button orange">🔍 進階搜尋</a>
                    <a th:href="@{/customerStats}" class="nav-button purple">📈 統計報表</a>
                </div>
            </div>
        </div>
        
        <!-- 最近新增的顧客 -->
        <div class="recent-customers" th:if="${recentCustomers != null and #lists.size(recentCustomers) > 0}">
            <h3>🆕 最近新增的顧客</h3>
            <div th:each="customer : ${recentCustomers}" class="customer-item">
                <div class="customer-info">
                    <strong th:text="${customer.name}">顧客姓名</strong><br/>
                    <span class="customer-meta" th:text="${customer.address}">地址</span>
                </div>
                <div class="customer-meta">
                    <span th:text="${customer.weight + ' kg'}">重量</span><br/>
                    <small th:text="${#dates.format(customer.createdAt, 'MM/dd HH:mm')}">建立時間</small>
                </div>
            </div>
        </div>
        
        <!-- 系統資訊 -->
        <div class="system-info">
            <h4>💻 系統資訊</h4>
            <div class="system-grid">
                <div>Java 版本: <span th:text="${systemStats.javaVersion}">Unknown</span></div>
                <div>作業系統: <span th:text="${systemStats.osName}">Unknown</span></div>
                <div>總記憶體: <span th:text="${systemStats.totalMemory}">Unknown</span></div>
                <div>可用記憶體: <span th:text="${systemStats.freeMemory}">Unknown</span></div>
            </div>
        </div>
    </div>
</body>
</html>
```

---

## 📊 第六部分：進階功能與最佳實務

### 🔍 customerform.html - 增強版表單

```html
<!DOCTYPE html>
<html lang="zh-TW" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title th:text="${isEdit} ? '編輯顧客資料' : '新增顧客資料'">顧客表單</title>
    <style>
        body { 
            font-family: 'Microsoft JhengHei', Arial, sans-serif; 
            margin: 0; 
            background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); 
            min-height: 100vh;
        }
        .container { 
            max-width: 600px; 
            margin: 30px auto; 
            background: white; 
            padding: 40px; 
            border-radius: 20px; 
            box-shadow: 0 15px 35px rgba(0,0,0,0.1); 
        }
        .form-header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #e74c3c;
        }
        .form-header h1 {
            color: #2c3e50;
            margin: 0;
            font-size: 2.2em;
        }
        .form-header p {
            color: #7f8c8d;
            margin: 10px 0 0 0;
        }
        .alert {
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 5px;
            border: 1px solid;
        }
        .alert-danger {
            background-color: #f8d7da;
            border-color: #f5c6cb;
            color: #721c24;
        }
        .alert-success {
            background-color: #d4edda;
            border-color: #c3e6cb;
            color: #155724;
        }
        .form-group {
            margin-bottom: 25px;
            position: relative;
        }
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
            color: #34495e;
            font-size: 16px;
        }
        .form-group input, .form-group select {
            width: 100%;
            padding: 15px;
            border: 2px solid #bdc3c7;
            border-radius: 10px;
            font-size: 16px;
            transition: all 0.3s;
            box-sizing: border-box;
            background-color: #fff;
        }
        .form-group input:focus, .form-group select:focus {
            outline: none;
            border-color: #3498db;
            box-shadow: 0 0 10px rgba(52, 152, 219, 0.3);
            transform: translateY(-2px);
        }
        .form-group.has-error input {
            border-color: #e74c3c;
            background-color: #fdf2f2;
        }
        .error-message {
            color: #e74c3c;
            font-size: 14px;
            margin-top: 5px;
            display: block;
        }
        .required {
            color: #e74c3c;
            font-weight: bold;
        }
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .form-actions {
            text-align: center;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 2px solid #ecf0f1;
        }
        .btn {
            display: inline-block;
            padding: 15px 35px;
            margin: 0 10px;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: bold;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s;
            min-width: 140px;
        }
        .btn-primary {
            background: linear-gradient(135deg, #27ae60, #229954);
            color: white;
        }
        .btn-primary:hover {
            background: linear-gradient(135deg, #229954, #1e7e34);
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(39, 174, 96, 0.4);
        }
        .btn-secondary {
            background: linear-gradient(135deg, #95a5a6, #7f8c8d);
            color: white;
        }
        .btn-secondary:hover {
            background: linear-gradient(135deg, #7f8c8d, #6c7b7d);
            transform: translateY(-3px);
        }
        .form-note {
            background: linear-gradient(135deg, #e8f5e8, #f0f8f0);
            padding: 20px;
            border-radius: 10px;
            border-left: 5px solid #27ae60;
            margin-bottom: 30px;
            color: #2d5a2d;
        }
        .character-counter {
            position: absolute;
            right: 10px;
            top: 45px;
            font-size: 12px;
            color: #7f8c8d;
        }
        @media (max-width: 768px) {
            .container {
                margin: 10px;
                padding: 20px;
            }
            .form-row {
                grid-template-columns: 1fr;
                gap: 10px;
            }
            .btn {
                display: block;
                margin: 10px 0;
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- 表單標題 -->
        <div class="form-header">
            <h1 th:text="${isEdit} ? '✏️ 編輯顧客資料' : '➕ 新增顧客資料'">表單標題</h1>
            <p th:if="${isEdit}">修改現有顧客的詳細資料</p>
            <p th:unless="${isEdit}">輸入新顧客的完整資訊</p>
        </div>
        
        <!-- 錯誤訊息顯示 -->
        <div th:if="${validationErrors != null and #lists.size(validationErrors) > 0}" class="alert alert-danger">
            <strong>⚠️ 表單驗證失敗：</strong>
            <ul style="margin: 10px 0 0 20px; padding: 0;">
                <li th:each="error : ${validationErrors}" th:text="${error.defaultMessage}">錯誤訊息</li>
            </ul>
        </div>
        
        <!-- 成功訊息 -->
        <div th:if="${successMessage != null}" class="alert alert-success" th:text="${successMessage}">
            成功訊息
        </div>
        
        <!-- 表單提示 -->
        <div class="form-note">
            💡 <strong>填寫提示：</strong>
            <ul style="margin: 10px 0 0 0; padding-left: 20px;">
                <li>標有 <span class="required">*</span> 的欄位為必填項目</li>
                <li>重量請以公斤為單位，支援小數點</li>
                <li>電子郵件將用於系統通知</li>
            </ul>
        </div>
        
        <!-- 顧客表單 -->
        <form th:action="@{/customerSubmit}" th:object="${customer}" method="post" onsubmit="return validateForm()">
            <!-- 隱藏的索引欄位 (編輯模式) -->
            <input type="hidden" name="customerIndex" th:value="${customerIndex}" th:if="${isEdit}"/>
            
            <!-- 基本資料 -->
            <div class="form-row">
                <div class="form-group" th:classappend="${#fields.hasErrors('name')} ? 'has-error'">
                    <label for="name">👤 顧客姓名 <span class="required">*</span></label>
                    <input type="text" 
                           id="name" 
                           th:field="*{name}" 
                           required 
                           placeholder="請輸入完整姓名"
                           maxlength="50"
                           onkeyup="updateCharacterCounter('name', 50)"/>
                    <span class="character-counter" id="name-counter">0/50</span>
                    <span th:if="${#fields.hasErrors('name')}" 
                          th:errors="*{name}" 
                          class="error-message">姓名錯誤</span>
                </div>
                
                <div class="form-group" th:classappend="${#fields.hasErrors('weight')} ? 'has-error'">
                    <label for="weight">⚖️ 重量 (公斤) <span class="required">*</span></label>
                    <input type="number" 
                           id="weight" 
                           th:field="*{weight}" 
                           required 
                           min="20" 
                           max="200" 
                           step="0.1"
                           placeholder="例：65.5"
                           onchange="calculateBMI()"/>
                    <span th:if="${#fields.hasErrors('weight')}" 
                          th:errors="*{weight}" 
                          class="error-message">重量錯誤</span>
                </div>
            </div>
            
            <!-- 聯絡資訊 -->
            <div class="form-row">
                <div class="form-group" th:classappend="${#fields.hasErrors('email')} ? 'has-error'">
                    <label for="email">📧 電子郵件</label>
                    <input type="email" 
                           id="email" 
                           th:field="*{email}" 
                           placeholder="example@email.com"/>
                    <span th:if="${#fields.hasErrors('email')}" 
                          th:errors="*{email}" 
                          class="error-message">郵件錯誤</span>
                </div>
                
                <div class="form-group">
                    <label for="phone">📱 電話號碼</label>
                    <input type="tel" 
                           id="phone" 
                           th:field="*{phone}" 
                           placeholder="0912-345-678"
                           pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"/>
                </div>
            </div>
            
            <!-- 地址資訊 -->
            <div class="form-group" th:classappend="${#fields.hasErrors('address')} ? 'has-error'">
                <label for="address">🏠 詳細地址 <span class="required">*</span></label>
                <input type="text" 
                       id="address" 
                       th:field="*{address}" 
                       required 
                       placeholder="請輸入完整地址"
                       maxlength="200"
                       onkeyup="updateCharacterCounter('address', 200)"/>
                <span class="character-counter" id="address-counter">0/200</span>
                <span th:if="${#fields.hasErrors('address')}" 
                      th:errors="*{address}" 
                      class="error-message">地址錯誤</span>
            </div>
            
            <!-- BMI 計算結果顯示 -->
            <div class="form-group" style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                <label>📊 BMI 計算 (假設身高 170cm)</label>
                <div id="bmi-result" style="font-size: 1.2em; color: #2c3e50; font-weight: bold;">
                    請輸入重量後自動計算
                </div>
            </div>
            
            <!-- 表單按鈕 -->
            <div class="form-actions">
                <button type="submit" class="btn btn-primary">
                    <span th:text="${isEdit} ? '💾 更新資料' : '✅ 新增顧客'">提交</span>
                </button>
                <a th:href="@{/customerlist}" class="btn btn-secondary">❌ 取消</a>
            </div>
        </form>
        
        <!-- 回到首頁連結 -->
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ecf0f1;">
            <a th:href="@{/}" style="color: #3498db; text-decoration: none; font-weight: bold;">🏠 回到首頁</a>
        </div>
    </div>
    
    <script>
        // 字符計數器更新
        function updateCharacterCounter(fieldId, maxLength) {
            const field = document.getElementById(fieldId);
            const counter = document.getElementById(fieldId + '-counter');
            const currentLength = field.value.length;
            
            counter.textContent = currentLength + '/' + maxLength;
            counter.style.color = currentLength > maxLength * 0.8 ? '#e74c3c' : '#7f8c8d';
        }
        
        // BMI 計算
        function calculateBMI() {
            const weightField = document.getElementById('weight');
            const bmiResult = document.getElementById('bmi-result');
            
            const weight = parseFloat(weightField.value);
            const height = 1.7; // 假設身高 170cm
            
            if (weight && weight > 0) {
                const bmi = weight / (height * height);
                let category = '';
                let color = '';
                
                if (bmi < 18.5) {
                    category = '過輕';
                    color = '#3498db';
                } else if (bmi < 24) {
                    category = '正常';
                    color = '#27ae60';
                } else if (bmi < 27) {
                    category = '過重';
                    color = '#f39c12';
                } else {
                    category = '肥胖';
                    color = '#e74c3c';
                }
                
                bmiResult.innerHTML = `BMI: <span style="color: ${color}">${bmi.toFixed(1)} (${category})</span>`;
            } else {
                bmiResult.textContent = '請輸入有效的重量';
            }
        }
        
        // 表單驗證
        function validateForm() {
            const name = document.getElementById('name').value.trim();
            const weight = document.getElementById('weight').value;
            const address = document.getElementById('address').value.trim();
            
            if (!name) {
                alert('⚠️ 請輸入顧客姓名');
                document.getElementById('name').focus();
                return false;
            }
            
            if (!weight || weight <= 0) {
                alert('⚠️ 請輸入有效的重量');
                document.getElementById('weight').focus();
                return false;
            }
            
            if (!address) {
                alert('⚠️ 請輸入詳細地址');
                document.getElementById('address').focus();
                return false;
            }
            
            return true;
        }
        
        // 頁面載入時初始化
        document.addEventListener('DOMContentLoaded', function() {
            // 更新字符計數器
            updateCharacterCounter('name', 50);
            updateCharacterCounter('address', 200);
            
            // 計算初始BMI
            calculateBMI();
            
            // 電話號碼格式化
            document.getElementById('phone').addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 4) {
                    value = value.substring(0,4) + '-' + value.substring(4);
                }
                if (value.length >= 9) {
                    value = value.substring(0,9) + '-' + value.substring(9,12);
                }
                e.target.value = value;
            });
        });
    </script>
</body>
</html>
```

---

## 🎓 第七部分：學習總結與最佳實務

### 📚 核心知識回顧

1. **Spring Boot MVC 架構**
   - 控制器請求映射
   - 模型資料傳遞
   - 視圖解析機制

2. **Thymeleaf 模板引擎**
   - 表達式語言 (OGNL)
   - 條件判斷和迴圈
   - 表單資料綁定

3. **前端技術整合**
   - 響應式設計
   - JavaScript 互動
   - CSS 動畫效果

4. **進階功能實作**
   - 資料驗證機制
   - 搜尋和過濾
   - 統計圖表顯示

### 🚀 專業開發建議

1. **效能最佳化**
   - 模板快取設定
   - 靜態資源壓縮
   - 資料庫查詢優化

2. **安全性考量**
   - 輸入資料驗證
   - XSS 攻擊防護
   - CSRF 令牌保護

3. **可維護性設計**
   - 程式碼模組化
   - 註解和文件
   - 單元測試覆蓋

### 💡 進階學習方向

- **Spring Security** - 認證授權
- **Spring Data JPA** - 資料持久化
- **RESTful API** - 前後端分離
- **微服務架構** - Spring Cloud
- **容器化部署** - Docker/Kubernetes

這份 Spring Boot + Thymeleaf 完整教學涵蓋了從基礎到進階的所有重要概念，提供了實用的程式碼範例和最佳實務指引，是學習現代 Java Web 開發的寶貴資源！🎯
