package model;

import java.sql.*;
import java.util.*;

public class CoffeeDAO {
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

	public void insertCoffee(String coffee, String sale, String total, String supplier, String price)
			throws SQLException {
		Connection con = connect();
		PreparedStatement insert = null;

		String insertStatement = "insert into classicmodels.COFFEES( COF_NAME , SUP_ID , PRICE , SALES ,TOTAL)"
				+ "values (? ,? ,? ,? ,?)";

		try {
			con.setAutoCommit(false);
			insert = con.prepareStatement(insertStatement);

			// for (Map.Entry<String, Integer> e : salesForWeek.entrySet()) { }
			insert.setString(1, coffee);
			insert.setInt(2, Integer.parseInt(supplier));
			insert.setDouble(3, Double.parseDouble(price));
			insert.setInt(4, Integer.parseInt(sale));
			insert.setInt(5, Integer.parseInt(total));
			insert.executeUpdate();
			con.commit();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			if (con != null) {
				try {
					System.err.print("Transaction is being rolled back");
					con.rollback();
				} catch (SQLException ex) {
					System.out.println(ex.getMessage());
				}
			}
		} finally {
			if (insert != null) {
				insert.close();
			}
			con.setAutoCommit(true);
		}
	}

	public List<Coffee> getAll() {
		List<Coffee> data = new ArrayList<>();
		Connection cn = connect();
		Statement stmt = null;
		String query = "select * from classicmodels.coffees";
		try {
			stmt = cn.createStatement();
			ResultSet rs = stmt.executeQuery(query);

			while (rs.next()) {
				int sid = rs.getInt("SUP_ID");
				String cname = rs.getString("COF_NAME");
				double price = rs.getDouble("price");
				int sales = rs.getInt("sales");
				int total = rs.getInt("total");
				Coffee sp1 = new Coffee(cname, sid, price, sales, total);
				data.add(sp1);
			}

		} catch (SQLException e) {
			System.out.println("getAll() error:" + e.getMessage());
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

	public void updateCoffee(String coffee, String sale, String total) throws SQLException {
		Connection con = connect();
		PreparedStatement updateSales = null;
		PreparedStatement updateTotal = null;

		String updateString = "update COFFEES " + "set SALES = ? where COF_NAME = ?";

		String updateStatement = "update COFFEES " + "set TOTAL = ? " + "where COF_NAME = ?";

		try {

			con.setAutoCommit(false);
			updateSales = con.prepareStatement(updateString);
			updateTotal = con.prepareStatement(updateStatement);

			// for (Map.Entry<String, Integer> e : salesForWeek.entrySet()) { }
			updateSales.setInt(1, Integer.parseInt(sale));
			updateSales.setString(2, coffee);
			updateSales.executeUpdate();
			updateTotal.setInt(1, Integer.parseInt(total));
			updateTotal.setString(2, coffee);
			updateTotal.executeUpdate();
			con.commit();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			if (con != null) {
				try {
					System.err.print("Transaction is being rolled back");
					con.rollback();
				} catch (SQLException excep) {
					System.out.println(e.getMessage());
				}
			}
		} finally {
			if (updateSales != null) {
				updateSales.close();
			}
			if (updateTotal != null) {
				updateTotal.close();
			}
			con.setAutoCommit(true);
		}
	}

	public void deleteCoffee(String coffee) throws SQLException {
		Connection con = connect();
		PreparedStatement delete = null;

		String insertStatement = "delete from classicmodels.COFFEES where COF_NAME=? ";

		try {

			con.setAutoCommit(false);
			delete = con.prepareStatement(insertStatement);

			delete.setString(1, coffee);
			delete.executeUpdate();
			con.commit();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			if (con != null) {
				try {
					System.err.print("Transaction is being rolled back");
					con.rollback();
				} catch (SQLException ex) {
					System.out.println(ex.getMessage());
				}
			}
		} finally {
			if (delete != null) {
				delete.close();
			}

			con.setAutoCommit(true);
		}
	}

}
