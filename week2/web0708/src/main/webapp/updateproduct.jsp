<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Update Form</title>
</head>
<body>
<form action="updateform" method="post">
   編號:<input type="text" name="sid" value="${product.id}"/><br/> 
   名稱:<input type="text" name="pname" value="${product.name}"/><br/> 
   價格:<input type="text" name="price" value="${product.price}"/><br/> 
  <input type="submit" value="Update"/><br/> 
</form>
</body>
</html>