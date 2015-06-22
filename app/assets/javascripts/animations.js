var mobileDevelopmentAnimateStop = false;
var photographyAnimateStop = false;
var videoProductionAnimateStop = false;
var graphicDesignAnimateStop = false;

function animateMobileDevelopment() {
	/* Feature Images */
	if(!mobileDevelopmentAnimateStop) {
		$('.mobiledevelopment').animate({
	    	left: '+=500'
	  	}, 1000, function() {
	  	});			
		mobileDevelopmentAnimateStop = true;
	}
}

function animatePhotography() {
	if(!photographyAnimateStop) {
		$('.photography').animate({
			left: '+=500'
		}, 1000, function(){}
		);
		photographyAnimateStop = true;
	}
}

function animateVideoProduction() {
	if(!videoProductionAnimateStop) {
		$('.videoproduction').animate({
			left: '-=500'
		}, 1000, function(){}
		);
		videoProductionAnimateStop = true;
	}
}

function animateGraphicDesign() {
	if(!graphicDesignAnimateStop) {
		$('.graphicdesign').animate({
			left: '+=500'
		}, 1000, function(){}
		);
		graphicDesignAnimateStop = true;
	}
}
