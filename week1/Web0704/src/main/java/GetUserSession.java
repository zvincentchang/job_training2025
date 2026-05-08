

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class GetUserSession
 */
@WebServlet("/GetUserSession")
public class GetUserSession extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetUserSession() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	   HttpSession hs=request.getSession();
	   if(hs.getAttribute("username")!=null)
		   response.getWriter().append("Name:"+hs.getAttribute("username").toString());
	   else
		   response.getWriter().append("username Session Name is not exists\n");
	   
	   if(hs.getAttribute("mylogin")!=null)
		   response.getWriter().append("Name:"+hs.getAttribute("mylogin").toString());
	   else
		   response.getWriter().append("mylogin Session Name is not exists");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
