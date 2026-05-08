<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Coffee View</title>
</head>
<body>
<table border="1" width="60%">
  <thead>    
    <td>咖啡名稱</td>
    <td>供應商編號</td>
    <td>價格</td>
    <td>銷售量</td>
    <td>總銷售量</td>
    
   
  </thead>
   <c:forEach var="st" items="${coffees}" >
    <tr>
       <td>${st.cofName}</td>
       <td>${st.supId}</td>
       <td>${st.price}</td>
       <td>${st.sales}</td>
       <td>${st.total}</td>       
    </tr>  
   </c:forEach>  
</table>
</body>
</html>