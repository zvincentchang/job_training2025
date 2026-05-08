# 📂 ECPay 綠界API 專案結構👍  

**完整的 Java 專案結構**，包含「建立訂單」與「驗證通知」兩個流程，並且可以直接放到 **Tomcat 或 Spring Boot** 測試。這樣你就能跑通 
**建立訂單 → 綠界付款頁面 → 接收通知 → 驗證 CheckMacValue** 的完整流程。

---

## 📂 專案結構

### Maven 專案目錄
```
ecpay-demo/
 ├── pom.xml
 └── src/
     └── main/
         ├── java/
         │   └── com/example/ecpay/
         │       ├── ECPayUtil.java       # 工具類別：計算 CheckMacValue
         │       ├── OrderController.java # 建立訂單 (Spring Boot REST Controller)
         │       └── NotifyController.java # 接收付款通知 (Spring Boot REST Controller)
         └── resources/
             └── application.properties   # 商店設定 (MerchantID, HashKey, HashIV)
```

---

## 📄 `pom.xml` (Spring Boot + Servlet + HttpClient)
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" ...>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>ecpay-demo</artifactId>
    <version>1.0.0</version>
    <packaging>jar</packaging>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.7.18</version>
    </parent>

    <dependencies>
        <!-- Spring Boot Web -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!-- Apache HttpClient (送出 API 請求用) -->
        <dependency>
            <groupId>org.apache.httpcomponents</groupId>
            <artifactId>httpclient</artifactId>
            <version>4.5.14</version>
        </dependency>
    </dependencies>
</project>
```


 
## 📄 `application.properties`
```properties

ecpay.merchantId=3002607
ecpay.hashKey=pwFHCqoQZGmho4w6
ecpay.hashIV=EkRm7iFT261dpevs
ecpay.serviceUrl=https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5

```


## 📄 `ECPayUtil.java`
```
import java.net.URLEncoder;
import java.security.MessageDigest;
import java.util.*;

public class ECPayUtil {

    /**
     * 產生 CheckMacValue
     * @param params API 參數 (不含 CheckMacValue)
     * @param hashKey 商店 HashKey
     * @param hashIV 商店 HashIV
     * @return 計算後的 CheckMacValue
     */
    public static String genCheckMacValue(Map<String, String> params, String hashKey, String hashIV) {
        // 1. 排除空值與 CheckMacValue 本身
        Map<String, String> filtered = new HashMap<>();
        for (Map.Entry<String, String> entry : params.entrySet()) {
            if (entry.getValue() != null && entry.getValue().length() > 0
                    && !entry.getKey().equalsIgnoreCase("CheckMacValue")) {
                filtered.put(entry.getKey(), entry.getValue());
            }
        }

        // 2. 依照參數名稱排序 (ASCII)
        List<String> keys = new ArrayList<>(filtered.keySet());
        Collections.sort(keys, String.CASE_INSENSITIVE_ORDER);

        // 3. 組合字串
        StringBuilder sb = new StringBuilder();
        sb.append("HashKey=").append(hashKey);
        for (String key : keys) {
            sb.append("&").append(key).append("=").append(filtered.get(key));
        }
        sb.append("&HashIV=").append(hashIV);

        // 4. URL encode (小寫)
        String encoded = urlEncode(sb.toString()).toLowerCase();

        // 5. 使用 SHA256 產生雜湊值 (也可改 MD5)
        return sha256(encoded).toUpperCase();
    }

    /**
     * 驗證 CheckMacValue
     * @param params API 回傳參數 (含 CheckMacValue)
     * @param hashKey 商店 HashKey
     * @param hashIV 商店 HashIV
     * @return 是否驗證成功
     */
    public static boolean checkMacValue(Map<String, String> params, String hashKey, String hashIV) {
        if (!params.containsKey("CheckMacValue")) return false;
        String checkMacValue = params.get("CheckMacValue");
        String genValue = genCheckMacValue(params, hashKey, hashIV);
        return checkMacValue.equalsIgnoreCase(genValue);
    }

    // URL Encode
    private static String urlEncode(String str) {
        try {
            return URLEncoder.encode(str, "UTF-8")
                    .replace("%21", "!")
                    .replace("%28", "(")
                    .replace("%29", ")")
                    .replace("%2A", "*")
                    .replace("%2D", "-")
                    .replace("%2E", ".")
                    .replace("%5F", "_");
        } catch (Exception e) {
            throw new RuntimeException("URL Encode Error", e);
        }
    }

    // SHA256
    private static String sha256(String str) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(str.getBytes("UTF-8"));
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }
            return hexString.toString();
        } catch (Exception e) {
            throw new RuntimeException("SHA256 Error", e);
        }
    }
}

```

## 📄 `OrderController.java`
```java
package com.example.ecpay;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URLEncoder;
import java.util.*;

@RestController
public class OrderController {

    @Value("${ecpay.merchantId}")
    private String merchantId;

    @Value("${ecpay.hashKey}")
    private String hashKey;

    @Value("${ecpay.hashIV}")
    private String hashIV;

    @Value("${ecpay.serviceUrl}")
    private String serviceUrl;

    @GetMapping("/createOrder")
    public String createOrder() throws Exception {
        Map<String, String> params = new LinkedHashMap<>();
        params.put("MerchantID", merchantId);
        params.put("MerchantTradeNo", "TestOrder" + System.currentTimeMillis());
        params.put("MerchantTradeDate", "2025/11/20 16:00:00");
        params.put("PaymentType", "aio");
        params.put("TotalAmount", "1000");
        params.put("TradeDesc", "測試交易");
params.put("ChoosePayment", "ALL");
        params.put("ItemName", "商品一#商品二");
        params.put("ReturnURL", "http://localhost:8080/notify");

        // 計算 CheckMacValue
        String checkMacValue = ECPayUtil.genCheckMacValue(params, hashKey, hashIV);
        params.put("CheckMacValue", checkMacValue);

        // 產生 HTML form
        StringBuilder form = new StringBuilder();
        form.append("<form id='ecpay' method='post' action='").append(serviceUrl).append("'>");
        for (Map.Entry<String, String> entry : params.entrySet()) {
            form.append("<input type='hidden' name='").append(entry.getKey())
                .append("' value='").append(entry.getValue()).append("'/>");
        }
        form.append("<input type='submit' value='送出付款'/>");
        form.append("</form>");
        form.append("<script>document.getElementById('ecpay').submit();</script>");

        return form.toString();
    }
}
```

---

## 📄 `NotifyController.java`
```java
package com.example.ecpay;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@RestController
public class NotifyController {

    @Value("${ecpay.hashKey}")
    private String hashKey;

    @Value("${ecpay.hashIV}")
    private String hashIV;

    @PostMapping("/notify")
    public String receiveNotify(HttpServletRequest request) {
        Map<String, String> params = new HashMap<>();
        request.getParameterMap().forEach((k, v) -> params.put(k, v[0]));

        boolean isValid = ECPayUtil.checkMacValue(params, hashKey, hashIV);

        if (isValid) {
            String merchantTradeNo = params.get("MerchantTradeNo");
            String rtnCode = params.get("RtnCode"); // 1 表示付款成功
            System.out.println("訂單編號: " + merchantTradeNo + " 狀態: " + rtnCode);

            // TODO: 更新訂單狀態 (已付款)
            return "1|OK";
        } else {
            return "0|Error";
        }
    }
}
```

---

## 🚀 測試流程
1. 啟動 Spring Boot (`mvn spring-boot:run`)。  
2. 瀏覽器打開 `http://localhost:8080/createOrder` → 自動導向綠界付款頁面。  
3. 完成付款後，綠界會 POST 通知到 `http://localhost:8080/notify`。  
4. Console 會顯示訂單編號與付款狀態，並回覆 `"1|OK"`。  

---

這樣你就有一個 **可直接放到 Tomcat 或 Spring Boot 測試的完整專案**。  


