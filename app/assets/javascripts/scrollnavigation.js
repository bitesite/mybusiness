$(function(){
	$(window).scroll(windowScroll);
	$(".nav-link").click(function(){ 
		navigateTo($(this).attr("destination"));
		return false;
	});
});

function navigateTo(destination) {
	$('html,body').animate({scrollTop: $(destination).offset().top - 43},'slow');
	$(".mobile-menu.nav-links").slideUp(200);
}

/*
 * Fix navigation bar to top
 */


function windowScroll() {
	var scrollTolerance = 1;
	var pixelsDown = $(window).scrollTop();
	
	/* Calculate Nav Bar Height */
	var navBarHeight = 0;
	if($(".navigation-bar")) {
		navBarHeight = $(".navigation-bar").height();
	}
	
	/* Highlighted Nav */
	if($(window).scrollTop() + $(window).height() == $(document).height()) { highlightNavLink("#contact-link"); }
	else if (pixelsDown > $(".contact-section").offset().top - navBarHeight - scrollTolerance) { highlightNavLink("#contact-link"); }
	else if (pixelsDown > $(".about-section").offset().top - navBarHeight - scrollTolerance) { highlightNavLink("#about-link"); }
	else if (pixelsDown > $(".news-section").offset().top - navBarHeight - scrollTolerance) { highlightNavLink("#news-link"); }
	else if(pixelsDown > $(".services-section").offset().top - navBarHeight - scrollTolerance) { highlightNavLink("#services-link"); }
	else { highlightNavLink("#"); }
		
	if(pixelsDown > 150) {
		$(".navigation-bar img.logo").addClass("visible");
	}
	else {
		$(".navigation-bar img.logo").removeClass("visible");
	}
}

function highlightNavLink(id) {
	$(".nav-links a").removeClass("nav-selected");
	$(id).addClass("nav-selected");
}

