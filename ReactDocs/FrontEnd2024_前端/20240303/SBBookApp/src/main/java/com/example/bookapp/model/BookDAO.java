package com.example.bookapp.model;
import java.util.*;

public class BookDAO {
	List<Book>  books=new ArrayList<>();
    public BookDAO() {
    	books=new ArrayList<Book>(
    			Arrays.asList(
    			  new Book(1, "Core Java", "Amy"),
    			  new Book(2, "Effective Java", "John"),
				  new Book(3, "Head First Java", "Tony")));
    }
    public List<Book> getAll(){
    	return books;
    }
}
