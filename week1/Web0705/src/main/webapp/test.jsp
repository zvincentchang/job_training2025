<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" errorPage="errorDemo.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Error Test</title>
</head>
<body>
<%
   String s=request.getParameter("no");
   int i =Integer.parseInt(s);
   out.println("value is "+i);
%>
</body>
</html>