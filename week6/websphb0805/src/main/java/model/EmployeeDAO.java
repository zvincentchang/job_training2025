package model;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class EmployeeDAO {
	private Session buildSession() {
		SessionFactory factory = null;
		try {
			factory = new Configuration().configure("hibernate2.cfg.xml").buildSessionFactory();
		} catch (Throwable ex) {
			System.err.println("Failed to create sessionFactory object." + ex);
			throw new ExceptionInInitializerError(ex);
		}
		return factory.openSession();
	}
	
	public Employee getById(int id) {
		Session  ss= buildSession();
		Employee e=ss.find(Employee.class, id);
		return e;
	}

}
