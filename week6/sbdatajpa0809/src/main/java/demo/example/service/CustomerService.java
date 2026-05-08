package demo.example.service;

import java.util.List;

import demo.example.model.Customer;

public interface CustomerService {
    
    Customer saveCustomer(Customer customer);
    
    void deleteCustomerById(Long id);
    
    void delAll();
    
    Customer findOneById(Long id);
    
    Customer findByName(String name);

    List<Customer> findByNameOrAge(String name, Integer age);

    Customer queryByName(String name);
    
    List<Customer> srvAll();

}


