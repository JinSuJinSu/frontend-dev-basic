<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script>
// DOM Load Event
// 1.load (DOM, CSSOM, Image) 로딩
// 2.DOMContentLoaded : DOM만 로딩(CSSOM x, img x)
	window.addEventListener("load",function(){
		document
		.getElementsByTagName("button")[0]
		.addEventListener("click",function(){
			let xhr = null;
			
			if(window.ActiveXObject){ // <=E9
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
			else if(window.XMLHttpRequest){
				xhr = new XMLHttpRequest(); // standard Broswer
			}
			else{
				console.log("Ajax 기능을 사용할 수 없습니다.")
			}
			xhr.addEventListener("readystatechange",function(){
				if(this.readyState==XMLHttpRequest.UNSENT){ // readyState : 0
					// request가 초기화되기 전
					console.log("State : UNSENT")
				}
				else if(this.readyState==XMLHttpRequest.OPENED){ // readyState : 1
					// 서버와 연결이 성공
					console.log("State : OPENED")
				}
				else if(this.readyState==XMLHttpRequest.HEADERS_RECEVED){ // readyState : 2
					// 서버가 request를 받음
					console.log("State : HEADERS_RECEVED")
				}
				else if(this.readyState==XMLHttpRequest.LOADING){ // readyState : 3
					// response 처리중(JSON 파싱중)
					console.log("State : LOADING")
				}
				else if(this.readyState==XMLHttpRequest.DONE){ // readyState : 4
					// response 처리가 끝남(JSON 파싱 완료)
					console.log("State : DONE")
					
					if(this.status!=200){
						console.error("error:",this.status);
						return;
					}
					console.log(this.responseText, typeof(this.responseText));
					let response = JSON.parse(this.responseText);
					console.log(response, typeof(response));
					
					if(response.result !== "success") {
						console.error(response.message);
						return;
					}
					
					
					let html="";
					html+=("<h1>" + response.data.no + "</h1>");
					html+=("<h2>" + response.data.name + "</h2>");
					html+=("<h3>" + response.data.message + "</h3>");
					
					document
					.getElementById("data")
					.innerHTML += html;		
				}
			});
		
			xhr.open("get","${pageContext.request.contextPath}/api/json",true);
			xhr.send();
	});
});
</script>
</head>
<body>
	<h1>AJAX Test JSON Format Data : XmlHttpRequest를 직접 사용하기</h1>
	<button>데이터 가져오기</button>
	<div id="data"></div>

</body>
</html>