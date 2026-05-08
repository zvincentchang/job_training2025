package model;

import java.sql.*;
import java.util.*;

public class SupplierDAO {
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

	public List<Supplier> getAll() {
		List<Supplier> data = new ArrayList<>();
		Connection cn = connect();
		Statement stmt = null;
		String query = "select SUP_ID, SUP_NAME, STREET, CITY, STATE, ZIP from SUPPLIERS";
		try {
			stmt = cn.createStatement();
			ResultSet rs = stmt.executeQuery(query);

			while (rs.next()) {
				int sid = rs.getInt("SUP_ID");
				String sname = rs.getString("SUP_NAME");
				String street = rs.getString("STREET");
				String city = rs.getString("CITY");
				String state = rs.getString("STATE");
				String zip = rs.getString("ZIP");
				Supplier sp1 = new Supplier(sid, sname, street, city, state, zip);
				data.add(sp1);
			}

		} catch (SQLException e) {
			System.out.println("getAll() error:"+e.getMessage());
		} finally {
			if (stmt != null) {
				try {
					stmt.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}

		return data;
	}
}
