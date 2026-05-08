package demo.controller;

import model.*;
import java.util.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
@Controller
@RequestMapping("/ngemployeedb")
public class EmployeeDBController {
	@RequestMapping(value="/home2",method = RequestMethod.GET)
	public String mainEmployee(ModelMap model) {	
		return "mainEmployee2";
	}
	@RequestMapping(value="/employees2",method = RequestMethod.GET)
	public @ResponseBody EmployeeListVO getAllEmployee(ModelMap model) {
        EmployeeDAO dao=new EmployeeDAO();
		return dao.getList();
	}
	 @RequestMapping(value = "/employees2", consumes = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	  public ResponseEntity<String> createEmployee(@RequestBody Employee employee) 
	  {
		 EmployeeDAO dao=new EmployeeDAO();
	    employee.setId(dao.getAll().size() + 1);
	    try {
	        dao.add(employee);
	        dao.getList().getEmployees().add(employee);
	        return new ResponseEntity<String>(HttpStatus.CREATED);
	    }catch(Exception ex) {
	    	return new ResponseEntity<String>(HttpStatus.CONFLICT);
	    }
	    
	  }
	 @RequestMapping(value = "/employees2/{id}",consumes = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.PUT)
	  public ResponseEntity<Employee> updateEmployee(@PathVariable("id") int id, @RequestBody Employee employee) 
	  {  
		 EmployeeDAO dao=new EmployeeDAO();	    
	    try {
	        dao.update(employee);
	       
	        return new ResponseEntity<Employee>(employee, HttpStatus.OK);
	    }catch(Exception ex) {
	    	return new ResponseEntity<Employee>(employee, HttpStatus.NOT_FOUND);
	    }
	    
	  }
	 
	 @RequestMapping(value = "/employees2/{id}", method = RequestMethod.DELETE)
	  public ResponseEntity<String> deleteEmployee(@PathVariable("id") int id) 
	  {
		 EmployeeDAO dao=new EmployeeDAO();
		  List<Employee>  data=dao.getAll();
	      int index=-1;
	      for(int i=0;i<data.size();i++) {
	    	  if(data.get(i).getId()==id) {
	    		  index=i;
	    		  break;
	    	  }
	      }
		 
	    if(index>=0){
	    	dao.remove(dao.getAll().get(index));	        
	        return new ResponseEntity<String>(HttpStatus.OK);
	    }
	    return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
	  }
}
