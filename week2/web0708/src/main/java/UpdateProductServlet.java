

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
 * Servlet implementation class UpdateProductServlet
 */
@WebServlet("/updateform")
public class UpdateProductServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateProductServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		String id=request.getParameter("id");
		List<Product> data=(List<Product>)request.getSession().getAttribute("products");
		Product px=data.stream().filter(p->p.getId()==Integer.parseInt(id)).findFirst().get();
        request.setAttribute("product", px); 
		request.getRequestDispatcher("updateproduct.jsp").forward(request, response);
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
		List<Product> data=(List<Product>)hs.getAttribute("products");
		dao.setProducts(data);
		int index=-1;
		for(int i=0;i<data.size();i++) {
			if(data.get(i).getId()==px.getId()) {
				index=i;
				break;
			}
		}
		dao.update(index, px);
		request.getSession().setAttribute("products",dao.getAll());
		request.getRequestDispatcher("viewproduct.jsp").forward(request, response);
	}

}
