package model;

import java.util.*;
import org.hibernate.*;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

public class StudentDAO {
	private Session buildMydbSession() {
		SessionFactory factory=null;
		 try {
	         factory = new Configuration().configure("hibernate.cfg.xml").buildSessionFactory();
	      } catch (Throwable ex) { 
	         System.err.println("Failed to create sessionFactory object." + ex);
	         throw new ExceptionInInitializerError(ex);	        
	      }
		 return factory.openSession();
	}
 	public List<Student> getAll() {	
 		
		Session session = buildMydbSession();
		Transaction tx = null;
		try {
			tx = session.beginTransaction();
			List<Student> data = session.createQuery("FROM Student").list();
			for (Iterator<Student> iterator = data.iterator(); iterator.hasNext();) {
				Student st =  iterator.next();
				System.out.println(st);				
			}
			tx.commit();
			return data;
		} catch (HibernateException e) {
			if (tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}

		return null;
	}

 	
	public void addStu(Student stu) {		
		
		Session session = buildMydbSession();
		try {
			
			session.beginTransaction();
			java.io.Serializable sa= session.save(stu);

			System.out.println("\n.......Records Saved Successfully To The Database......."+sa);

			// Committing The Transactions To The Database
			session.getTransaction().commit();

		} catch (Exception sqlException) {
			if (null != session.getTransaction()) {
				System.out.println("\n.......Transaction Is Being Rolled Back.......");
				session.getTransaction().rollback();
			}
			sqlException.printStackTrace();
		} finally {
			if (session != null) {
				session.close();
			}
		}
	}
	public void updateStu(Student stu) {
//		Configuration configObj = new Configuration();
//		configObj.addClass(model.Student.class);
//		configObj.configure("hibernate.cfg.xml");
//
//		// Since Hibernate Version 4.x, ServiceRegistry Is Being Used
//		ServiceRegistry serviceRegistryObj = new StandardServiceRegistryBuilder()
//				.applySettings(configObj.getProperties()).build();
		Session sessionObj = buildMydbSession();
		// Creating Hibernate SessionFactory Instance
		try {
			//sessionObj = configObj.buildSessionFactory(serviceRegistryObj).openSession();
			sessionObj.beginTransaction();
			sessionObj.update(stu);

			System.out.println("\n.......Records Saved Successfully To The Database.......\n");

			// Committing The Transactions To The Database
			sessionObj.getTransaction().commit();

		} catch (Exception sqlException) {
			if (null != sessionObj.getTransaction()) {
				System.out.println("\n.......Transaction Is Being Rolled Back.......");
				sessionObj.getTransaction().rollback();
			}
			sqlException.printStackTrace();
		} finally {
			if (sessionObj != null) {
				sessionObj.close();
			}
		}
	}

	public void deleteStu(Student stu) {
//		Configuration configObj = new Configuration();
//		configObj.addClass(model.Student.class);
//		configObj.configure("hibernate.cfg.xml");
//
//		// Since Hibernate Version 4.x, ServiceRegistry Is Being Used
//		ServiceRegistry serviceRegistryObj = new StandardServiceRegistryBuilder()
//				.applySettings(configObj.getProperties()).build();
		Session sessionObj = buildMydbSession();
		// Creating Hibernate SessionFactory Instance
		try {
			//sessionObj = configObj.buildSessionFactory(serviceRegistryObj).openSession();
			sessionObj.beginTransaction();
			sessionObj.delete(stu);

			System.out.println("\n.......Records Saved Successfully To The Database.......\n");

			// Committing The Transactions To The Database
			sessionObj.getTransaction().commit();

		} catch (Exception sqlException) {
			if (null != sessionObj.getTransaction()) {
				System.out.println("\n.......Transaction Is Being Rolled Back.......");
				sessionObj.getTransaction().rollback();
			}
			sqlException.printStackTrace();
		} finally {
			if (sessionObj != null) {
				sessionObj.close();
			}
		}
	}
    public Student findById(Student s) {
    	Session session = buildMydbSession();
    	session.beginTransaction();
    	Student st=session.find(Student.class, s.getSid());
    	session.getTransaction().commit();
    	return st;
    }
}
