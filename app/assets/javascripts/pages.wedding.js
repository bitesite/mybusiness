$(function(){
	$("#wedding-contest-submit").click(submitWeddingContestForm);
});

function submitWeddingContestForm() {
	var first_name = $("#contestant_first_name").val();
	var last_name = $("#contestant_last_name").val();
	var email = $("#contestant_email").val();
	var wedding_date = $("#contestant_wedding_date").val();
	var wedding_location = $("#contestant_wedding_location").val();
	var message = $("#contestant_message").val();
	var newsletter = false;
	if($("#contestant_newsletter").prop('checked') == true){
		newsletter = true;
	}
	
	$("#wedding-contest-submit").html("Submitting...<img src='/assets/ajax-loader.gif' class='ajax-loader' />");
	$("#wedding-contest-submit").attr('disabled', 'disabled');
	$("#wedding-contest-submit-info").html("");
	
	$.ajax({
		url : "/wedding_contest_submit",
		dataType : "json",
		data : { 	first_name : first_name, 
					last_name : last_name, 
					email : email, 
					wedding_date : wedding_date, 
					wedding_location : wedding_location, 
					message : message,
					newsletter : newsletter },
		success : function(data, textStatus, jqXHR) {
			if(data.success) {
				showSuccessfulWeddingContestSubmit();
			}
			else {
				showFailedWeddingContestSubmit();
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			showFailedWeddingContestSubmit();
		}
	});

	return false;
}
function showSuccessfulWeddingContestSubmit() {
	$("#wedding-contest-submit").removeAttr('disabled');
	$("#wedding-contest-submit").html("Enter Contest");
	$("#wedding-contest-submit-info").removeClass("contact-submit-error");
	$("#wedding-contest-submit-info").addClass("contact-submit-success");
	$("#wedding-contest-submit-info").html("Success! You have been entered into the contest!");
	clearWeddingContestForm();
}

function showFailedWeddingContestSubmit() {
	$("#wedding-contest-submit").removeAttr('disabled');
	$("#wedding-contest-submit").html("Enter Contest");
	$("#wedding-contest-submit-info").removeClass("contact-submit-success");
	$("#wedding-contest-submit-info").addClass("contact-submit-error");
	$("#wedding-contest-submit-info").html("Sorry, there was an error trying to submit. If you continue to have trouble, please e-mail us at info@bitesite.ca");
}

function clearWeddingContestForm() {
	$("#contestant_first_name").val("");
	$("#contestant_last_name").val("");
	$("#contestant_email").val("");
	$("#contestant_wedding_date").val("");
	$("#contestant_wedding_location").val("");
	$("#contestant_message").val("");
}