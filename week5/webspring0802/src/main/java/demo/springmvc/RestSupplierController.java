package demo.springmvc;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestSupplierController {
   @GetMapping("/json")
   public Supplier create() {
	   Supplier s1=new Supplier();
	   s1.setSupId(5);
	   s1.setSupName("Demo");
	   s1.setCity("Taipei");
	   s1.setStreet("Kung Yuan Road");
	   s1.setState("TW");
	   s1.setZip("101");
	   return s1;
   }
}
