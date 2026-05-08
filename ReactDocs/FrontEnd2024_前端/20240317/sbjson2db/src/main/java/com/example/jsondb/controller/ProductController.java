package com.example.jsondb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.jsondb.model.*;

@RestController
public class ProductController {
	
     @Autowired
     ProductDAO dao;
	
	@PostMapping("/products")
	public Product saveProduct(@RequestBody Product product) {		
		dao.save(product);
		return product;
	}
}
