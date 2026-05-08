package demo.springmvc;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.*;
@Controller
@RequestMapping("/")
public class SupplierController {	

	@RequestMapping(value="/supplier" ,method = RequestMethod.GET)
	public String getSupplierView() {
		return "supplier";
	}
	@RequestMapping(value = "/addSupplier", method = RequestMethod.POST  )
	public ModelAndView addSupplier(@RequestBody Supplier sup, ModelMap modelMap) {			
		modelMap.addAttribute("sups", sup);
		return new ModelAndView("showSupplier");

	}	
	@RequestMapping(value = "/addSupplier2", method = RequestMethod.POST  )
	public @ResponseBody Supplier addSupplier2(@RequestBody Supplier sup) {			
		sup.setSupName(sup.getSupName()+":add");
		return sup;

	}
	@RequestMapping(value="/supplier/{id}" ,method = RequestMethod.GET)
	public @ResponseBody Supplier findById(@PathVariable("id")int id) {
		Session ss= build();
		Supplier s=ss.find(Supplier.class, id);
		return s;
	}
	private Session build() {
		   SessionFactory factory=null;;
			 try {
		         factory = new Configuration().configure("hibernate.cfg.xml").buildSessionFactory();
		      } catch (Throwable ex) { 
		         System.out.println("build() Failed to create sessionFactory object." + ex);
		         return null;
		      }
	       Session ss=factory.openSession();
	       return ss;
	}
}
