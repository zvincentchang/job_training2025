<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JSTL Choose</title>
</head>
<body>
  <ul>
   <c:forEach var="i" begin="1" end="10">
        <LI><c:out value="${i}"/>
            <c:choose>
                <c:when test="${i < 4}">
                    (small)
                </c:when>
                <c:when test="${i < 8}">
                    (medium)
                </c:when>
                <c:otherwise>
                    (large)
                </c:otherwise>
            </c:choose>
        </c:forEach>
  </ul>
</body>
</html>