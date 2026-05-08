package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.model.*;

@SpringBootApplication
public class SbSession20230807Application implements CommandLineRunner {

	@Autowired
	MyDataService userService;	

	public static void main(String[] args) {
		SpringApplication.run(SbSession20230807Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		MyData m1=new MyData("Annie","0x123",20);
		MyData m2=new MyData("Betty","0x456",25);
		MyData m3=new MyData("Cindy","0x789",23);		
		userService.save(m1);
		userService.save(m2);
		userService.save(m3);		

	}

}
