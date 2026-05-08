Spring Boot 3.x Google Authenticator 二步驗證學習步驟

# 0. 前置需求

- 已安裝 JDK 17 或以上
- 已安裝 Maven
- 已安裝 Spring Boot CLI 或 IDE（如 IntelliJ IDEA）
- 下載 [Google Authenticator App](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) 至手機

# 1. 介紹 Google Authenticator

Google Authenticator 是一種基於時間的一次性密碼（TOTP）驗證機制，可用於增強應用程式的安全性。使用者需透過 Google Authenticator App 掃描 QR Code，並輸入動態產生的驗證碼以完成登入。

# 2. 建立 Spring Boot 專案

## 2.1 新增專案
使用 Spring Initializr 建立專案，並選擇以下依賴：
- Spring Web
- Thymeleaf（若需前端頁面）

## 2.2 引入必要的相依性
將以下依賴加入 pom.xml：
```xml
<dependency>
	<groupId>com.warrenstrange</groupId>
	<artifactId>googleauth</artifactId>
	<version>1.4.0</version>
</dependency>
<dependency>
	<groupId>com.google.zxing</groupId>
	<artifactId>core</artifactId>
	<version>3.4.1</version>
</dependency>
<dependency>
	<groupId>com.google.zxing</groupId>
	<artifactId>javase</artifactId>
	<version>3.4.1</version>
</dependency>
```

# 3. 資料庫設計建議

建議建立一個用戶資料表，儲存用戶帳號、密鑰（Secret Key）、電話等資訊：
```sql
CREATE TABLE users (
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(50) NOT NULL,
	secret_key VARCHAR(32) NOT NULL,
	phone VARCHAR(20)
);
```
> **安全提醒：** Secret Key 請勿硬編碼於程式，應動態產生並存入資料庫。

# 4. 建立 Google Authenticator 服務

## 4.1 產生密鑰（Secret Key）
```java
// 產生 Google Authenticator 密鑰
@GetMapping("/auth/generate-key")
public String generateKey() {
		GoogleAuthenticatorKey key = gAuth.createCredentials();
		// TODO: 將 key.getKey() 存入資料庫
		return "你的密鑰 (Secret Key): " + key.getKey();
}
```

## 4.2 產生 QR Code
```java
// 產生 otpauth URL 並轉為 QR Code
@GetMapping("/auth/generate-qr")
public ModelAndView generateQRCode(Model model) throws WriterException {
		GoogleAuthenticatorKey key = gAuth.createCredentials();
		String otpAuthURL = "otpauth://totp/MyApp?secret=" + key.getKey() + "&issuer=MyApp";
		String qrCodeBase64 = generateQRCodeImage(otpAuthURL);
		model.addAttribute("qrCode", qrCodeBase64);
		model.addAttribute("secret", key.getKey());
		// TODO: 將 key.getKey()、使用者資訊存入資料庫
		return new ModelAndView("qrview");
}
```

### QR Code 產生方法
```java
// 產生 QR Code 圖片並轉為 base64
private String generateQRCodeImage(String data) throws WriterException {
		QRCodeWriter qrCodeWriter = new QRCodeWriter();
		BitMatrix bitMatrix = qrCodeWriter.encode(data, BarcodeFormat.QR_CODE, 250, 250);
		BufferedImage image = new BufferedImage(250, 250, BufferedImage.TYPE_INT_RGB);
		for (int x = 0; x < 250; x++) {
				for (int y = 0; y < 250; y++) {
						image.setRGB(x, y, bitMatrix.get(x, y) ? 0x000000 : 0xFFFFFF);
				}
		}
		try {
				ByteArrayOutputStream baos = new ByteArrayOutputStream();
				ImageIO.write(image, "png", baos);
				return "data:image/png;base64," + Base64.getEncoder().encodeToString(baos.toByteArray());
		} catch (Exception e) {
				return "無法產生 QR Code";
		}
}
```

### 前端頁面（qrview.html 範例）
```html
<h2>掃描 QR Code 以設定 Google Authenticator</h2>
<img th:src="${qrCode}" alt="Google Authenticator QR Code">
<p>密鑰 (Secret Key)：<label th:text="${ secret }"></label></p>
<form>
	User Name : <input type="text" name="username" value="teacher" style="font-size:20px" required><br>
	Phone : <input type="text" name="phone" value="23826015" style="font-size:20px" required><br>
</form>
<!-- (Secret Key), User Name, Phone 必須存入資料庫 -->
```

## 4.3 驗證 OTP
```java
// 驗證 Google Authenticator 產生的驗證碼
@PostMapping("/auth/validate")
public String validateCode(@RequestParam String secret, @RequestParam int code) {
		boolean isCodeValid = gAuth.authorize(secret, code);
		// TODO: 增加驗證碼錯誤次數限制，防止暴力破解
		return isCodeValid ? "驗證成功！" : "驗證失敗！";
}
```

# 5. 登入流程與測試

## 5.1 登入頁面（login.html 範例）
```html
<form action="/auth/login" method="post">
	<input type="hidden" name="secret" value="YOUR_SECRET_KEY">
	<label>Google 手機驗證碼：</label>
	<input type="text" name="code" required pattern="\\d{6}"><br>
	<button type="submit">登入</button>
</form>
```

## 5.2 後端登入驗證
```java
// 登入驗證，建議從資料庫取得 secret
@PostMapping("/auth/login")
public String login(@RequestParam String secret, @RequestParam int code, Model model) {
		boolean isCodeValid = gAuth.authorize(secret, code);
		if (isCodeValid) {
				model.addAttribute("message", "登入成功！");
				return "登入成功";
		} else {
				model.addAttribute("message", "驗證失敗，請重試。請確認驗證碼是否正確，或重新同步 Google Authenticator 時間。");
				return "驗證失敗";
		}
}
```

# 6. 測試步驟

1. 啟動 Spring Boot 伺服器。
2. 訪問 `/auth/generate-qr` 產生 QR Code。
3. 用 Google Authenticator 掃描 QR Code。
4. 於 `/auth/login` 輸入驗證碼進行登入測試。

# 7. 常見問題與除錯建議

- 驗證碼失敗：請確認手機時間已同步，或重新掃描 QR Code。
- Secret Key 請勿硬編碼，正式環境請為每位用戶產生獨立密鑰。
- 建議加入驗證碼錯誤次數限制，防止暴力破解。
- 若遇到 QR Code 無法顯示，請檢查 ZXing 依賴與圖片產生邏輯。

# 8. 參考資源

- [Google Authenticator 官方說明](https://support.google.com/accounts/answer/1066447)
- [Spring Boot 官方文件](https://spring.io/projects/spring-boot)
- [ZXing QR Code 產生器](https://github.com/zxing/zxing)

---

> 本文件已依據最佳實務補充資料庫設計、API 路徑一致性、錯誤處理、程式碼註解、HTML 驗證、常見問題與參考資源，適合初學者或開發者快速上手。
<!DOCTYPE html>
<html lang="zh-tw" xmlns:th="http://www.thymeleaf.org">
<head>
<meta charset="UTF-8">
<title>登入</title>
</head>
<body>
<h2>登入</h2>
<form action="/auth/login" method="post">
<input type="hidden" name="secret" value="YEAKFLPGDKHFEFZN">
<label>Google 手機驗證碼：</label>
<input type="text" name="code" required><br>
<button type="submit">登入</button>
</form>
</body>
</html>
完整程式碼:
import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.warrenstrange.googleauth.GoogleAuthenticator;
import com.warrenstrange.googleauth.GoogleAuthenticatorKey;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.ui.Model;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import java.io.ByteArrayOutputStream;
import java.util.Base64;
@RestController
@RequestMapping("/auth")
public class GoogleAuthController {
String SecretKey="YEAKFLPGDKHFEFZN";
private final GoogleAuthenticator gAuth = new GoogleAuthenticator();
@GetMapping("/login")
public ModelAndView loginPage() {
return new ModelAndView("login");
}
@PostMapping("/login")
public String login(@RequestParam String secret, @RequestParam int code,
Model model) {
//固定測試 key
secret= SecretKey;
boolean isCodeValid = gAuth.authorize(secret, code);
if (isCodeValid) {
model.addAttribute("message", "登入成功！");
return "登入成功";
} else {
model.addAttribute("message", "驗證失敗，請重試。");
return "驗證失敗";
}
}
@GetMapping("/generate-key")
public String generateKey() {
GoogleAuthenticatorKey key = gAuth.createCredentials();
return "你的密鑰 (Secret Key): " + key.getKey();
}
// @GetMapping("/generate-qr")
// public String generateQRCode() throws WriterException {
// GoogleAuthenticatorKey key = gAuth.createCredentials();
// String otpAuthURL = "otpauth://totp/JavaWebApp?secret=" +
key.getKey() + "&issuer=MyApp";
// return generateQRCodeImage(otpAuthURL);
// }
@PostMapping("/validate")
public String validateCode(@RequestParam String secret, @RequestParam int
code) {
boolean isCodeValid = gAuth.authorize(secret, code);
return isCodeValid ? "驗證成功！" : "驗證失敗！";
}
@GetMapping("/generate-qr")
public ModelAndView generateQRCode(Model model) throws
WriterException {
GoogleAuthenticatorKey key = gAuth.createCredentials();
String otpAuthURL = "otpauth://totp/Vincent App?secret=" + key.getKey()
+ "&issuer=Login Check";
String qrCodeBase64 = generateQRCodeImage(otpAuthURL);
model.addAttribute("qrCode", qrCodeBase64);
model.addAttribute("secret", key.getKey());
return new ModelAndView("qrview");
}
private String generateQRCodeImage(String data) throws WriterException {
QRCodeWriter qrCodeWriter = new QRCodeWriter();
BitMatrix bitMatrix = qrCodeWriter.encode(data, BarcodeFormat.QR_CODE,
250, 250);
BufferedImage image = new BufferedImage(250, 250,
BufferedImage.TYPE_INT_RGB);
for (int x = 0; x < 250; x++) {
for (int y = 0; y < 250; y++) {
image.setRGB(x, y, bitMatrix.get(x, y) ? 0x000000 : 0xFFFFFF);
}
}
try {
ByteArrayOutputStream baos = new ByteArrayOutputStream();
ImageIO.write(image, "png", baos);
return "data:image/png;base64," +
Base64.getEncoder().encodeToString(baos.toByteArray());
} catch (Exception e) {
return "無法產生 QR Code";
}
}
}
qrview.html
<!DOCTYPE html>
<html lang="zh-tw" xmlns:th="http://www.thymeleaf.org">
<head>
<meta charset="UTF-8">
<title>Google Authenticator QR Code</title>
</head>
<body>
<h2>掃描 QR Code 以設定 Google Authenticator</h2>
<img th:src="${qrCode}" alt="Google Authenticator QR Code">
<h2>
<p>密鑰 (Secret Key)：<label th:text="${ secret }"></label></p>
User Name : <input type="text" value="teacher" style="font-size:20px"/><p>
Phone : <input type="text" value="23826015" style="font-size:20px"/>
<p></p>
(Secret Key),User Name,Phone 必須存入資料庫
</h2>
</body>
</html>
login.html
<!DOCTYPE html>
<html lang="zh-tw" xmlns:th="http://www.thymeleaf.org">
<head>
<meta charset="UTF-8">
<title>登入</title>
</head>
<body>
<h2>登入</h2>
<form action="/auth/login" method="post">
<input type="hidden" name="secret" value="YEAKFLPGDKHFEFZN">
<label>Google 手機驗證碼：</label>
<input type="text" name="code" required><br>
<button type="submit">登入</button>
</form>
</body>
</html>