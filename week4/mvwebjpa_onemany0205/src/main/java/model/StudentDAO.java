package model;
import java.util.*;
import javax.persistence.*;
public class StudentDAO {
   public static List<Student> getAll(){
	   List<Student> data=new ArrayList<>();
	   try {
		   EntityManagerFactory factory=Persistence.createEntityManagerFactory("mvwebjpa0205");
		   EntityManager mgr=factory.createEntityManager();
		   Query q=mgr.createQuery("select s from Student s");
		   List values=q.getResultList();
		   data=(List<Student>)values;
	   }catch(Exception ex) {
		   System.out.println("Error in StudentDAO getAll:"+ex.getMessage());
	   }
	   
	   return data;
   }
}
