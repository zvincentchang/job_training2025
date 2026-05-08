<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Animal</title>
</head>
<body>
<% request.setCharacterEncoding("utf-8"); %>
      <p>Your favorite animal is a
          <b> <%= request.getParameter("favoriteAnimal") %> </b>
         Wow, mine is too!
      </p>

</body>
</html>