

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.Employee;
import model.EmployeeDAO;

/**
 * Servlet implementation class UpdateEmployeeServlet
 */
@WebServlet("/UpdateEmployeeServlet")
public class UpdateEmployeeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateEmployeeServlet() {
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
		String no=request.getParameter("no");
		String fn=request.getParameter("fn");
		String ln=request.getParameter("ln");
		String ex=request.getParameter("ex");
		String em=request.getParameter("em");
		String cd=request.getParameter("cd");
		String rp=request.getParameter("rp");
		String jb=request.getParameter("jb");
		EmployeeDAO dao=new EmployeeDAO(); 
		Employee e1=new Employee(Integer.parseInt(no),fn,ln,ex,em,cd,Integer.parseInt(rp),jb);
		dao.update(e1);
		List<Employee> emps=dao.getAll();
	    request.setAttribute("employees", emps);
	    request.getRequestDispatcher("viewemployee.jsp").forward(request, response);
	}

}
