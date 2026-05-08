<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Employees</title>
</head>
<body>
<sql:setDataSource var="sample" driver="com.mysql.cj.jdbc.Driver"
     url="jdbc:mysql://localhost:3306/mydb"
     user="root"  password="1234"/>

<sql:query dataSource="${sample}" var="result">
      SELECT * from mydb.Employees
</sql:query> 
<a href="jstlinsertform.jsp">新增員工</a>
<table border="1" width="50%">
<tr>
   <th>Emp ID</th>
   <th>First Name</th>
   <th>Last Name</th>
   <th>Age</th>
   <th>Action</th>
</tr>
<c:forEach var="row" items="${result.rows}">
<tr>
   <td><c:out value="${row.id}"/></td>
   <td><c:out value="${row.firstname}"/></td>
   <td><c:out value="${row.lastname}"/></td>
   <td><c:out value="${row.age}"/></td>
   <td><a href="jstlupdateform.jsp">修改</a> &nbsp; <a href="jstldeleteform.jsp">刪除</a></td>
</tr>
</c:forEach>
</body>
</html>