package model;

import javax.persistence.TypedQuery;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class OfficeDAO {
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

	public Office getOfficeById(String id) {

		Session ss = buildSession();
		TypedQuery<Office> q = ss.createQuery("from Office o where o.officeCode= :code", Office.class);
		q.setParameter("code", id);
		return q.getSingleResult();
	}

}
