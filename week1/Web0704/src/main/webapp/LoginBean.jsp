<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Received Login</title>
</head>
<body>
 <jsp:useBean id="mylogin"  class="beans.LoginBean" scope="session" >
         <jsp:setProperty name="mylogin" property="*" />
</jsp:useBean>
<h1>
  Name: ${mylogin.user}<br/>
  Password: ${mylogin.password}<br/>
  Phone: ${mylogin.phone}
</h1>
</body>
</html>