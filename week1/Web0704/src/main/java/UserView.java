

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class UserView
 */
@WebServlet("/user.view")
public class UserView extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserView() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		processRequest(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		processRequest(request, response);
	}
	
	protected void processRequest(HttpServletRequest request,
	         HttpServletResponse response) throws ServletException, IOException {
	        HttpSession session = request.getSession();
	        if (session.getAttribute("login") == null) {
	            response.sendRedirect("login2.html");
	            return;
	        } else {
	            response.setContentType("text/html;charset=UTF-8");
	            PrintWriter out = response.getWriter();
	            out.println("<html>");
	            out.println("<head>");
	            out.println("<title>歡迎 "
	                    + session.getAttribute("login") + "</title>");
	            out.println("</head>");
	            out.println("<body>");
	            out.println("<h1>Servlet User  " +
	                    session.getAttribute("login") + "</h1><br><br>");
	            out.println("<a href=\"logout.do\">登出</a>");
	            out.println("</body>");
	            out.println("</html>");
	            out.close();
	        }
	    }


}
