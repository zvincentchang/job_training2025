package com.example.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.employee.model.Employee;
import com.example.employee.model.EmployeeRepository;

@SpringBootApplication
public class SbEmployee0303Application implements CommandLineRunner{
	 @Autowired	
	 EmployeeRepository empDAO;
	   
	public static void main(String[] args) {
		SpringApplication.run(SbEmployee0303Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		empDAO.save(new Employee(1L,"Amy","Lee","amy@demo.com"));
		empDAO.save(new Employee(2L,"Mary","Wu","mary@demo.com"));
		empDAO.save(new Employee(3L,"John","Lin","john@demo.com"));
	}

}
