

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.*;
/**
 * Servlet implementation class StoredProcedureServlet
 */
@WebServlet("/spemployee")
public class StoredProcedureServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public StoredProcedureServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		    String url = "jdbc:mysql://localhost:3306/classicmodels";
	        String username = "root";
	        String password = "1234";
	        PrintWriter out = response.getWriter();
	        String city=request.getParameter("city");
	        if(city==""||city==null)
	        {
	        	city="Tokyo";
	        }
	        try {
	            Class.forName("com.mysql.cj.jdbc.Driver");
	            Connection con = DriverManager.getConnection(url, username, password);
	            CallableStatement cStmt = con.prepareCall("CALL classicmodels.GetEmpInOffice(?)");
	            cStmt.setString(1, city);
	            ResultSet rs=cStmt.executeQuery();
	            print(out, rs);
	        }catch(Exception ex) {
	        	System.out.println("sp error:"+ex.getMessage());
	        	out.println("stored procedure error");
	        }

	}
	 public void print(PrintWriter out ,ResultSet rs)
	    {       
	        try {          
	            out.println("<table border='1'>");
	            while (rs.next()) {             
	                out.println("<tr><td>");
	                String no = rs.getString("employeeNumber");
	                out.println(""+no);
	                out.println("</td><td>");
	                String firstname = rs.getString("firstname");
	                out.println(""+firstname);
	                out.println("</td><td>");
	                String lastname = rs.getString("lastname");
	                out.println(""+lastname);
	                out.println("</td><td>");
	                String email = rs.getString("email");
	                 out.println(""+email);
	                out.println("</td>");                
	            }
	            out.println("</table>");
	        } catch (SQLException e) {
	            System.out.println(e.getMessage());
	        }     
	    
	    }


	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
