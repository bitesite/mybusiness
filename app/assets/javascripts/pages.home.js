/*********************************************************************************************** HOME **/

/*
 * EVENT HANDLERS -----------------------
 */
$(function(){

	$("#services-link").click(function(){ 
		navigateTo(".services-section");
		return false;
	});
	$("#news-link").click(
		function(){ navigateTo(".news-section");
		return false;
	});
	$("#about-link").click(function(){ 
		navigateTo(".about-section");
		return false;
	});
	$("#contact-link").click(function(){ 
		navigateTo(".contact-section"); 
		return false;
	});
	
	$("#contact-submit").click(function(){
		submitContactForm();
		return false;
	});
	
	$(window).scroll(windowScroll);
	


});

function navigateTo(destination) {
	$('html,body').animate({scrollTop: $(destination).offset().top - 48},'slow');
}

/*
 * Fix navigation bar to top
 */
var mobileDevelopmentAnimateStop = false;
var photographyAnimateStop = false;
var videoProductionAnimateStop = false;
var graphicDesignAnimateStop = false;

function windowScroll() {
	
	var pixelsDown = $(window).scrollTop();
	
	/* Navigation Bar */
	if(pixelsDown > 500) {
		$(".navigation-bar").addClass("navigation-bar-fixed");
		$("body").addClass("fixed-nav");
	}
	else {
		$(".navigation-bar").removeClass("navigation-bar-fixed");
		$("body").removeClass("fixed-nav");
	}
		
	
	/* Feature Images */
	if(pixelsDown > 500 && !mobileDevelopmentAnimateStop) {
		$('.mobiledevelopment').animate({
	    	left: '-=500'
	  	}, 1000, function() {
	  	});			
		mobileDevelopmentAnimateStop = true;
	}
	
	if(pixelsDown > 700 && !photographyAnimateStop) {
		$('.photography').animate({
			left: '+=500'
		}, 1000, function(){}
		);
		photographyAnimateStop = true;
	}
	
	if(pixelsDown > 1100 && !videoProductionAnimateStop) {
		$('.videoproduction').animate({
			left: '-=500'
		}, 1000, function(){}
		);
		videoProductionAnimateStop = true;
	}
	
	if(pixelsDown > 1500 && !graphicDesignAnimateStop) {
		$('.graphicdesign').animate({
			left: '+=500'
		}, 1000, function(){}
		);
		graphicDesignAnimateStop = true;
	}
}

function submitContactForm() {
	var first_name = $("#first_name").val();
	var last_name = $("#last_name").val();;
	var email_address = $("#email_address").val();;
	var message = $("#message").val();;

	$("#contact-submit").html("<img src='/assets/ajax-loader.gif' class='ajax-loader' />");
	$("#contact-submit").attr('disabled', 'disabled');
	$("#contact-submit-info").html("");
	
	$.ajax({
		url:"/contact",
		type: "POST",
		data: { first_name : first_name, last_name : last_name, email_address : email_address, message : message },
		dataType: "json",
		success:function(data, textStatus, jqXHR){
			if(data.success) {
				$("#contact-submit").removeAttr('disabled');
				$("#contact-submit").html("SUBMIT");
				$("#contact-submit-info").html("Success! Thanks for contacting us!");
			}
		},
		error:function(jqXHR, textStatus, errorThrown){
			$("#contact-submit").removeAttr('disabled');
			$("#contact-submit").html("SUBMIT");
			$("#contact-submit-info").html("Sorry, there was an error trying to submit. If you continue to have trouble, please e-mail us at info@bitesite.ca");
		}
		
	});
}