package demo.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import demo.example.model.Customer;
import demo.example.model.CustomerRepository;
import demo.example.service.CustomerService;

@RestController
public class CustomerController implements CommandLineRunner {
	
	@Autowired
    private CustomerRepository customerRepository;
	
	 @Autowired
	 private CustomerService customerService;

    @GetMapping("/srv/all")
    public List<Customer> serviceAll(){
    	return customerService.srvAll();
    }

	@GetMapping(value="/find/{name}/{age}")
	public List<Customer> getByNameAndAge(@PathVariable("name")String name,@PathVariable("age")int age){
		return customerRepository.findByNameOrAge(name, age);
	}
	
	@GetMapping(value="/find/{name}")
	public Customer getByName(@PathVariable("name")String name){
		return customerRepository.queryByName(name);
	}
	
	@DeleteMapping(value="/delete/{id}")
	public void deleteById(@PathVariable("id")long id){
		System.out.println("delete id is "+id);
		customerRepository.deleteById(id);
	}
	
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub		
		customerRepository.save(new Customer("AAA", 10, "SYSTEM"));
        customerRepository.save(new Customer("BBB", 20, "SYSTEM"));
        customerRepository.save(new Customer("CCC", 30, "SYSTEM"));
        customerRepository.save(new Customer("DDD", 40, "SYSTEM"));
        customerRepository.save(new Customer("EEE", 50, "SYSTEM"));
        customerRepository.save(new Customer("FFF", 60, "SYSTEM"));
        customerRepository.save(new Customer("GGG", 70, "SYSTEM"));
        customerRepository.save(new Customer("HHH", 80, "SYSTEM"));
        customerRepository.save(new Customer("III", 90, "SYSTEM"));
        customerRepository.save(new Customer("JJJ", 100, "SYSTEM"));

	}

}
