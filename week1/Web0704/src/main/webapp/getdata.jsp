<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>       
        <title>JSP Page</title>
        <% request.setCharacterEncoding("UTF-8");%>
    </head>
    <body>
        <h1>Hello World!</h1>
        <h2 style="color:blue">
          User: ${param.user}<br/>
          Password: ${param.pass}
        </h2>
         <h2 style="color:red">
          User: <%= request.getParameter("user") %><br/>
          Password: <%= request.getParameter("pass") %>
        </h2>
    </body>
</html>
