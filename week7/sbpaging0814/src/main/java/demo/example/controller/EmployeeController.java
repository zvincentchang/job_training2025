package demo.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import demo.example.model.Employee;
import demo.example.service.EmployeeService;
import java.util.*;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
	 @Autowired
	 EmployeeService service;
	 
	    @GetMapping
	    public ResponseEntity<List<Employee>> getAllEmployees(
	                        @RequestParam(defaultValue = "0") Integer pageNo,
	                        @RequestParam(defaultValue = "5") Integer pageSize,
	                        @RequestParam(defaultValue = "employeeNumber") String sortBy)
	    {
	    	System.out.println("pageNo:"+pageNo);
	    	System.out.println("pageSize:"+pageSize);
	        List<Employee> list = service.getAllEmployees(pageNo, pageSize, sortBy);
	 
	        return new ResponseEntity<List<Employee>>(list, new HttpHeaders(), HttpStatus.OK);
	    }
	    @GetMapping("/viewall")
	    public ModelAndView getAllEmployees2(
	                        @RequestParam(defaultValue = "0") Integer pageNo,
	                        @RequestParam(defaultValue = "5") Integer pageSize,
	                        @RequestParam(defaultValue = "employeeNumber") String sortBy)
	    {
	    	System.out.println("pageNo:"+pageNo);
	    	System.out.println("pageSize:"+pageSize);
	        List<Employee> list = service.getAllEmployees(pageNo, pageSize, sortBy);
	        ModelAndView mv=new ModelAndView("list-employees");
	        if(list.size()>0)
	        	mv.addObject("employees", list);
	        else
	        	mv.addObject("employees", null);
	        return mv;
	    }

}
