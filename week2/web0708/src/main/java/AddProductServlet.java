

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.*;
import java.util.*;

/**
 * Servlet implementation class AddProductServlet
 */
@WebServlet(urlPatterns={"/addProduct"})
public class AddProductServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddProductServlet() {
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
		String id=request.getParameter("sid");
		String pname=request.getParameter("pname");
		String price=request.getParameter("price");
		Product px=new Product(Integer.parseInt(id),pname,Integer.parseInt(price));
		HttpSession hs=request.getSession();
		ProductDAO dao=new ProductDAO();
		if(hs.getAttribute("products")==null) {
			dao.add(px);
			hs.setAttribute("products",dao.getAll());
		}else {
			List<Product> data=(List<Product>)hs.getAttribute("products");
			data.add(px);
			dao.setProducts(data);
			hs.setAttribute("products",dao.getAll());
		}
		System.out.println(dao.getAll().toString());
		//response.getWriter().append(dao.getAll().toString());
		request.getRequestDispatcher("viewproduct.jsp").forward(request, response);
	}

}
