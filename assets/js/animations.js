/**************************
* Definations
**************************/
var navContainer = document.querySelector('header .container-fluid'),
	mobBtn = document.querySelector('.mobBtn'),
	eventCoveragePics = document.querySelector('#eventCoveragePics'),
	eventCoverageDescription = document.querySelector('#eventCoverageDescription'),
	pic1 = document.querySelector('#pic1'),
	pic2 = document.querySelector('#pic2'),
	pic3 = document.querySelector('#pic3'),
	pic4 = document.querySelector('#pic4'),
	pic5 = document.querySelector('#pic5 img'),
	eventCompetitionDescription = document.querySelector("#eventCompetitionDescription"),
	photowalkDescription = document.querySelector("#photowalkDescription"),
	photowalkPic1 = document.querySelector('#photowalkPic1'),
	photowalkPic2 = document.querySelector("#photowalkPic2"),
	photowalkPic3 = document.querySelector('#photowalkPic3'),
	logoExpand = document.querySelector('#logoExpand'),
	redBorder = document.querySelector('#redBorder'),
	eventCompetition = document.querySelector("#eventCompetition");
/**************************
* Animations
**************************/
var	navCollapseFlag=0;
						/*********** Navigation Bar ***********/
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	if(navCollapseFlag==0){
		if(scroll>$(window).height()-100){
			$(navContainer).css( "background", "rgba(0, 0, 0, 0.3)" );
		} else {
			$(navContainer).css( "background", "rgba(0, 0, 0, 0)" );
		}
	}
});
$(".mobBtn").on("click", function() {
	var scroll = $(window).scrollTop();
	if(navCollapseFlag==0){
	KUTE.to(mobBtn, {rotate: 45},{duration: 100}).start();
	KUTE.to(navContainer,{height:$(window).height()*1.2},{duration: 350}).start();
	$(navContainer).css( "background", "rgba(0, 0, 0, 0.3)" );
	navCollapseFlag=1;
	}else{KUTE.to(mobBtn, {rotate: 0},{duration: 100}).start();
	KUTE.to(navContainer,{height:93},{duration: 350}).start();
		if(scroll<$(window).height()-100)
		$(navContainer).css( "background", "rgba(0, 0, 0, 0)");
	navCollapseFlag=0;}
});
					/*********** Home Section ***********/
$("#logo").css( "opacity", "1" );
KUTE.to(logoExpand, {width:728}, {duration: 0.01}).start();
KUTE.to(logoExpand, {width:0}, {duration: 400, easing: 'easeInOutExpo', delay: 700}).start();
setTimeout(function(){$("#logo").css( "opacity", "0.7")}, 750);
$("#logo img").mouseenter(function(){
	KUTE.to(logoExpand, {width:728}, {duration: 200, easing: 'easeInOutExpo'}).start();
	$("#logo").css( "opacity", "1" );
});
$("#logo").mouseleave(function(){
	KUTE.to(logoExpand, {width:0}, {duration: 200, easing: 'easeInOutExpo'}).start();
	$("#logo").css( "opacity", "0.7" );
});
$("#logoExpand img").mouseleave(function(){
	KUTE.to(logoExpand, {width:0}, {duration: 200, easing: 'easeInOutExpo'}).start();
	$("#logo").css( "opacity", "0.7" );
});
					/*********** About Section ***********/
						/******* Event Coverage *******/
var animationEventCoverage = KUTE.to(pic4,{scale:0.0001},{duration:0.01})
						.chain(KUTE.to(pic3,{scale:0.0001},{duration:0.01})
						.chain(KUTE.to(pic2,{scale:0.0001},{duration:0.01})
						.chain(KUTE.fromTo(pic1,{translateY:0, scale:1.3},{translateY:-20, scale:1.3},{duration:2500, easing: 'easeOutQuad', delay: 1000})
						.chain(KUTE.to(pic2,{scale:1.3},{duration:0.01})
						.chain(KUTE.to(pic1,{scale:0.0001, translateY:0},{duration: 0.01, })
						.chain(KUTE.fromTo(pic2,{translateY:30, scale:1.3},{translateY:50, scale:1.3},{duration:2500, easing: 'easeOutQuad'})
						.chain(KUTE.to(pic3,{scale:1.3},{duration:0.01, })
						.chain(KUTE.to(pic2,{scale:0.0001, translateY:30},{duration: 0.01})
						.chain(KUTE.fromTo(pic3,{translateY:0, scale:1.3},{translateY:-30, scale:1.3},{duration:2500, easing: 'easeOutQuad'})
						.chain(KUTE.to(pic4,{translateY:20, scale:1.3},{duration:0.01, })
						.chain(KUTE.to(pic3,{scale:0.0001, translateY:0},{duration: 0.01})
						.chain(KUTE.fromTo(pic4,{translateY:20, scale:1.3},{translateY:45, scale:1.3},{duration:2500, easing: 'easeOutQuad'})
						.chain(KUTE.to(pic1,{scale:1.3},{duration:0.0001, })
						.chain(KUTE.to(pic4,{scale:0.0001, translateY:0},{duration: 0.01})
						))))))))))))));
var eventCoverageFlag = false;
$(window).scroll(function(){
	if($(eventCoverageDescription).isInViewport() && eventCoverageFlag==false) {
		eventCoverageFlag=true;
		KUTE.to(pic1,{scale:1.3},{duration:1000, easing: 'easingBackInOut'}).start();
		eventCoverage();
		setInterval(eventCoverage, 11250);
		KUTE.to(eventCoverageDescription, {color: '#000'}).start();
	}
});
function eventCoverage() {
	animationEventCoverage.start();
}
						/******* Event Competition *******/
var eventCompetitionFlag = false;
$(window).scroll(function(){
	if($(eventCompetitionDescription).isInViewport()){
		if(eventCompetitionFlag==false){
		eventCompetitions();
		setInterval(eventCompetitions, 1450);
		eventCompetitionFlag=true;	
		}
		KUTE.to(eventCompetitionDescription, {color: '#000'}).start();
	}
	else{KUTE.to(eventCompetitionDescription, {color: '#A8A8A8'}).start();}
});
function eventCompetitions() {
	KUTE.to(pic5, {scale:1.05},{duration:100})
		.chain(KUTE.to(pic5, {scale:1.02},{duration:100})
		.chain(KUTE.to(pic5, {scale:1.05},{duration:100})
		.chain(KUTE.to(pic5, {scale:1},{duration:400})
		))).start();
}
						/******* PhotoWalk Section *******/
var photowalkFlag = false;
KUTE.fromTo(photowalkPic1,{opacity: 1, left: 100}, {opacity: 0, left: 0}, {duration: 100}).start();
KUTE.fromTo(photowalkPic3,{opacity: 1, left: -100}, {opacity: 0, left: 0}, {duration: 100}).start();
$(photowalkPic2).addClass("shake-slow shake-constant");
$(window).scroll(function(){
	if($(photowalkDescription).isInViewportMiddle()){
		if(photowalkFlag==false){
			$(photowalkPic2).removeClass("shake-slow shake-constant");
			KUTE.to(photowalkDescription, {color: '#000'}, {duration: 100}).start();
			KUTE.fromTo(photowalkPic1,{opacity: 0, left: 100}, {opacity: 1, left: 0}, {duration: 100}).start();
			KUTE.fromTo(photowalkPic3,{opacity: 0, left: -100}, {opacity: 1, left: 0}, {duration: 100}).start();
			if($(window).width() > 624)
			$(photowalkDescription).css( "fontSize", "+=4px" );
			photowalkFlag = true;
		}
	} else {
		if(photowalkFlag==true){
			$(photowalkPic2).addClass("shake-slow shake-constant");
			KUTE.fromTo(photowalkPic1,{opacity: 1, left: 100}, {opacity: 0, left: 0}, {duration: 100}).start();
			KUTE.to(photowalkDescription, {color: '#A8A8A8'}, {duration: 100}).start();
			KUTE.fromTo(photowalkPic3,{opacity: 1, left: -70}, {opacity: 0, left: 0}, {duration: 100}).start();
			if($(window).width() > 624)
			$(photowalkDescription).css( "fontSize", "-=4px" );
			photowalkFlag = false;				
		}	
	}
});
$(photowalkPic2).mouseenter(function(){
	if(photowalkFlag == false) {
		$(photowalkPic2).removeClass("shake-slow shake-constant");
		KUTE.to(photowalkDescription, {color: '#000'}, {duration: 100}).start();
		KUTE.fromTo(photowalkPic1,{opacity: 0, left: 100}, {opacity: 1, left: 0}, {duration: 100}).start();
		KUTE.fromTo(photowalkPic3,{opacity: 0, left: -100}, {opacity: 1, left: 0}, {duration: 100}).start();
		if($(window).width() > 624)
		$(photowalkDescription).css( "fontSize", "+=4px" );
		photowalkFlag = true;	
	}
});
$("#photowalk").mouseleave(function(){
	if(photowalkFlag == true) {
		$(photowalkPic2).addClass("shake-slow shake-constant");
		KUTE.fromTo(photowalkPic1,{opacity: 1, left: 100}, {opacity: 0, left: 0}, {duration: 100}).start();
		KUTE.to(photowalkDescription, {color: '#A8A8A8'}, {duration: 100}).start();
		KUTE.fromTo(photowalkPic3,{opacity: 1, left: -70}, {opacity: 0, left: 0}, {duration: 100}).start();
		$(photowalkDescription).css( "fontSize", "-=4px" );
		if($(window).width() > 624)
		photowalkFlag = false;
	}
});

					/*******Internal Competition Section *******/
var borderFlag = false;
$("#detectTopRight").mouseenter(function(){
	if(borderFlag==false){
		KUTE.to(redBorder,{left: 100, top: -15}, {duration:300, easing: 'easingCubicOut'}).start();
		borderFlag = true;
	} else
		KUTE.to(redBorder,{left: 100, top: -15}, {duration:2500, easing: 'easingCubicOut'}).start();
});
$("#detectTopCenter").mouseenter(function(){
	if(borderFlag==false){
		KUTE.to(redBorder,{left: 50, top: -15}, {duration:300, easing: 'easingCubicOut'}).start();
		borderFlag = true;
	} else
		KUTE.to(redBorder,{left: 50, top: -15}, {duration:2500, easing: 'easingCubicOut'}).start();
});
$("#detectTopLeft").mouseenter(function(){
	if(borderFlag==false){
		KUTE.to(redBorder,{left: 0, top: -15}, {duration:300, easing: 'easingCubicOut'}).start();
		borderFlag = true;
	} else
		KUTE.to(redBorder,{left: 0, top: -15}, {duration:2500, easing: 'easingCubicOut'}).start();
});
$("#detectBottomRight").mouseenter(function(){
	if(borderFlag==false){
		KUTE.to(redBorder,{left: 100, top: 50}, {duration:300, easing: 'easingCubicOut'}).start();
		borderFlag = true;
	} else
		KUTE.to(redBorder,{left: 100, top: 50}, {duration:2500, easing: 'easingCubicOut'}).start();
});
$("#detectBottomCenter").mouseenter(function(){
	if(borderFlag==false){
		KUTE.to(redBorder,{left: 50, top: 50}, {duration:300, easing: 'easingCubicOut'}).start();
		borderFlag = true;
	} else
		KUTE.to(redBorder,{left: 50, top: 50}, {duration:2500, easing: 'easingCubicOut'}).start();
});
$("#detectBottomLeft").mouseenter(function(){
	if(borderFlag==false){
		KUTE.to(redBorder,{left: 0, top: 50}, {duration:300, easing: 'easingCubicOut'}).start();
		borderFlag = true;
	} else
		KUTE.to(redBorder,{left: 0, top: 50}, {duration:2500, easing: 'easingCubicOut'}).start();
});
$("#internalCmpt").mouseleave(function(){
		KUTE.to(redBorder,{left: 40, top: 10}, {duration:100, easing: 'easeOutQuad', delay: 2500}).start();
		borderFlag = false;
});
/**************************
* Navigation Bar Hover Sound
**************************/
var audio = document.getElementsByTagName("audio")[0];
$(".navbar-nav>li>a").mouseenter(function(){audio.play();});