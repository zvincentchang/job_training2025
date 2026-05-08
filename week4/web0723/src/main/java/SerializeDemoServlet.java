

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class SerializeDemoServlet
 */
@WebServlet("/SerializeDemoServlet")
public class SerializeDemoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SerializeDemoServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		String fn=request.getParameter("FirstName");
		String ln=request.getParameter("LastName");
		if(fn==null && ln==null)
		{
			fn="demo1";
			ln="demo2";
		}
		response.setContentType("text/html;charset=utf-8");
		response.getWriter().append(fn+","+ln);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String fn=request.getParameter("FirstName");
		String ln=request.getParameter("LastName");
		if(fn==null && ln==null)
		{
			fn="demo1";
			ln="demo2";
		}
		response.setContentType("text/html;charset=utf-8");
		response.getWriter().append(fn+"|"+ln);
	}

}
