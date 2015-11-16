/*********************************************************************************************** HOME **/

/*
 * EVENT HANDLERS -----------------------
 */
$(function(){
	$("#contact-submit").click(function(){
		submitContactForm();
		return false;
	});
		
	/* Pre-load Ajax loader */
	preload([
	    '/assets/ajax-loader.gif'
	]);

	$(document).on("click", ".mobile-menu-toggle", function(){
		if($(".mobile-menu.nav-links").is(":visible")) {
			$(".mobile-menu.nav-links").slideUp(300);
		}
		else {
			$(".mobile-menu.nav-links").slideDown(300);
		}
		return false;
	});
});


function submitContactForm() {
	var first_name = $("#first_name").val();
	var last_name = $("#last_name").val();
	var email_address = $("#email_address").val();
	var message = $("#message").val();
	var honey_pot = $("#a_comment_body").val();

	$("#contact-submit").html("Submitting...<img src='/assets/ajax-loader.gif' class='ajax-loader' />");
	$("#contact-submit").attr('disabled', 'disabled');
	$("#contact-submit-info").html("");
	
	$.ajax({
		url:"/contact",
		type: "POST",
		data: { first_name : first_name, 
				last_name : last_name, 
				email_address : email_address, 
				message : message, 
				honey_pot : honey_pot },
		dataType: "json",
		success:function(data, textStatus, jqXHR){
			if(data.success) {
				$("#contact-submit").removeAttr('disabled');
				$("#contact-submit").html("SUBMIT");
				
				$("#first_name").val("");
				$("#last_name").val("");
				$("#email_address").val("");
				$("#message").val("");
				$("#contact-submit-info").removeClass("contact-submit-error");
				$("#contact-submit-info").addClass("contact-submit-success");
				$("#contact-submit-info").html("Success! Thanks for contacting us!");
			}
			else {
				showContactSubmitError(data.message);
			}
		},
		error:function(jqXHR, textStatus, errorThrown){
			showContactSubmitError("");
		}
		
	});
}

function showContactSubmitError(message) {
	$("#contact-submit").removeAttr('disabled');
	$("#contact-submit").html("SUBMIT");
	$("#contact-submit-info").removeClass("contact-submit-success");
	$("#contact-submit-info").addClass("contact-submit-error");
	var general_error_message = "Sorry, there was an error trying to submit. If you continue to have trouble, please e-mail us at info@bitesite.ca";
	
	if(message != "") {
		$("#contact-submit-info").html(message);
	}
	else {
		$("#contact-submit-info").html(general_error_message);
	}
}

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

