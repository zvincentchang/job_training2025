package model;

import java.util.*;
import javax.persistence.*;
public class EmployeeDAO {
  public static List<Employee> getAll(){
	  List<Employee> data=new ArrayList<>();
	   try {
		   EntityManagerFactory factory=Persistence.createEntityManagerFactory("mvwebjpa0205");
		   EntityManager mgr=factory.createEntityManager();
		   Query q=mgr.createQuery("select s from Employee s");
		   List values=q.getResultList();
		   data=(List<Employee>)values;
	   }catch(Exception ex) {
		   System.out.println("Error in EmployeeDAO getAll:"+ex.getMessage());
	   }
	   
	   return data;
  }
}
