<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/jquery-3.6.0.js"></script>
<script>
$(function(){
	$("button").click(function(){
		$.ajax({
			url:"${pageContext.request.contextPath}/api/xml",
			async:true,
			type:"GET",
			dataType:"xml",
			success:function(xml){
				let $data = $("data",xml);
				let $no = $("no",$data);
				let $name = $("name",$data);
				let $message = $("message",$data);
				
				let html="";
				html+=("<h1>" + $no.text() + "</h1>");
				html+=("<h2>" + $name.text() + "</h2>");
				html+=("<h3>" + $message.text() + "</h3>");
				
				$("#data").append(html);
				
			}
			
		});
	});
});
</script>
</head>
<body>
	<h1>AJAX Test: Xml Format Data : $ajax 함수 사용하기</h1>
	<button>데이터 가져오기</button>
	<div id="data"></div>

</body>
</html>