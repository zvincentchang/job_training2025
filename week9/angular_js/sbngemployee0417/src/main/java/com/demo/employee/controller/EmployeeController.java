package com.demo.employee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.employee.model.*;
import java.util.*;

@RestController
@RequestMapping("/employees")
@CrossOrigin("*")
public class EmployeeController {
	@Autowired
	EmployeeRepository empDao;
	
	static EmployeeListVO  vo=new EmployeeListVO();
	public EmployeeController() {
//		List<Employee> data=new ArrayList<>(List.of( 
//				new Employee(1,"Lokesh","Gupta","howtodoinjava@gmail.com"),
//				new Employee(2,"Amit","Singhal","asinghal@yahoo.com"),
//				new Employee(3,"Kirti","Mishra","kmishra@gmail.com")));
//	    vo=new EmployeeListVO(data);
	}
	@GetMapping
	public EmployeeListVO getAllEmployee(ModelMap model) {
//		Employee empOne = new Employee(1,"Lokesh","Gupta","howtodoinjava@gmail.com");
//	    Employee empTwo = new Employee(2,"Amit","Singhal","asinghal@yahoo.com");
//	    Employee empThree = new Employee(3,"Kirti","Mishra","kmishra@gmail.com");
//	    List<Employee> data=new ArrayList<>();
//	    data.add(empOne);
//	    data.add(empTwo);
//	    data.add(empThree);
		
		return vo;
	}
	
	  @PostMapping
	  public ResponseEntity<String> createEmployee(@RequestBody Employee employee) 
	  {
	    employee.setId(vo.getEmployees().size() + 1);
	    vo.getEmployees().add(employee);
	    empDao.save(employee);
	    return new ResponseEntity<String>(HttpStatus.CREATED);
	  }
	
	  @PutMapping(value = "/{id}")
	  public ResponseEntity<Employee> updateEmployee(@PathVariable("id") int id, @RequestBody Employee employee) 
	  {
		 System.out.println("updateemployees id "+id);
		 System.out.println("employee  "+ employee);
	      List<Employee>  data=vo.getEmployees();
	      int index=-1;
	      for(int i=0;i<data.size();i++) {
	    	  if(data.get(i).getId()==id) {
	    		  index=i;
	    		  break;
	    	  }
	      }
	      if(index>=0) {
	    	  data.set(index, employee);
	    	  return new ResponseEntity<Employee>(employee, HttpStatus.OK);
	      }
	      return new ResponseEntity<Employee>(employee, HttpStatus.NOT_FOUND);
	  }

	  @DeleteMapping(value = "/{id}")
	  public ResponseEntity<String> deleteEmployee(@PathVariable("id") int id) 
	  {
		  List<Employee>  data=vo.getEmployees();
	      int index=-1;
	      for(int i=0;i<data.size();i++) {
	    	  if(data.get(i).getId()==id) {
	    		  index=i;
	    		  break;
	    	  }
	      }
		 
	    if(index>=0){
	        vo.getEmployees().remove(index);
	        return new ResponseEntity<String>(HttpStatus.OK);
	    }
	    return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
	  }
 

}
