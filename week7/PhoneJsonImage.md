# Spring Boot Phone API 開發教學文件

## 專案概述

本教學將指導您建立一個基於 Spring Boot 的手機產品管理 REST API，整合 DummyJSON 測試資料來開發完整的 CRUD 功能。

## 目錄結構

```
com.example.demo/
├── model/
│   ├── Phone.java           # 實體類別
│   └── PhoneRepository.java # 資料存取層
└── controller/
    └── PhoneController.java # 控制器層
```

## 第一章：實體類別設計 (Phone.java)

### 1.1 實體類別分析

```java name=Phone.java
package com.example.demo.model;

import java.util.List;
import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name="phones")
public class Phone {
    @Id
    private Long id;
    private String title;
    private String description;
    private String category;
    private BigDecimal price;
    private Integer stock;
    private String brand;
    private String sku;
    @Column(length=2048)
    private List<String> images;
    
    // 建構子、getter、setter 方法...
}

application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/myphone
spring.datasource.username=root
spring.datasource.password=1234
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true 

spring.jpa.properties.hibernate.hbm2ddl.auto=update
spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl

```

### 1.2 重要註解說明

| 註解 | 用途 | 說明 |
|------|------|------|
| `@Entity` | 標示實體類別 | 告訴 JPA 這是一個需要映射到資料庫的實體 |
| `@Table(name="phones")` | 指定資料表名稱 | 將實體映射到 "phones" 資料表 |
| `@Id` | 主鍵標示 | 標示 id 欄位為主鍵 |
| `@Column(length=2048)` | 欄位屬性 | 設定 images 欄位最大長度 |

### 1.3 資料類型選擇

- **BigDecimal**：用於 price 欄位，確保金額計算精確度
- **List<String>**：用於 images 欄位，儲存多個圖片 URL
- **Integer**：用於 stock 欄位，庫存數量

## 第二章：資料存取層 (PhoneRepository.java)

### 2.1 Repository 介面

```java name=PhoneRepository.java
package com.example.demo.model;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PhoneRepository extends JpaRepository<Phone,Long> {
    // Spring Data JPA 自動提供基本 CRUD 操作
}
```

### 2.2 JpaRepository 提供的功能

| 方法 | 功能 | 回傳類型 |
|------|------|----------|
| `save(entity)` | 儲存實體 | Phone |
| `findById(id)` | 根據 ID 查詢 | Optional<Phone> |
| `findAll()` | 查詢所有記錄 | List<Phone> |
| `deleteById(id)` | 根據 ID 刪除 | void |
| `saveAll(entities)` | 批次儲存 | List<Phone> |

## 第三章：控制器層 (PhoneController.java)

### 3.1 控制器設計

```java name=PhoneController.java
@RestController
@RequestMapping("/api")
public class PhoneController {
    
    @Autowired
    PhoneRepository dao;
    
    // API 端點方法...
}
```

### 3.2 API 端點分析

#### 3.2.1 顯示 UI 頁面
```java
@GetMapping("/phone")
public ModelAndView showUI() {
    return new ModelAndView("phone");
}
```
- **功能**：返回手機管理的前端頁面
- **URL**：`GET /api/phone`
- **回傳**：ModelAndView 物件，渲染 "phone" 模板

#### 3.2.2 根據 ID 查詢手機
```java
@GetMapping("/phone/{id}")
public Phone showUIById(@PathVariable("id") long id) {
    return dao.findById(id).get();
}
```
- **功能**：根據 ID 查詢特定手機資訊
- **URL**：`GET /api/phone/{id}`
- **參數**：路徑變數 id
- **回傳**：Phone 物件

#### 3.2.3 批次儲存手機資料
```java
@PostMapping("/phone")
public ResponseEntity<Phone> saveAll(@RequestBody Phone[] phs) {
    System.out.println(phs[0]);
    List<Phone> data = dao.saveAll(Arrays.asList(phs));
    if(data != null && data.size() > 0)
        return ResponseEntity.ok(data.get(0));
    else
        return ResponseEntity.noContent().build();
}
```
- **功能**：接收手機陣列並批次儲存到資料庫
- **URL**：`POST /api/phone`
- **參數**：JSON 陣列格式的手機資料
- **回傳**：ResponseEntity<Phone>

## 第四章：整合 DummyJSON 資料

### 4.1 DummyJSON 手機資料來源

使用以下 DummyJSON API 端點獲取測試資料：

```
https://dummyjson.com/products/category/smartphones
```

### 4.2 資料格式範例

```json
{
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "category": "smartphones",
  "price": 549,
  "stock": 94,
  "brand": "Apple",
  "sku": "WW013001",
  "images": [
    "https://dummyjson.com/image/i/products/1/1.jpg",
    "https://dummyjson.com/image/i/products/1/2.jpg"
  ]
}
```
```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">

<head>
    <meta charset="utf-8">
    <title>jQuery Get Phones</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
</head>

<body>
    <h2>
      URL:https://dummyjson.com/products/category/smartphones
    </h2>
    <button id="getPhones">Get Json Phones</button>
    <button id="savePhones">Save Phones</button>


    </table>
    <script>
        var phones=[];
        $("#getPhones").on("click", function () {           
            $.ajax({
                method: 'GET',
                url: 'https://dummyjson.com/products/category/smartphones', //設定資料的網址                
                dataType: "json", //設定回傳的資料格式 
                success: onSuccess //設定當Ajax要求成功時所要執行的函式
            });
        });
        function onSuccess(data) {
        	phones=data.products;            
            console.log(JSON.stringify(phones[0]));
        }

        $("#savePhones").on("click", function () {           
            $.ajax({
                method: 'POST',
                url: '/api/phone', //設定資料的網址 
                contentType:'application/json',
                data: JSON.stringify(phones),               
                dataType: "json", //設定回傳的資料格式 
                success: function(data){
                   console.log(JSON.stringify(data));
                }
            });
        });
        
    </script>
</body>
</html>

```

## 第五章：實作建議與最佳實務

### 5.1 錯誤處理改進

```java
@GetMapping("/phone/{id}")
public ResponseEntity<Phone> showUIById(@PathVariable("id") long id) {
    Optional<Phone> phone = dao.findById(id);
    if (phone.isPresent()) {
        return ResponseEntity.ok(phone.get());
    } else {
        return ResponseEntity.notFound().build();
    }
}
```

### 5.2 輸入驗證

```java
@PostMapping("/phone")
public ResponseEntity<Phone> saveAll(@Valid @RequestBody Phone[] phs) {
    // 新增 @Valid 註解進行輸入驗證
}
```

### 5.3 異常處理

```java
@ExceptionHandler(EntityNotFoundException.class)
public ResponseEntity<String> handleNotFound(EntityNotFoundException e) {
    return ResponseEntity.notFound().build();
}
```

## 第六章：測試建議

### 6.1 單元測試範例

```java
@Test
public void testFindPhoneById() {
    Phone phone = new Phone();
    phone.setId(1L);
    phone.setTitle("Test Phone");
    
    when(phoneRepository.findById(1L)).thenReturn(Optional.of(phone));
    
    Phone result = phoneController.showUIById(1L);
    assertEquals("Test Phone", result.getTitle());
}
```

### 6.2 API 測試

使用 Postman 或 curl 測試：

```bash
# 查詢所有手機
curl -X GET http://localhost:8080/api/phone

# 查詢特定手機
curl -X GET http://localhost:8080/api/phone/1

# 新增手機
curl -X POST http://localhost:8080/api/phone \
  -H "Content-Type: application/json" \
  -d '[{"title":"iPhone 15","price":999.99,"brand":"Apple"}]'
```

## 結論

本教學展示了如何使用 Spring Boot 建立一個完整的手機產品管理 API，包含：

1. **實體設計**：使用 JPA 註解定義資料模型
2. **資料存取**：利用 Spring Data JPA 簡化資料庫操作
3. **REST API**：提供完整的 CRUD 功能端點
4. **整合測試資料**：使用 DummyJSON 作為資料來源

這個架構為後續功能擴展（如分頁、排序、搜尋等）提供了良好的基礎。