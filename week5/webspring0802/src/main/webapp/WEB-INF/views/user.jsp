<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<html>
<head>
   <meta charset="utf-8">
   <title>Spring MVC表單處理(核取方塊)</title>
</head>
<body>

<h2>使用者資訊 - </h2>
<form:form method="POST" action="addUser">
   <table>
      <tr>
         <td><form:label path="username">使用者名：</form:label></td>
         <td><form:input path="username" /></td>
      </tr>
      <tr>
         <td><form:label path="password">密碼：</form:label></td>
         <td><form:password path="password" /></td>
      </tr>  
      <tr>
         <td><form:label path="address">地址：</form:label></td>
         <td><form:textarea path="address" rows="5" cols="30" /></td>
      </tr>  
      <tr>
         <td><form:label path="receivePaper">訂閱新聞？</form:label></td>
         <td><form:checkbox path="receivePaper" /></td>
      </tr> 
       <tr>
         <td><form:label path="favoriteFrameworks">你喜歡的框架</form:label></td>
         <td><form:checkboxes items="${webFrameworkList}" path="favoriteFrameworks" /></td>
      </tr> 
      <tr>
         <td colspan="2">
            <input type="submit" value="提交"/>
         </td>
      </tr>
   </table>  
</form:form>
</body>
</html>
