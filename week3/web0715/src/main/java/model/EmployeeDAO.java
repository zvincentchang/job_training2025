package model;

import java.sql.*;
import java.util.*;

public class EmployeeDAO {

	public Connection connect() {
		Connection cn = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			cn = DriverManager.getConnection(
					"jdbc:mysql://localhost:3306/classicmodels?useUnicode=true&characterEncoding=utf8", "root", "1234");
		} catch (SQLException | ClassNotFoundException ex) {
			System.out.println("connect() error:" + ex.getMessage());
		}
		return cn;
	}
    public Employee findByNumber(int n) {
    	List<Employee> data= getAll();
    	Employee e1=data.stream().filter(e->e.getEmployeeNumber()==n).findFirst().get();
    	return e1;
    }
	public List<Employee> getAll() {
		List<Employee> data = new ArrayList<>();
		Connection cn = connect();
		String sql = "select * from classicmodels.employees";
		try {
			Statement st = cn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			while (rs.next()) {
				int no = rs.getInt("employeeNumber");
				String fn = rs.getString("firstName");
				String ln = rs.getString("lastName");
				String ex = rs.getString("extension");
				String em = rs.getString("email");
				String cd = rs.getString("officeCode");
				int rp = rs.getInt("reportsTo");
				String jb = rs.getString("jobTitle");
				Employee e1 = new Employee(no, fn, ln, ex, em, cd, rp, jb);
				data.add(e1);
			}
			cn.close();
		} catch (SQLException ex) {
			System.out.println("getAll() error:" + ex.getMessage());
		}
		return data;
	}

	public void insert(Employee p) {
		Connection cn = connect();
		String sql = "insert into classicmodels.employees(employeeNumber,firstName,lastName,extension,email,officeCode,reportsTo,jobTitle)values(?,?,?,?,?,?,?,?); ";
		try {
			cn.setAutoCommit(false);
			PreparedStatement st = cn.prepareStatement(sql);
			st.setInt(1, p.getEmployeeNumber());
			st.setString(2, p.getFirstName());
			st.setString(3, p.getLastName());
			st.setString(4, p.getExtension());
			st.setString(5, p.getEmail());
			st.setString(6, p.getOfficeCode());
			st.setInt(7, p.getReportsTo());
			st.setString(8, p.getJobTitle());
			st.executeUpdate();
			cn.commit();
			cn.setAutoCommit(true);
			cn.close();
		} catch (SQLException ex) {
			System.out.println("insert() error:" + ex.getMessage());
		}
	}
	public void update(Employee p) {
		Connection cn = connect();
		String sql = "update classicmodels.employees set "+
		" firstName=?,lastName=?,extension=?,email=?,officeCode=?,reportsTo=?,jobTitle=? where employeeNumber=?";
		try {
			cn.setAutoCommit(false);
			PreparedStatement st = cn.prepareStatement(sql);			
			st.setString(1, p.getFirstName());
			st.setString(2, p.getLastName());
			st.setString(3, p.getExtension());
			st.setString(4, p.getEmail());
			st.setString(5, p.getOfficeCode());
			st.setInt(6, p.getReportsTo());
			st.setString(7, p.getJobTitle());
			st.setInt(8, p.getEmployeeNumber());
			st.executeUpdate();
			cn.commit();
			cn.setAutoCommit(true);
			cn.close();
		} catch (SQLException ex) {
			System.out.println("update() error:" + ex.getMessage());
		}
	}
	public void delete(int  n) {
		Connection cn = connect();
		String sql = "delete from classicmodels.employees where employeeNumber=?";
		try {
			cn.setAutoCommit(false);
			PreparedStatement st = cn.prepareStatement(sql);
			st.setInt(1, n);
			st.executeUpdate();
			cn.commit();
			cn.setAutoCommit(true);
			cn.close();
		} catch (SQLException ex) {
			System.out.println("delete() error:" + ex.getMessage());
		}
	}
}
