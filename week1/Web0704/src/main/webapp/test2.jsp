<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Jsp Bean</title>
</head>
<body>
<jsp:useBean id="t2" class="beans.Test"></jsp:useBean>
<jsp:setProperty name="t2" property="message" value="Hello again!" />
<h1>
  EL Get Message : ${t2.message}<br/>
  Bean Property Tag:<jsp:getProperty name="t2" property="message" />
</h1>
</body>
</html>