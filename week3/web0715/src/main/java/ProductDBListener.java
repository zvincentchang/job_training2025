

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import model.Employee;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.*;
import model.*;
/**
 * Application Lifecycle Listener implementation class ProductDBListener
 *
 */
@WebListener
public class ProductDBListener implements HttpSessionListener {

    /**
     * Default constructor. 
     */
    public ProductDBListener() {
        // TODO Auto-generated constructor stub
    }

	/**
     * @see HttpSessionListener#sessionCreated(HttpSessionEvent)
     */
    public void sessionCreated(HttpSessionEvent se)  { 
         // TODO Auto-generated method stub
    	Connection cn = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			cn = DriverManager.getConnection(
					"jdbc:mysql://localhost:3306/classicmodels?useUnicode=true&characterEncoding=utf8", "root", "1234");
		} catch (SQLException | ClassNotFoundException ex) {
			System.out.println("connect() error:" + ex.getMessage());
		}
		List<Product> data=new ArrayList<>();
		String sql = "SELECT productCode as code, buyPrice as price , quantityInStock as quantity, productDescription as description  FROM classicmodels.products;";
		try {
			Statement st = cn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			while (rs.next()) {
				
				String cd = rs.getString("code");
				double pr = rs.getDouble("price");
				int qty = rs.getInt("quantity");
				String ds = rs.getString("description");
				
				Product e1 = new Product(cd,""+pr,qty,ds);
				data.add(e1);
			}
			cn.close();
		} catch (SQLException ex) {
			System.out.println("getAll() error:" + ex.getMessage());
		}
		se.getSession().setAttribute("products", data);
    }

	/**
     * @see HttpSessionListener#sessionDestroyed(HttpSessionEvent)
     */
    public void sessionDestroyed(HttpSessionEvent se)  { 
         // TODO Auto-generated method stub
    }
	
}
