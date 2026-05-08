<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta HTTP-EQUIV="pragma" CONTENT="no-cache"> 
<meta charset="UTF-8">
<title>Student Main</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
</head>
<body>
<h1>Student Main Page</h1>
<input type="button" id="query" value="查詢"/>
<button onclick="studentadd()">新增</button>
<button onclick="studentupdate()">修改</button>
<button onclick="studentdelete()">刪除</button>
<p>
學號: <input type="text" id="sid" value="S005"/><p/>
姓名:<input type="text" id="sname" value="Scarlet"/><p/>
住址:<input type="text" id="age" value="20"/><p/>
<div id="div1">Show Message</div>
<script>
  $(document).ready(function(){
	    $.ajaxSetup({
	            cache: false,
	    });
	        $("#query").click(studentquery);
	  });

    function studentquery(){
         $.get("student",function(data){
                  $("#div1").html(data);
             });
    }
    function studentadd(){
    	 $.ajaxSetup({
	            cache: false,
	    });
        $.post("student/addStudent",
                {"sid":$("#sid").val(),"sname":$("#sname").val(),"age":parseInt($("#age").val())},
                function(data){
                	 $("#div1").html(data);
                }
           );
    }

    function studentupdate(){
   	 $.ajaxSetup({
	            cache: false,
	    });
       $.post("student/updateStudent",
               {"sid":$("#sid").val(),"sname":$("#sname").val(),"age":parseInt($("#age").val())},
               function(data){
               	 $("#div1").html(data);
               }
          );
   }

    function studentdelete(){
   	 $.ajaxSetup({
	            cache: false,
	    });
       $.post("student/deleteStudent",
               {"sid":$("#sid").val(),"sname":"","age":0},
               function(data){
               	 $("#div1").html(data);
               }
          );
   }
   
</script>
</body>
</html>
