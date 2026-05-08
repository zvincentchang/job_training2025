package demo.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import demo.example.model.*;

@Service
public class CustomerSeviceImpl implements CustomerService {
	   @Autowired
	    private CustomerRepository customerRepository;

	    @Override
	    public Customer saveCustomer(Customer customer) {
	        customer.setCreateBy("SYSTEM");
	        return customerRepository.save(customer);
	    }
	    
	    @Override
	    public void deleteCustomerById(Long id) {
	    	
	        customerRepository.deleteById(id);
	    }
	    
	    @Override
	    public void delAll() {
	        customerRepository.deleteAll();
	    }

	    @Override
	    public Customer findOneById(Long id) {
	        return customerRepository.findById(id).orElse(null);
	    }
	    
	    @Override
	    public Customer findByName(String name) {
	        return customerRepository.findByName(name);
	    }

	    @Override
	    public List<Customer> findByNameOrAge(String name, Integer age) {
	        return customerRepository.findByNameOrAge(name, age);
	    }

	    @Override
	    public Customer queryByName(String name) {
	        return customerRepository.queryByName(name);
	    }

		@Override
		public List<Customer> srvAll() {
			// TODO Auto-generated method stub
			return customerRepository.findAll();
		}


}
