package com.example.employee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;
import com.example.employee.model.*;
import java.util.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {
	
   @Autowired	
   EmployeeRepository empDAO;
   
   @Autowired
   EmployeeService employeeService;
   
   @GetMapping("/allemployees") 	
   public List<Employee> getAllEmployees(){
	   return empDAO.findAll();
   }
   
   @GetMapping
   public ResponseEntity<List<EmployeeDto>> getAllEmployeeDtos(){
       List<EmployeeDto> employees = employeeService.getAllEmployees();
       return ResponseEntity.ok(employees);
   }

   // build create employee REST API
   @PostMapping
   public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employee) {
       EmployeeDto employeeDto = employeeService.createEmployee(employee);
       return new ResponseEntity<>(employeeDto, HttpStatus.CREATED);
   }

   // build get employee by id REST API
   @GetMapping("/{id}")
   public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId){
       EmployeeDto employee = employeeService.getEmployeeById(employeeId);
       return ResponseEntity.ok(employee);
   }

   // build update employee REST API
   @PutMapping("/{id}")
   public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId,  @RequestBody EmployeeDto employeeDetails) {
       EmployeeDto updateEmployee = employeeService.updateEmployee(employeeId, employeeDetails);
       return ResponseEntity.ok(updateEmployee);
   }

   // build delete employee REST API
   @DeleteMapping("/{id}")
   public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
       employeeService.deleteEmployee(employeeId);
       return ResponseEntity.ok("Employee deleted successfully!");
   }

}
