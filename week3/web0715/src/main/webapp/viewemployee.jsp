<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>View Employee</title>
</head>
<body>
<a href="addemployee.html">新增員工資料</a>
<table border="1" width="70%">
  <thead>
    <td>編號</td><td>姓氏</td><td>名字</td><td>分機號碼</td><td>電子郵件</td>
    <td>辦公室</td><td>主管編號</td><td>職稱</td><td>異動</td>
  </thead>
<c:forEach var="emp" items="${employees}">
   <tr>
      <td>${emp.employeeNumber}</td>
      <td>${emp.firstName}</td>
      <td>${emp.lastName}</td>
      <td>${emp.extension}</td>
      <td>${emp.email}</td>
      <td>${emp.officeCode}</td>
      <td>${emp.reportsTo}</td>
      <td>${emp.jobTitle}</td>
      <td><a href="updateform?no=${emp.employeeNumber}">修改</a>&nbsp;&nbsp;
      <a href="deleteform?no=${emp.employeeNumber}">刪除</a></td>
   </tr>
</c:forEach> 

</table>
</body>
</html>