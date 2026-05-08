<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>員工資料修改畫面</title>
</head>
<body>
<form action="UpdateEmployeeServlet" method="post">
   員工編號:<input type="text" name=no value="${emp.employeeNumber}"/><br/>
   姓氏:<input type="text" name="ln" value="${emp.lastName}"/><br/>
   名字:<input type="text" name="fn" value="${emp.firstName}"/><br/>
   分機號碼:<input type="text" name="ex" value="${emp.extension}"/><br/>
   電子郵件:<input type="text" name="em" value="${emp.email}"/><br/>
   辦公室代號:<input type="text" name="cd" value="${emp.officeCode}"/><br/>
   主管編號:<input type="text" name="rp" value="${emp.reportsTo}"/><br/>
   職位:<input type="text" name="jb" value="${emp.jobTitle}"/><br/>
   <input type="submit"/>
</form>
</body>
</html>