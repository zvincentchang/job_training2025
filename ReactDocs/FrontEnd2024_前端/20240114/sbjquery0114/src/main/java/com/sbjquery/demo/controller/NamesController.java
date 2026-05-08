package com.sbjquery.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sbjquery.demo.model.User;

@RestController
@CrossOrigin()
public class NamesController {
      @GetMapping("/names") 
	  public String getNames(@RequestParam(value = "firstName", defaultValue = "Mary") String firstName,
			  @RequestParam(value = "lastName", defaultValue = "Chen") String lastName) {
    	  return firstName+"|"+lastName;   
       }
      
      @PostMapping("/names") 
	  public String postNames(@RequestParam(value = "firstName", defaultValue = "Mary") String firstName,
			  @RequestParam(value = "lastName", defaultValue = "Chen") String lastName) {
    	  return firstName+","+lastName;   
       }
      @GetMapping("/jsonname") 
	  public User getJsonNames(@RequestParam(value = "firstName", defaultValue = "Mary") String firstName,
			  @RequestParam(value = "lastName", defaultValue = "Chen") String lastName) {
    	  User u=new User(firstName,lastName);
    	  return u;   
       }
      
      @PostMapping("/jsonname") 
	  public User postJsonNames(@RequestBody User user) {
    	  user.setFirstName("json:"+user.getFirstName());
    	  user.setLastName("json:"+user.getLastName());
    	  return user;   
       }
}
