<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Student View</title>
</head>
<body>
<table border="1" width="40%">
  <thead>
    <td>學號</td>
    <td>名字</td>
  </thead>
   <c:forEach var="st" items="${requestScope.stu}" >
    <tr>
       <td>${st.no}</td>
       <td>${st.name}</td>
    </tr>  
   </c:forEach>  
</table>
</body>
</html>