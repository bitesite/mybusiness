/**************************************************** PORTFOLIO ***/


/*
 * EVENT HANDLERS -----------------------
 */

$(function(){	
	$(".portfolio-item").click(function(){
		positionDialog();
		togglePortfolioDialog($(this).data("title"));
		return false;
	});

	$(".portfolio-item-photos").click(function(){
		positionDialog();
		togglePhotosDialog($(this).data("title"));
		return false;
	});

	$(".close-dialog-link").click(function(e){
		togglePortfolioDialog($(this).data("title"));
		return false;
	});

	$(".next-photo-link").click(function(){
		loadNextPhoto($(this).data("category"));
		return false;
	});

	$(".prev-photo-link").click(function(){
		loadPrevPhoto($(this).data("category"));
		return false;
	});
});

/* 
 * positionAndSizePortfolioDialog - position dialog and size it
 */
function positionDialog() {
	var _top = $("body").scrollTop() + 100 + "px";
	$('.modal-dialog-body').css('margin-top', _top);
}


/*
 * togglePortfolioDialog - show/hide dialog
 */
function togglePortfolioDialog(title){	
	
	/* When Closing the Video Dialogs, in case the user doesn't press stop, remove the video tag */
	if (title == "northstar-video") {
		if ($("#" + title).is(':visible')) {
			$("#vimeo_northstar").html("");
		}
		else {
			ihtml = '<iframe src="http://player.vimeo.com/video/24576453?title=0&amp;byline=0&amp;portrait=0" width="400" height="300" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe><p><a href="http://vimeo.com/24576453">NorthStar Utilities Solutions Commercial</a> from <a href="http://vimeo.com/user4962983">Casey Li</a> on <a href="http://vimeo.com">Vimeo</a>.</p>';
			$("#vimeo_northstar").html(ihtml);
			
		}
	}
	
	/* When Closing the Video Dialogs, in case the user doesn't press stop, remove the video tag */
	if (title == "spy-am-i-video") {
		if ($("#" + title).is(':visible')) {
			$("#vimeo_spyami").html("");
		}
		else {
			ihtml = '<iframe src="http://player.vimeo.com/video/19447660" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> <p><a href="http://vimeo.com/19447660">Spy Am I teaser 1</a> from <a href="http://vimeo.com/user5908131">Going AFK Games</a> on <a href="http://vimeo.com">Vimeo</a>.</p>';
			$("#vimeo_spyami").html(ihtml);
			
		}
	}
	
	/* When Closing the Video Dialogs, in case the user doesn't press stop, remove the video tag */
	if (title == "teldio-video") {
		if ($("#" + title).is(':visible')) {
			$("#youtube_teldio").html("");
		}
		else {
			
			ihtml = '<iframe width="560" height="315" src="http://www.youtube.com/embed/BGJeQ6TMMlM" frameborder="0" allowfullscreen></iframe>';
			/*ihtml = '<object style="height: 385px; width: 640px"><param name="movie" value="http://www.youtube.com/v/obu86GMx1FU?version=3&feature=player_detailpage"><param name="allowFullScreen" value="true"><param name="allowScriptAccess" value="always"><embed src="http://www.youtube.com/v/obu86GMx1FU?version=3&feature=player_detailpage" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="640" height="360"></object>';*/
			$("#youtube_teldio").html(ihtml);
			
		}
	}
	
	$("#" + title).fadeToggle(400);
}

function togglePhotosDialog(title) {
	var startImage = getFilename(title) + "1.png";
	
	$(".prev-photo-link").data("category", title);
	$(".next-photo-link").data("category", title);
	
	$("#photos-dialog-body").data("photonumber", 1);
	$("#photos-counter").html("1 / " + getMaxPhotoNumber(title));
	$("#photos-dialog-body").html("<img class='portfolio-photo' src='assets/portfolio/" + startImage + "' />");
	$("#photos-dialog").fadeToggle(400);
}

function loadNextPhoto(category){
	var photonumber = $("#photos-dialog-body").data("photonumber");
	if(photonumber != getMaxPhotoNumber(category)) {
		photonumber = photonumber + 1;
	}
	loadPhoto(category, photonumber);
}

function loadPrevPhoto(category){
	var photonumber = $("#photos-dialog-body").data("photonumber");
	if(photonumber != 1) {
		photonumber = photonumber - 1;
	}
	loadPhoto(category, photonumber);
}

function loadPhoto(category, photonumber) {
	var nextImage = getFilename(category) + photonumber + ".png";
	$("#photos-dialog-body").data("photonumber", photonumber);
	$("#photos-counter").html(photonumber + " / " + getMaxPhotoNumber(category));
	$("#photos-dialog-body").html("<img class='portfolio-photo' src='assets/portfolio/" + nextImage + "' />");
}

function getMaxPhotoNumber(category) {
	var maxnumber = 1;
	switch(category) {
		case "weddingphotos":
			maxnumber = 34;
			break;
		case "eventphotos":
			maxnumber = 14;
			break;
		case "corporatephotos":
			maxnumber = 6;
			break;
		case "promos":
			maxnumber = 17;
			break;
		case "branding":
			maxnumber = 5;
			break;
	}
	return maxnumber;
}

function getFilename(category) {
	var filename = "";
	switch(category) {
		case "weddingphotos":
			filename = "wd";
			break;
		case "eventphotos":
			filename = "ev";
			break;
		case "corporatephotos":
			filename = "cp";
			break;
		case "promos":
			filename = "pr";
			break;
		case "branding":
			filename = "br";
			break;
	}
	return filename;
}
