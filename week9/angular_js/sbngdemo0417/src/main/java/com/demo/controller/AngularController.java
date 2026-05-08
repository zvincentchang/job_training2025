package com.demo.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Person;

@RestController
@CrossOrigin("*")
@RequestMapping("/ng")
public class AngularController {
	
    @PostMapping(produces="text/plain")    
    public String postPerson(@ModelAttribute("person")Person ps) {
    	String message="Name:"+ps.getName()+" Address:"+ps.getAddress()+" Age:"+ps.getAge();
    	return message;
    }
}
