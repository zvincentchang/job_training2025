<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Product View</title>
</head>
<body>
<a href="addproduct.html">Add New Product</a>
<table border="1" width="40%">
  <thead>
    <td>產品編號</td>
    <td>產品名稱</td>
    <td>產品價格</td>
    <td>Action</td>
  </thead>
   <c:forEach var="st" items="${sessionScope.products}" >
    <tr>
       <td>${st.id}</td>
       <td>${st.name}</td>
       <td>${st.price}</td>
       <td>
          <a href='updateform?id=${st.id}'>修改</a>
          <a href='deleteform?id=${st.id}'>刪除</a>
       </td>
    </tr>  
   </c:forEach>  
</table>
</body>
</html>