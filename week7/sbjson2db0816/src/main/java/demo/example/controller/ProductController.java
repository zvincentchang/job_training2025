package demo.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import demo.example.model.*;

@RestController
public class ProductController {
	
     @Autowired
     ProductDAO dao;
	
	@PostMapping("/products")
	public Product saveProduct(@RequestBody Product product) {		
		
		return dao.save(product);
	}
	@PostMapping("/saveproducts")
	public Product saveAllProduct(@RequestBody Product[] products) {		
		for(Product p :products ) {
			dao.save(p);
		}
		return  products[0];
	}
}

