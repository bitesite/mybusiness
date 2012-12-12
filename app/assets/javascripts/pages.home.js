/*********************************************************************************************** HOME **/

/*
 * EVENT HANDLERS -----------------------
 */
$(function(){

	$("#whoareyou").click(function(){
		populateHomeDialog("whoareyou");
		toggleHomeDialog();
		return false;
	});

	$("#whoarewe").click(function(){
		populateHomeDialog("whoarewe");
		toggleHomeDialog();
		return false;
	});

	$("#getstarted").click(function(){
		populateHomeDialog("getstarted");
		toggleHomeDialog();
		return false;
	});

	$("#next_dialog_link").click(function(){
		populateHomeDialog($(this).data("next"));
		return false;
	});

	$(".close-dialog-link").click(function(e){
		toggleHomeDialog();
		return false;
	});
	
	$(window).scroll(windowScroll);

});

/*
 * Fix navigation bar to top
 */
function windowScroll() {
	
	var pixelsDown = $(window).scrollTop();
	
	if(pixelsDown > 500) {
		$(".navigation-bar").addClass("navigation-bar-fixed");
		$("body").addClass("fixed-nav");
	}
	else {
		$(".navigation-bar").removeClass("navigation-bar-fixed");
		$("body").removeClass("fixed-nav");
	}
	
	var webDesignShift = -100 + pixelsDown;
	var mobileDevelopmentShift = 800 - pixelsDown;
	var photographyShift = -1000 + pixelsDown;
	var videoProductionShift = 1400 - pixelsDown;
	var graphicDesignShift = -1700 + pixelsDown;
	
	if(webDesignShift > 10) {
		webDesignShift = 10;
	}
	if(mobileDevelopmentShift < 0) {
		mobileDevelopmentShift = 0;
	}
	if(photographyShift > 10) {
		photographyShift = 10;
	}
	if(videoProductionShift < 0) {
		videoProductionShift = 10;
	}
	if(graphicDesignShift > 10) {
		graphicDesignShift = 10;
	}
		
	$(".mobiledevelopment").css("left", mobileDevelopmentShift);
	$(".photography").css("left", photographyShift);
	$(".videoproduction").css("left", videoProductionShift);
	$(".graphicdesign").css("left", graphicDesignShift);
	
}


/*
 * populateDialog - populate body and header image
 */
function populateHomeDialog(title) {
	var header_image = getHeaderImage(title);
	if(header_image != "") {
		$("#info_header_image").html("<img src='" + header_image  +"' />");
	}
	else {
		$("#info_header_image").html("");
	}
	$("#info_body").html(getBody(title));
	$("#next_dialog_link").data("next", getNext(title));
	
	if(title == "getstarted") {
		$("#next_dialog_link").hide();
	}
	else {
		$("#next_dialog_link").show();
	}
}

/*
 * toggleDialog - show/hide dialog
 */
function toggleHomeDialog(){	
	$("#info_dialog").fadeToggle(400);
}

/*
 * getNext - retrieve the next title based on current title
 */
function getNext(title) {
	var next_title ="";
	if(title == "whoareyou") {
		next_title = "whoarewe";
	}
	else if(title == "whoarewe") {
		next_title = "getstarted";
	}
	else if(title == "getstarted") {
		next_title = "getstarted";
	}
	else {
		next_title = "";
	}
	return next_title;
}

/*
 * getHeaderImage - retrieve header image based on title
 */
function getHeaderImage(title) {
	var image ="";
	if(title == "whoareyou") {
		image = "/assets/whoareyouheader.png";
	}
	else if(title == "whoarewe") {
		image = "/assets/whoareweheader.png";
	}
	else if(title == "getstarted") {
		image = "/assets/getstartedheader.png";
	}
	else {
		image = "";
	}
	return image;
}

/*
 * getBody - retrieve body text based on title
 */
function getBody(title) {
	var body = "";
	if(title == "whoareyou") {
		body = "<p>Maybe you're a <b>small business</b> just starting out and are looking to promote your business " +
				   "online. Or maybe you're a <b>couple getting married</b> and you want to create a wedding website " +
				   "where all your guests can get the latest info about your special day. Or maybe you're hosting a <b>fundraiser</b> " +
				   "or <b>big event</b> and want to launch a web promotion." +
				   "</p><p>Whether you're technical or have never touched a computer before in your life and whatever your need " +
				   "is, BiteSite could be just what you're looking for.</p>";
	}
	else if(title == "whoarewe") {
		body = "<p>BiteSite is small Web Design and Web App company that believes in <b>simplicity</b>. Everything from our design " +
				   	"aesthetic to our delivery process is centered around this philosophy. We focus on building simple yet " +
					"elegant Web Sites and Web Applications for all types of customers.</p>" +
					"<p>We also offer a full range " +
					"of media services from <b><a href='/addons'>photography</a></b> to <b><a href='/addons'>video production</a></b> " +
					"to <b><a href='/addons'>graphic design</a></b> and <b>motion graphics</b> to make your web " +
					"presence truly one that stands out. " +
					"</p>";
	}
	else if(title == "getstarted") {
		body = "<p>Does BiteSite sound exactly like what you're looking for? Then you can get started today by looking " +
					"at our <b><a href='/packages'>flexible packages</a></b>. We have packages designed " +
					"for customers who want something up and running quick " +
					"to full-blown web applications. Our <b><a href='/addons'>add-ons</a></b> allow you to create the package that suits your perfectly.</p>" + 
					"<p>Click <b><a href='/packages'>here</a></b> to get started.</p>" + 
					"<p>Don't see what you're looking for? Then be sure to <b><a href='/contact'>contact us</a></b> " +
					"and we'll do our best to put together something that's right for you." +
					"</p>";
	}
	else {
		body = "We're sorry, there was an error loading this page.";
	}
	return body;
}