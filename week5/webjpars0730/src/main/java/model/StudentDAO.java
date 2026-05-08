package model;

import java.util.*;
import javax.persistence.*;

public class StudentDAO {
	public EntityManager create() {
		EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("mydb0730");
		EntityManager entityManager = entityManagerFactory.createEntityManager();
		return entityManager;
	}

	public List<Student> getAllStudents() {
		EntityManager mgr = create();
		mgr.getTransaction().begin();
		List<Student> result = mgr.createQuery("select c from Student c").getResultList();
		mgr.getTransaction().commit();
		mgr.close();
		return result;
	}
	
	public boolean update(int sid,String sname,int age) {
		
        EntityManager em = create();
        em.getTransaction().begin();
        Query query = em.createQuery("update Student SET age=:ageNum ,sname=:stuName where sid=:myId");
        query.setParameter("ageNum", age);
        query.setParameter("myId", sid);
        query.setParameter("stuName", sname);
        int r=query.executeUpdate();
        em.getTransaction().commit();
        em.close();
        if(r>0) {
        	System.out.println("update student successfully");
        	return true;
        }
        else {
        	System.out.println("update student failed");
        	return false;
        }       

	}
	public Student addStudent(Student s) {
		 EntityManager em = create();
	     try {
		   em.getTransaction().begin();
	       em.persist(s);
	       em.getTransaction().commit();
	       em.close();
	     }catch(Exception ex) {
	    	 System.out.println("addStudent error:"+ex.getMessage());
	    	 return null;
	     }
	     return s;
	}
	public boolean deleteStudent(int sid) {
		   EntityManager em = create();
	        em.getTransaction().begin();

	        Query query = em.createQuery("delete from Student where sid=:id");
            query.setParameter("id", sid);
	        int r=query.executeUpdate();
	        em.getTransaction().commit();
	        em.close();
	        if(r>0) {
	        	System.out.println("delete student sid="+sid+" successfully");
	        	return true;
	        }
	        else {
	        	System.out.println("delete Student sid="+sid+" failed");
	        	return false;
	        }	       

	}
}
