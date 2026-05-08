<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Update</title>
</head>
<body>
 <c:set var="UID" value="${param.uid}" />
 <c:set var="FName" value="${param.firstname}" />
 <c:set var="LName" value="${param.lastname}" />
 <c:set var="Age" value="${param.age}" />


<sql:setDataSource var="sample" driver="com.mysql.cj.jdbc.Driver"
     url="jdbc:mysql://localhost:3306/mydb"
     user="root"  password="1234"/>
<sql:update dataSource="${sample}">
       update mydb.Employees set age=${Age},firstname='${FName}',lastname= '${LName}' where  id= ${UID}
</sql:update> 

<sql:query dataSource="${sample}" var="result">
      SELECT * from mydb.Employees
</sql:query> 
<table border="1" width="50%">
<tr>
   <th>Emp ID</th>
   <th>First Name</th>
   <th>Last Name</th>
   <th>Age</th>
</tr>
<c:forEach var="row" items="${result.rows}">
<tr>
   <td><c:out value="${row.id}"/></td>
   <td><c:out value="${row.firstname}"/></td>
   <td><c:out value="${row.lastname}"/></td>
   <td><c:out value="${row.age}"/></td>
</tr>
</c:forEach>
</table> 

</body>
</html>