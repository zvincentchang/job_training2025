package demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import model.*;
import java.util.*;

@Controller
@RequestMapping("/ngemployee")
public class MyEmployeeController {	
	
	@RequestMapping(value="/home",method = RequestMethod.GET)
	public String mainEmployee(ModelMap model) {	
		return "mainEmployee";
	}
	@RequestMapping(value="/employees",method = RequestMethod.GET)
	public @ResponseBody EmployeeListVO getAllEmployee(ModelMap model) {
		Employee empOne = new Employee(1,"Lokesh","Gupta","howtodoinjava@gmail.com");
	    Employee empTwo = new Employee(2,"Amit","Singhal","asinghal@yahoo.com");
	    Employee empThree = new Employee(3,"Kirti","Mishra","kmishra@gmail.com");
	    List<Employee> data=new ArrayList<>();
	    data.add(empOne);data.add(empTwo);data.add(empThree);
	    EmployeeListVO  vo=new EmployeeListVO(data);
		return vo;
	}
}
