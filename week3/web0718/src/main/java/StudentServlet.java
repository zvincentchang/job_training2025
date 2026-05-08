

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.*;

import model.Student;
/**
 * Servlet implementation class StudentServlet
 */
@WebServlet("/student")
public class StudentServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public StudentServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		  String jsonString = "{\"name\":\"Maxsu\", \"age\":24}"; 
		  GsonBuilder builder = new GsonBuilder(); 
	      builder.setPrettyPrinting(); 
	      Gson gson = builder.create(); 
	      Student student = gson.fromJson(jsonString, Student.class); 
	      //System.out.println(student); 
	      student.setAge(18);
	      student.setName("Max");
	      String st1=gson.toJson(student);
	      response.setContentType("text/html;charset=utf-8");
	      //response.getWriter().append(student.toString());
	      //response.setContentType("application/json;charset=utf-8");
	      response.getWriter().append(st1);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
