package demo.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import demo.example.model.*;
import java.util.*;

@RestController
@RequestMapping("/api/todoitems")
@CrossOrigin(origins="*")
public class TodoController implements CommandLineRunner {
	
   @Autowired
   TodosRepository todoRepository;
   
   @GetMapping()
   public List<TodoItem> getAll(){
        	return todoRepository.findAll();   
   }
   @PostMapping()
   public ResponseEntity addItem(@RequestBody TodoItem item) {
	   try {
	      todoRepository.save(item);
	      System.out.println("added item "+item);
	      return ResponseEntity.ok(item);
	   }catch(Exception ex) {
		   System.out.println("add todo item error "+ex.getMessage());
	   }
	   return ResponseEntity.noContent().build();
   }
   @PutMapping("/{itemId}")
   public ResponseEntity updateItem(@PathVariable("itemId")int id,@RequestBody TodoItem item) {
	   try {
	      TodoItem im=todoRepository.findById(id).orElse(null);
	      if(im==null)
	    	  return ResponseEntity.notFound().build();
	      todoRepository.save(item);
	      System.out.println("updated item "+item);
	      return ResponseEntity.ok(item);
	   }catch(Exception ex) {
		   System.out.println("update todo item error "+ex.getMessage());
	   }
	   return ResponseEntity.noContent().build();
   }
   @DeleteMapping("/{itemId}")
   public ResponseEntity deleteItem(@PathVariable("itemId")int id) {
	   try {
	      TodoItem im=todoRepository.findById(id).orElse(null);
	      if(im==null)
	    	  return ResponseEntity.notFound().build();
	      todoRepository.deleteById(id);
	      System.out.println("deleted item id "+id);
	      return ResponseEntity.ok("delete "+id+" OK");
	   }catch(Exception ex) {
		   System.out.println("delete todo item error "+ex.getMessage());
	   }
	   return ResponseEntity.noContent().build();
   }
   @Override
   public void run(String... args) throws Exception {
	// TODO Auto-generated method stub
	   List<TodoItem> data=new ArrayList<>();
	   for(int i=1;i<=5;i++) {
		   TodoItem item=new TodoItem();
		   item.setName("Todo Job:"+i);
		   item.setComplete(false);
		   data.add(item);
	   }
	   todoRepository.saveAll(data);
   }
}
