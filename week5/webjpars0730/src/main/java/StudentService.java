import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import model.*;
import java.util.*;
@Path("/students")
public class StudentService {
   
   @GET
   @Produces(MediaType.APPLICATION_JSON)
   public List<Student> getAll(){
	   StudentDAO dao=new StudentDAO();
	   return dao.getAllStudents();
   }
   
   @POST
   @Consumes(MediaType.APPLICATION_FORM_URLENCODED)   
   public Response updateStudent(@FormParam("sname") String sname,
                      @FormParam("sid") int sid,
                      @FormParam("age") int age) {
	   StudentDAO dao=new StudentDAO();
	   boolean flag=dao.update(sid, sname, age);
	   if(flag)
		   return Response.status(Response.Status.OK).build();
	   else
	       return Response.status(Response.Status.NOT_MODIFIED).build();
   }
   
   @POST
   @Consumes(MediaType.APPLICATION_JSON)
   @Path("/add")
   public Response addStudent(Student st) {
	   StudentDAO dao=new StudentDAO();
	   Student s=dao.addStudent(st);
	   if(s==null)
		   return Response.status(Response.Status.NO_CONTENT).build();
	   else
	       return Response.ok().entity(st).build();
   }
   
   @DELETE
   @Path("/{sid}")
   public Response deleteStudent(@PathParam("sid") int sid) {
	   StudentDAO dao=new StudentDAO();
	   boolean flag=dao.deleteStudent(sid);
	   if(flag)
		   return Response.status(Response.Status.OK).build();
	   else
	       return Response.status(Response.Status.NOT_MODIFIED).build();
   }
}
