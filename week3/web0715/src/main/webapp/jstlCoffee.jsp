<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>classicmodels coffees</title>
</head>
<body>
<sql:setDataSource var="sample" driver="com.mysql.cj.jdbc.Driver"
     url="jdbc:mysql://localhost:3306/classicmodels"
     user="root"  password="1234"/>
<sql:query dataSource="${sample}" var="result">
      SELECT * from classicmodels.coffees
</sql:query> 
<table border="1" width="50%">
<tr>
   <th>Coffee Name</th>
   <th>Supplier Id</th>
   <th>Price</th>
   <th>Sales</th>
   <th>Total</th>
</tr>
<c:forEach var="row" items="${result.rows}">
<tr>
   <td><c:out value="${row.cof_name}"/></td>
   <td><c:out value="${row.sup_id}"/></td>
   <td><c:out value="${row.price}"/></td>
   <td><c:out value="${row.sales}"/></td>
   <td><c:out value="${row.total}"/></td>
</tr>
</c:forEach>
</table> 

</body>
</html>