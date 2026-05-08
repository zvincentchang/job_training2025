package demo.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import demo.example.model.User;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class UserController {
    
	@PostMapping("/user")	
	public  User userData(@ModelAttribute User user) {
		System.out.println("User Data:"+user);
		return user;
	}
}
