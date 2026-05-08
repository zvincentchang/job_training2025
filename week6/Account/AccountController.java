package demo.controller;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import model.Account;


@Controller
public class AccountController {
	@RequestMapping("/check")
	@ResponseBody
	 public String checkAccount(@ModelAttribute("account") Account acct) {         
        List<Account>  data= null;
        SessionFactory factory=null;
		 try {
	         factory = new Configuration().configure().buildSessionFactory();
	      } catch (Throwable ex) { 
	         System.err.println("Failed to create sessionFactory object." + ex);
	         throw new ExceptionInInitializerError(ex);	        
	      }		
		
		  Session session = factory.openSession();
	      Transaction tx = null;
	      try {
		         tx = session.beginTransaction();
		         data =(List<Account>)session.createQuery("FROM Account").list(); 		       
		         tx.commit();
		         
		         for(Account a : data) {
		        	  if(a.getUserName().equals(acct.getUserName()) && a.getPassword().equals(acct.getPassword()))
		        		  return  "Account Success";
		         }
		      } catch (HibernateException e) {
		         if (tx!=null) tx.rollback();
		         e.printStackTrace(); 
		      } finally {
		         session.close(); 
		         factory.close();
		      }
        return   "Account Failed";         
    } 
	
	@RequestMapping("/account")
	@ResponseBody  public List<Account> generatehbAccount(Model model) {         
        List<Account>  data= null;
        SessionFactory factory=null;
		 try {
	         factory = new Configuration().configure().buildSessionFactory();
	      } catch (Throwable ex) { 
	         System.err.println("Failed to create sessionFactory object." + ex);
	         throw new ExceptionInInitializerError(ex);	        
	      }		
		
		  Session session = factory.openSession();
	      Transaction tx = null;
	      try {
		         tx = session.beginTransaction();
		         data =(List<Account>)session.createQuery("FROM Account").list(); 		       
		         tx.commit();
		         return data;
		      } catch (HibernateException e) {
		         if (tx!=null) tx.rollback();
		         e.printStackTrace(); 
		      } finally {
		         session.close(); 
		         factory.close();
		      }
        return   data;         
    }
}
