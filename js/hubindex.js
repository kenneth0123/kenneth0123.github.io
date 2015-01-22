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
		
		//show Interests upon loading page
		$(".myResume").hide(1000);
		$(".myAbout").hide(1000);
	});
	
	//Close everything else and open only the clicked link
	$("#resumeLink").click(function() {
		$(".myResume").show(1000);
		$(".myInterest").hide(1000);
		$(".myAbout").hide(1000);
	});
	
	$("#aboutLink").click(function() {
		$(".myResume").hide(1000);
		$(".myInterest").hide(1000);
		$(".myAbout").show(1000);
	});
	
	$("#interestLink").click(function() {
		$(".myResume").hide(1000);
		$(".myInterest").show(1000);
		$(".myAbout").hide(1000);
	});
});