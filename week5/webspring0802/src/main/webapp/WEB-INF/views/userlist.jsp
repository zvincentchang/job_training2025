<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
    <title>Spring MVC表單處理(多項)</title>
</head>
<body>

<h2>提交使用者資訊 - </h2>
   <table>
      <tr>
         <td>使用者名：</td>
         <td>${username}</td>
      </tr>
      <tr>
         <td>密碼：</td>
         <td>${password}</td>
      </tr>    
      <tr>
         <td>地址：</td>
         <td>${address}</td>
      </tr>  
      <tr>
         <td>是否訂閱：</td>
         <td>${receivePaper}</td>
      </tr>    
      <tr>
         <td>喜歡的技術/框架</td>
           <c:forEach  var="current"  items="${favoriteFrameworks}" >      
                   <td><c:out value="${current}" /></td>          
           </c:forEach>        
      </tr>           
   </table>  
</body>
</html>
