<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isErrorPage="true"  %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Show Message</title>
</head>
<body>
<h1>
   Error:<%= exception.getMessage() %>
</h1>
</body>
</html>