<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Supplier View</title>
</head>
<body>
<table border="1" width="60%">
  <thead>
    <td>供應商編號</td>
    <td>供應商名稱</td>
    <td>街道名稱</td>
    <td>城市名稱</td>
    <td>州名稱</td>
    <td>郵遞區號</td>
   
  </thead>
   <c:forEach var="st" items="${suppliers}" >
    <tr>
       <td>${st.supId}</td>
       <td>${st.supName}</td>
       <td>${st.street}</td>
       <td>${st.city}</td>
       <td>${st.state}</td>
       <td>${st.zip}</td>
    </tr>  
   </c:forEach>  
</table>
</body>
</html>