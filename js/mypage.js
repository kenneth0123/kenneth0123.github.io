$(document).ready(function(){
	//MY PAGE JS
	
	$(".myResume").hide();
	$(".myAbout").hide();
	
	$("#hub").click(function() {
		windows.location.href= "index.html";
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