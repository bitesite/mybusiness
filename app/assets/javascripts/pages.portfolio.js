/**************************************************** PORTFOLIO ***/


/*
 * EVENT HANDLERS -----------------------
 */

$(function(){	
	$(".webdesign").click(function(){
		$(".webdesign-portfolio").slideDown(400);
	});
	
	$(".webdesign-portfolio-close").click(function(){
		$(".webdesign-portfolio").slideUp(400);
		return false;
	});
	
	$(".mobiledevelopment").click(function(){
		$(".mobiledevelopment-portfolio").slideDown(400);
	});
	
	$(".mobiledevelopment-portfolio-close").click(function(){
		$(".mobiledevelopment-portfolio").slideUp(400);
		return false;
	});
	
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
	var _top = $("body").scrollTop();
	
	/* IE Fix */
	if(_top == 0) {
		_top = (document.documentElement && document.documentElement.scrollTop) || 
		              document.body.scrollTop;
	}
	
	_top = _top + 100;
	_top = _top.toString() + "px";
	$('.modal-dialog-body').css('margin-top', _top);
}


/*
 * togglePortfolioDialog - show/hide dialog
 */
function togglePortfolioDialog(title){	
	
	/* When Closing the Video Dialogs, in case the user doesn't press stop, remove the video tag */
	if (title == "demo-reel-video") {
		if($("#" + title).is(':visible')) {
			$("#wistia_demo").html("");
		}
		else {
			ihtml = '<div id="wistia_c6ax7b28py" class="wistia_embed" style="width:640px;height:360px;" data-video-width="640" data-video-height="360"><object id="wistia_c6ax7b28py_seo" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" style="display:block;height:360px;position:relative;width:640px;"><param name="movie" value="http://embed-0.wistia.com/flash/embed_player_v2.0.swf?2013-01-16"></param><param name="allowfullscreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="bgcolor" value="#000000"></param><param name="wmode" value="opaque"></param><param name="flashvars" value="banner=true&controlsVisibleOnLoad=true&hdUrl%5Bext%5D=flv&hdUrl%5Bheight%5D=720&hdUrl%5Btype%5D=hdflv&hdUrl%5Burl%5D=http%3A%2F%2Fembed-0.wistia.com%2Fdeliveries%2Fa7837832b52b3d9e3ec942c8a1a406059369385e.bin&hdUrl%5Bwidth%5D=1280&mediaDuration=107.19&showVolume=true&stillUrl=http%3A%2F%2Fembed-0.wistia.com%2Fdeliveries%2F175a5959b6d605d736c4b9933e75654ffd3b127a.jpg%3Fimage_crop_resized%3D640x360&unbufferedSeek=true&videoUrl=http%3A%2F%2Fembed-0.wistia.com%2Fdeliveries%2F31dbfd624be098df45f26339a37181035f83339e.bin"></param><embed src="http://embed-0.wistia.com/flash/embed_player_v2.0.swf?2013-01-16" allowfullscreen="true" allowscriptaccess="always" bgcolor=#000000 flashvars="banner=true&controlsVisibleOnLoad=true&hdUrl%5Bext%5D=flv&hdUrl%5Bheight%5D=720&hdUrl%5Btype%5D=hdflv&hdUrl%5Burl%5D=http%3A%2F%2Fembed-0.wistia.com%2Fdeliveries%2Fa7837832b52b3d9e3ec942c8a1a406059369385e.bin&hdUrl%5Bwidth%5D=1280&mediaDuration=107.19&showVolume=true&stillUrl=http%3A%2F%2Fembed-0.wistia.com%2Fdeliveries%2F175a5959b6d605d736c4b9933e75654ffd3b127a.jpg%3Fimage_crop_resized%3D640x360&unbufferedSeek=true&videoUrl=http%3A%2F%2Fembed-0.wistia.com%2Fdeliveries%2F31dbfd624be098df45f26339a37181035f83339e.bin" name="wistia_c6ax7b28py_html" style="display:block;height:100%;position:relative;width:100%;" type="application/x-shockwave-flash" wmode="opaque"></embed></object></div>';
			$("#wistia_demo").html(ihtml);
		}
	}
	
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
