$(document).ready(function(){
	//MY PAGE JS
	
	//Start with about content
	$(".myResume").hide();
	$(".myInterest").hide();
	
	//GO back to home page
	$("#hub").click(function() {
		window.location.href= "index.html";
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