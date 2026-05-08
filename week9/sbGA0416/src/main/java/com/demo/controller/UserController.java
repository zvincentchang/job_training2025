package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.demo.model.GoogleUser;
import com.demo.model.UserRepository;
import com.warrenstrange.googleauth.GoogleAuthenticator;

@RestController
@RequestMapping("/user")
public class UserController {
	private final GoogleAuthenticator gAuth = new GoogleAuthenticator();
	@Autowired
	UserRepository repository;
	
    @GetMapping("/login")
    public ModelAndView login() {
    	return new ModelAndView("login");
    }
    
    @PostMapping("/login")
    public String validateCode(@RequestParam String secret, @RequestParam int code) {
        boolean isCodeValid = gAuth.authorize(secret, code);
        return isCodeValid ? "驗證成功！" : "驗證失敗！";
    }
    
    @PostMapping("/dblogin")
    public String validateDbCode(@RequestParam String username, @RequestParam int code) {
    	GoogleUser g=repository.findByName(username);
    	if(g==null)
    		return "驗證失敗！";
    	boolean isCodeValid = gAuth.authorize(g.getGooglekey(), code);
        return isCodeValid ? "驗證成功！" : "驗證失敗！";
    }

}
