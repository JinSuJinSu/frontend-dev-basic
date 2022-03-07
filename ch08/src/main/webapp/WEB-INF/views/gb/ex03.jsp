<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
<script type="text/javascript" src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
<script>
let render = function(vo) {
	let html = 
			"<li data-no='" + vo.no + "'>" +
			"<strong>" + vo.name + "</strong>" +
			"<p>" + vo.message + "</p>" +
			"<strong></strong>" +
			"<a href='' data-no='" + vo.no + "'>삭제</a>" + 
			"</li>";
			
	 return html;		
}
let fetch = function() {
	$.ajax({
		url: '${pageContext.request.contextPath }/api/guestbook/list',
		type: 'get',
		dataType: 'json',
		success: function(response) {
			if(response.result !== 'success') {
				console.error(response.message);
				return;
			}
			for(let i = 0; i < response.data.length; i++) {
				let vo = response.data[i];
				let html = render(vo);
				$("#list-guestbook").append(html);
			}
		}
	});	
}
$(function() {
	// ..
	// ..
	// 삭제 다이알로그 객체 만들기
	let dialogDelete = $("#dialog-delete-form").dialog({
		autoOpen: false,
		modal: true,
		buttons: {
			"삭제": function() {
				let no = $("#hidden-no").val();
				let password = $("#password-delete").val();
				let url = "${pageContext.request.contextPath }/api/guestbook/delete/" + no;
				
				$.ajax({
					url: url,
					type: 'post',
					dataType: 'json',
					data: "password=" + password,
					success: function(response) {
						if(response.result !== 'success') {
							console.error(response.message);
							return;
						}
						
						if(response.data == -1) {
							$(".validateTips.error").show();
							$("#password-delete").val("").focus();
							return;
						}
						
						// 삭제가 된 경우
						$("#list-guestbook li[data-no='"   +  response.data + "']").remove();
						dialogDelete.dialog('close');
					}
				});
			},
			"취소": function() {
				$(this).dialog('close');
			}
		},
		close: function() {
			$(".validateTips.error").hide();
			$("#password-delete").val("");
			$("#hidden-no").val("");
		}
	});
	
	// 글삭제 버튼 Click 이벤트 처리(Live Event)
	$(document).on('click', "#list-guestbook li a", function(event) {
		event.preventDefault();
		
		let no = $(this).data("data-no");
		$("#hidden-no").val(no);
		dialogDelete.dialog('open');
	});
	
	// 최초 리스트 가져오기
	fetch();
});
</script>
</head>
<body>
	<div id="guestbook">
		<h1>방명록</h1>
		<form id="add-form" action="" method="post">
			<input type="text" id="input-name" placeholder="이름"> <input
				type="password" id="input-password" placeholder="비밀번호">
			<textarea id="tx-content" placeholder="내용을 입력해 주세요."></textarea>
			<input type="submit" value="보내기" />
		</form>
		<ul id="list-guestbook">

			<li data-no=''><strong>지나가다가</strong>
				<p>
					별루입니다.<br> 비번:1234 -,.-
				</p> <strong></strong> <a href='' data-no=''>삭제</a></li>

			<li data-no=''><strong>둘리</strong>
				<p>
					안녕하세요<br> 홈페이지가 개 굿 입니다.
				</p> <strong></strong> <a href='' data-no=''>삭제</a></li>

			<li data-no=''><strong>주인</strong>
				<p>
					아작스 방명록 입니다.<br> 테스트~
				</p> <strong></strong> <a href='' data-no=''>삭제</a></li>


		</ul>
	</div>

	<div id="dialog-delete-form" title="메세지 삭제" style="display: none">
		<p class="validateTips normal">작성시 입력했던 비밀번호를 입력하세요.</p>
		<p class="validateTips error" style="display: none">비밀번호가 틀립니다.</p>
		<form>
			<input type="password" id="password-delete" value="" class="text ui-widget-content ui-corner-all">
			<input type="hidden" id="hidden-no" value="">
			<input type="submit" tabindex="-1" style="position: absolute; top: -1000px">
		</form>
	</div>

</body>
</html>