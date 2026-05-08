<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="beans.Test" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Test Bean</title>
</head>
<body>
<%
   Test t1=new Test();
   t1.setMessage("test1");
%>
<h1>
  Message:<%= t1.getMessage() %>
</h1>
</body>
</html>