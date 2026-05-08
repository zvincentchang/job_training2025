<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Student Form result</title>
</head>
<body>

<h2>Student Information</h2>
<form id="command" action="addStudent" method="POST">
   <table>
    <tbody><tr>
        <td><label for="name">Name</label></td>
        <td><input  name="name" type="text" value="Alan"></td>
    </tr>
    <tr>
        <td><label for="age">Age</label></td>
        <td><input name="age" type="text" value="20"></td>
    </tr>
    <tr>
        <td><label for="id">Id</label></td>
        <td><input name="id" type="text" value="1"></td>
    </tr>
    <tr>
        <td colspan="2">
            <input type="submit">
        </td>
    </tr>
</tbody></table>  
</form>


</body></html>