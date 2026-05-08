package com.example.employee.model;

import java.util.List;

import org.springframework.stereotype.Service;


public interface EmployeeService {
	
    List<EmployeeDto> getAllEmployees();
    EmployeeDto createEmployee(EmployeeDto employee);
    EmployeeDto getEmployeeById(Long employeeId);
    EmployeeDto updateEmployee(Long employeeId, EmployeeDto employeeDto);
    void deleteEmployee(Long employeeId);
}

