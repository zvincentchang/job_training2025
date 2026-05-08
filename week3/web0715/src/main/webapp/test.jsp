<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
        <%
            if (((Boolean) request.getAttribute("isLogin")).equals(new Boolean(true))) {
                session.setAttribute("isLogin", new Boolean(true));
                response.sendRedirect("index2.jsp");
            } else {
        %>
        請輸入登錄資訊:<form action="loginRequest.jsp" method="get">
            <br>用戶名：<input type=text name=user>
            <br>密碼：<input type=password name=password>
            <br><input type=submit name=submit>
        </form>
        <%    }   %>

</body>
</html>