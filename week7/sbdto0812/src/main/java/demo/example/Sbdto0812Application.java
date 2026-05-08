package demo.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import demo.example.model.Employee;
import demo.example.model.EmployeeRepository;

@SpringBootApplication
public class Sbdto0812Application implements CommandLineRunner {
    
	@Autowired
	EmployeeRepository  empRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(Sbdto0812Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		empRepository.save(new Employee(1,"Mary","Wu","mary@test.com"));
		empRepository.save(new Employee(2,"John","Lee","mary@test.com"));
		empRepository.save(new Employee(3,"Tony","Chen","mary@test.com"));
	}

}
