$(document).ready(function(){

	//When use clicks Google
	$("#page1").click(function(){
		window.location.href = "http://www.google.com";
	});
	
	//When use clicks Facebook
	$("#page2").click(function(){
		window.location.href = "http://www.facebook.com";
	});
	
	//When use clicks Youtube
	$("#page3").click(function() {
		window.location.href = "http://www.youtube.com";
	});
	
	$("#page4").click(function() {
		window.location.href = "mypage.html";
	});
	
	//Close everything else and open only the clicked link
	$("#resumeLink").click(function() {
		$("myResume").show("slow");
	});
});