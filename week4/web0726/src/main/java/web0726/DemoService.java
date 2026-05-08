package web0726;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/")
public class DemoService {
	
   @GET
   @Path("/welcome")
   @Produces(MediaType.TEXT_HTML + ";charset=UTF-8")
   public String say() {
	   return "<h1>Welcome</h1>";
   }
}
