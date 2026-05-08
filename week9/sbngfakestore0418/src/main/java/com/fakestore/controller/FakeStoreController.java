package com.fakestore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fakestore.model.*;

import java.util.*;

@RestController
@RequestMapping("/fakestore")
@CrossOrigin(origins="*")
public class FakeStoreController {
	@Autowired
	ProductWithImageDAO productDao;
	
    @GetMapping
	public List<ProductWithImage> getAllProducts(){
	   List<ProductWithImage>  data=productDao.findAll();
	   return data;
   }
    @PutMapping("/{id}")
    public ResponseEntity<ProductWithImage> updateProduct(@PathVariable("id") int id,
    		              @RequestBody ProductWithImage data){
    	ProductWithImage pi=productDao.findById(id).orElse(null);
    	if(pi==null)
    		return ResponseEntity.notFound().build();
    	else {
    		pi.setDescription(data.getDescription());
    		pi.setTitle(data.getTitle());
    		pi.setPrice(data.getPrice());
    		pi.setImage(data.getImage());
    		productDao.save(pi);
    	}
    		
    	return ResponseEntity.ok(pi);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<ProductWithImage> deleteProduct(@PathVariable("id") int id){
    	ProductWithImage pi=productDao.findById(id).orElse(null);
    	if(pi==null)
    		return ResponseEntity.notFound().build();
    	else {    		
    		productDao.delete(pi);
    	}
    		
    	return ResponseEntity.ok(pi);
    }
}
