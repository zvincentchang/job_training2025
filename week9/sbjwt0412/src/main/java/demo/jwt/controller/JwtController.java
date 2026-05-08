package demo.jwt.controller;

import java.util.Date;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import demo.jwt.model.JwtUtility;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class JwtController {
	
	@GetMapping("/login")
	public ModelAndView viewlogin() {
		return new ModelAndView("login");
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Map<String, String> payload) {
		String username = payload.get("username");
		String password = payload.get("password");
		System.out.println("username:" + username);

		String token = JwtUtility.generateToken(username);
		System.out.println("token:" + token);
		return ResponseEntity.ok(Map.of("token", token));

//	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//	                .body(Map.of("message", "帳號或密碼錯誤"));

	}

	@PostMapping("/check")
	public ResponseEntity<?> checklogin(@RequestParam("token") String tk) {
		System.out.println("encode token:" + tk);
		String token = JwtUtility.validateToken(tk);
		System.out.println("token:" + token);
		if(token==null)
			  return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
		                .body(Map.of("message", "帳號或密碼錯誤"));

		return ResponseEntity.ok(Map.of("token", token));
	}
	
	@GetMapping("/protected/resource")
    public ResponseEntity<?> getProtectedResource(@RequestHeader("Authorization") String authHeader) {
        // 1. 檢查 Authorization Header 是否存在且格式正確
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Missing or invalid Authorization header");
        }

        // 2. 提取 Token
        String token = authHeader.substring(7); // 去掉 "Bearer " 前綴

        // 3. 驗證 Token
        if (JwtUtility.validateToken(token)!=null) {
            // Token 有效，回傳受保護的資料
            String username = JwtUtility.extractUsername(token);
            return ResponseEntity.ok(Map.of(
                "message", "這是受保護的資料",
                "user", username,
                "timestamp", new Date()
            ));
        } else {
            // Token 無效
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token");
        }
    }

}
