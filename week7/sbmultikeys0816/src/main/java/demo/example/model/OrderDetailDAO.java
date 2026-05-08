package demo.example.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderDetailDAO {
    
	@Autowired
    OrderDetailRepository dao;
    
    public Orderdetail save(Orderdetail od) {
    	return dao.save(od);
    }
}
