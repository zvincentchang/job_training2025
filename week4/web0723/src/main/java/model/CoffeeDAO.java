package model;
import java.util.*;
import java.sql.*;
public class CoffeeDAO {
  Connection connect() {
	  Connection cn=null; 
	  try {
		  Class.forName("com.mysql.cj.jdbc.Driver");
		  String url="jdbc:mysql://localhost:3306/classicmodels";
		  cn=DriverManager.getConnection(url,"root", "1234");
	  }catch(Exception ex) {
		  System.out.println("connect() error:"+ex.getMessage());
	  }
	  return cn;
  }
  public String remove(String n) {
	  String ret="Delete Ok";
	  String sql="delete from classicmodels.coffees where COF_NAME=?";
	  try {
		PreparedStatement st=connect().prepareStatement(sql);
		st.setString(1, n);
		st.executeUpdate();	
	  }catch(SQLException ex) {
		  System.out.println("delete() error:"+ex.getMessage());
		  ret="Delete Failed";
	  }	  
	  return ret;
  }
  public String update(Coffee cof) {
	  String ret="Update Ok";
	  String sql="update classicmodels.coffees set SUP_ID=?,Price=?,Sales=?,Total=? where COF_NAME=?";
	  try {
		PreparedStatement st=connect().prepareStatement(sql);		
		st.setInt(1, cof.getSupId());
		st.setDouble(2, cof.getPrice());
		st.setInt(3, cof.getSales());
		st.setInt(4, cof.getTotal());
		st.setString(5, cof.getCofName());
		st.executeUpdate();	
	  }catch(SQLException ex) {
		  System.out.println("update() error:"+ex.getMessage());
		  ret="Update Failed";
	  }	  
	  return ret;
  }
  public Coffee findByCoffeeName(String n) {
	  List<Coffee> data= getAll();
	  Coffee c=data.stream().filter(x -> x.cofName.equalsIgnoreCase(n)).findFirst().orElse(null);
	  return c;
  }
  public String insert(Coffee cof) {
	  String ret="Insert Ok";
	  String sql="insert into classicmodels.coffees(COF_NAME,SUP_ID,Price,Sales,Total)values(?,?,?,?,?)";
	  try {
		PreparedStatement st=connect().prepareStatement(sql);
		st.setString(1, cof.getCofName());
		st.setInt(2, cof.getSupId());
		st.setDouble(3, cof.getPrice());
		st.setInt(4, cof.getSales());
		st.setInt(5, cof.getTotal());
		st.executeUpdate();	
	  }catch(SQLException ex) {
		  System.out.println("insert() error:"+ex.getMessage());
		  ret="Insert Failed";
	  }	  
	  return ret;
  }
  
  public List<Coffee> getAll(){
	  List<Coffee> data=new ArrayList<>();
	  Connection cn=connect();
	  if(cn==null)
		  return data;
	  String sql ="select * from classicmodels.coffees";
	  try {
	     Statement st =cn.createStatement();
	     ResultSet rs=st.executeQuery(sql);
	     while(rs.next()) {
	    	 String name=rs.getString("COF_NAME");
	    	 int id=rs.getInt("SUP_ID");
	    	 double price=rs.getDouble("Price");
	    	 int sa=rs.getInt("sales");
	    	 int tt=rs.getInt("total");
	    	 Coffee c=new Coffee(name,id,price,sa,tt);
	    	 data.add(c);
	     }	     
	     cn.close();
	  }catch(SQLException ex) {
		 System.out.println("getAll() error:"+ex.getMessage());  
	  }	  
	  
	  return data;
  }
}
