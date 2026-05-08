<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>MyNumber Bean</title>
</head>
<body>
<jsp:useBean id="no" class="beans.MyNumber" scope="session"></jsp:useBean>
<h1>
  MyNumber no value is :<jsp:getProperty name="no" property="value"/>
</h1>
<jsp:useBean id="no2" class="beans.MyNumber" scope="request" ></jsp:useBean>
<h1>
  MyNumber no2 value is :<jsp:getProperty name="no2" property="value"/>
</h1>

<jsp:useBean id="no3" class="beans.MyNumber" scope="application"></jsp:useBean>
<h1>
  MyNumber no3 value is :<jsp:getProperty name="no3" property="value"/>
</h1>
</body>
</html>