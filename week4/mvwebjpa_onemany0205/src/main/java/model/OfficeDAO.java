package model;
import java.util.*;
import javax.persistence.*;
public class OfficeDAO {
  public static List<Office> getAll(){
	  List<Office> data=new ArrayList<>();
	   try {
		   EntityManagerFactory factory=Persistence.createEntityManagerFactory("mvwebjpa0205");
		   EntityManager mgr=factory.createEntityManager();
		   Query q=mgr.createQuery("select s from Office s");
		   List values=q.getResultList();
		   data=(List<Office>)values;
	   }catch(Exception ex) {
		   System.out.println("Error in OfficeDAO getAll:"+ex.getMessage());
	   }
	   
	   return data;
  }
  public static void addOffice() {
	  List<Employee> emps=new ArrayList<>(); 
	  Employee e1=new Employee();
	  e1.setEmployeeNumber(1800);
	  e1.setFirstName("Mary");
	  e1.setLastName("Wang");
	  e1.setEmail("mary@demo.com");
	  e1.setExtension("0x123");
	  e1.setOfficeCode("9");
	  e1.setReportsTo(1056);
	  e1.setJobTitle("Sales Rep");
	  emps.add(e1);
	  e1=new Employee();
	  e1.setEmployeeNumber(1801);
	  e1.setFirstName("George");
	  e1.setLastName("Lee");
	  e1.setEmail("george@demo.com");
	  e1.setExtension("0x456");
	  e1.setOfficeCode("9");
	  e1.setReportsTo(1056);
	  e1.setJobTitle("Sales Rep");
	  emps.add(e1);
	  Office f=new Office();
	  f.setOfficeCode("9");
	  f.setAddressLine1("Toayuan First Road");
	  f.setCity("Taoyuan");
	  f.setCountry("TW");
	  f.setEmployees(emps);
	  f.setPhone("23826015");
	  f.setPostalCode("200");
	  f.setTerritory("ASIA");	  
	  try {
		   EntityManagerFactory factory=Persistence.createEntityManagerFactory("mvwebjpa0205");
		   EntityManager mgr=factory.createEntityManager();
		   mgr.getTransaction().begin(); 
		   mgr.persist(f);
		   mgr.getTransaction().commit();
	   }catch(Exception ex) {
		   System.out.println("Error in OfficeDAO getAll:"+ex.getMessage());
	   }
	  	  
  }
}
