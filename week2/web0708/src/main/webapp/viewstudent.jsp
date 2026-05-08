<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="model.*" %>
<%@page import="java.util.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Student View</title>
</head>
<body>
<% 
     Object obj=request.getAttribute("stu");
     List<Student> students=(List<Student>)obj;
     
 %>
<table border="1" width="40%">
  <thead>
    <td>學號</td>
    <td>名字</td>
  </thead>
  <% for(Student s : students){
	  pageContext.setAttribute("st",s);   
   %>
    <tr>
       <td>${st.no}</td>
       <td>${st.name}</td>
    </tr>  
  <% } %>
</table>
</body>
</html>