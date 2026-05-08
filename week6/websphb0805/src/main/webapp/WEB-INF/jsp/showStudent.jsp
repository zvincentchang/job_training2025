<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
  <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Students</title>
</head>
<body>
    <table border="1" width="40%">
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Age</th>
            <c:forEach items="${message}" var="student">
                <tr>
                    <td>${student.sid}</td>
                    <td>${student.sname}</td>
                    <td>${student.age}</td>
                </tr>
            </c:forEach>                 
        </table>
</body>
</html>
