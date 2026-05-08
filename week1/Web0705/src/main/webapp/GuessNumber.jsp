<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Guess Page</title>
</head>
<body>
<jsp:useBean id="no" class="beans.MyNumber" scope="session"></jsp:useBean>
<% 
  String gn=request.getParameter("guessNumber"); 
%>
<h2>Your input number is <%= gn %></h2>
<%
   int g=Integer.parseInt(gn);
   int sys=no.getValue();
   if(g>sys)
	  response.getWriter().println(gn+" 猜的數字太大");
   else if(g<sys)
	   out.println(gn+" 猜的數字太小");
   else{
	   out.println(gn+" 猜對了數字");
	   session.invalidate();
   }
%>
<h2>電腦產生的數值為<%= sys%></h2>
</body>
</html>