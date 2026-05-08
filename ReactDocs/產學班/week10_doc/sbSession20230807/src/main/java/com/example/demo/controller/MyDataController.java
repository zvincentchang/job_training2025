package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


import java.util.*;
import com.example.demo.model.*;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping(value={"/data"})
@CrossOrigin("http://localhost:3000")
public class MyDataController {
   
	@Autowired
	MyDataService userService;
	
	@RequestMapping(method=RequestMethod.GET)
	public @ResponseBody List<MyData> getAll(HttpSession session ){
		List<MyData> data=userService.findAll();
		session.setAttribute("userdata", data);
		System.out.println("getAll userdata session id is "+session.getId());
		return data;
	}
	@GetMapping("/{id}")	
	public @ResponseBody MyData getById(@PathVariable("id") int id ,HttpSession session ){
		List<MyData> md=(List<MyData>)session.getAttribute("userdata");
		System.out.println("{id} userdata session id is "+id+" "+session.getId());
		if(md!=null) {
		    MyData m=md.stream().filter(d->d.getId()==id).findFirst().get();
		    System.out.println(m);
		    return m;
		}			
		else {
		  return null;	
		}		
	}
	
}

