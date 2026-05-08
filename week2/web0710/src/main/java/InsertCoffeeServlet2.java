

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.*;
import java.util.*;
/**
 * Servlet implementation class InsertCoffeeServlet2
 */
@WebServlet("/InsertCoffeeServlet2")
public class InsertCoffeeServlet2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public InsertCoffeeServlet2() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		 String coffee=request.getParameter("coffee");
         String sale=request.getParameter("sale");
         String total=request.getParameter("total");         
         String supplier=request.getParameter("supplier");
         String price=request.getParameter("price");         
         try {
        	 CoffeeDAO dao=new CoffeeDAO();
             dao.insertCoffee(coffee,sale,total,supplier,price);
             //out.println("新增完成");
             response.sendRedirect("coffeemvc");
         } catch (SQLException ex) {
             System.out.println(ex.getMessage());
             response.getWriter().println("新增失敗");
         }
	}

}
