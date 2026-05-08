package demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import model.*;

@RestController
public class EmployeeController {
   @GetMapping(value="/employees/{eid}")
   public Employee getEmployeeById(@PathVariable("eid")int eid) {
	   EmployeeDAO dao=new EmployeeDAO();
	   return dao.getById(eid);
   }
}
