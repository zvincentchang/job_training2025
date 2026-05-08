package model;

import java.io.Serializable;
import java.util.*;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class EmployeeDAO {
	public EmployeeListVO  getList() {
		List<Employee> emps= getAll();
		return new EmployeeListVO(emps);
	}
    public List<Employee>  getAll(){
    	Configuration configObj = new Configuration();	
    	configObj.addAnnotatedClass(Employee.class);
		configObj.configure("hibernate.cfg.xml");
		SessionFactory  factory= configObj.buildSessionFactory();		
		Session session = null;
		session = factory.openSession();
		Transaction tx = null;
		try {
			tx = session.beginTransaction();
			List<Employee> data = session.createQuery("FROM Employee").list();
			System.out.println(data);
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
    public void add(Employee  ep) {
    	Configuration configObj = new Configuration();	
    	configObj.addAnnotatedClass(Employee.class);
		configObj.configure("hibernate.cfg.xml");
		SessionFactory  factory= configObj.buildSessionFactory();		
		Session session = null;
		session = factory.openSession();
		Transaction tx = null;
		try {
			tx = session.beginTransaction();
			Serializable sz=session.save(ep);
			System.out.println(sz);
			tx.commit();
			
		} catch (HibernateException e) {
			if (tx != null)
				tx.rollback();
			e.printStackTrace();
			throw e;
		} finally {
			session.close();
		}
    }
    public void remove(Employee  ep) {
    	Configuration configObj = new Configuration();	
    	configObj.addAnnotatedClass(Employee.class);
		configObj.configure("hibernate.cfg.xml");
		SessionFactory  factory= configObj.buildSessionFactory();		
		Session session = null;
		session = factory.openSession();
		Transaction tx = null;
		try {
			tx = session.beginTransaction();
			session.remove(ep);			
			tx.commit();
			
		} catch (HibernateException e) {
			if (tx != null)
				tx.rollback();
			e.printStackTrace();
			throw e;
		} finally {
			session.close();
		}
    }
    public void update(Employee  ep) {
    	Configuration configObj = new Configuration();	
    	configObj.addAnnotatedClass(Employee.class);
		configObj.configure("hibernate.cfg.xml");
		SessionFactory  factory= configObj.buildSessionFactory();		
		Session session = null;
		session = factory.openSession();
		Transaction tx = null;
		try {
			tx = session.beginTransaction();
			session.update(ep);			
			tx.commit();
			
		} catch (HibernateException e) {
			if (tx != null)
				tx.rollback();
			e.printStackTrace();
			throw e;
		} finally {
			session.close();
		}
    }
}