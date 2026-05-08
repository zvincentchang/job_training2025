package com.example.bookapp.controller;


import java.util.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookapp.model.*;

@RestController
public class BookController {
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/books")
	public List<Book> getBooks() {
		BookDAO dao=new BookDAO();
		return dao.getAll();
	}
}
