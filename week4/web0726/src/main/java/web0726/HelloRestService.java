package web0726;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/")
public class HelloRestService {

    @GET
    @Path("/hi")
    @Produces(MediaType.TEXT_HTML + ";charset=UTF-8")
    public String getHelloMessage(){
        return "<h1>Hi 您好!</h1>";
    }
    @GET
    @Path("/hello")
    @Produces(MediaType.TEXT_HTML + ";charset=UTF-8")
    public String getHelloMessage2(){
        return "<h1>Hello 您好!</h1>";
    }
}

