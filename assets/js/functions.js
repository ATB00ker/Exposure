/**************************
* Set page height
**************************/
setHeight();
function setHeight(){
$(".parallax-container").css("height",$(window).height());
$("#eventCompetition").css("height",$("#pic5 img").height()*0.4);
$("#photowalkPic1").css("height",$("#photowalkPic1 img").height());
$("#photowalkPic3").css("height",$("#photowalkPic1 img").height());
$("#photowalkPic2").css("height",$("#photowalkPic1 img").height());
	if ($(window).width() < 767){
		$("#eventCompetitionDescription").css("top",$("#pic5 img").height()+5);
	}
}
/**************************
* Navigation Bar Item List 
**************************/
	if ($(window).width() < 768){
	html='<li><a href="#about" class="mobBtn" data-toggle="collapse" data-target="#main-menu">About</a></li><li><a href="#events" class="mobBtn" data-toggle="collapse" data-target="#main-menu">Events</a></li><li><a href="#gallery" class="mobBtn" data-toggle="collapse" data-target="#main-menu">Gallery</a></li><li><a href="#contact" class="mobBtn" data-toggle="collapse" data-target="#main-menu">Contact</a></li>';
	}else{html='<li><a href="#about">About</a></li><li><a href="#events">Events</a></li><li><a href="#gallery">Gallery</a></li><li><a href="#contact">Contact</a></li>';}
$("#NavigationList").append(html);
/**************************
* Page Load Functions
**************************/
//$("html, body").animate({ scrollTop: 0.01});//Scroll Screen to top at reload
var reloadFlag = $(window).width();
$(window).resize(function() {
	setHeight();
if( reloadFlag > 768){
	if ( $(window).width() < 768){
		location.reload();}
}else {	
	if ( $(window).width() > 768){
		location.reload();}
	}
});
/**************************
* ViewPort Status Defination
**************************/
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};
$.fn.isInViewportMiddle = function() {
var windowHeight = $(window).height(),
gridTop = windowHeight * -0.1,
gridBottom = windowHeight * 1;
var thisTop = $(this).offset().top - $(window).scrollTop();
	if (thisTop > gridTop && (thisTop + $(this).height()) < gridBottom)
		return true;
	else { return false; }
};
/**************************
* Parallax Scroll Initiate
**************************/
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  });
})(jQuery);
/**************************
* Check Touch Screen
**************************/
var hasTouchCapabilities = 'ontouchstart' in window && (navigator.maxTouchPoints || navigator.msMaxTouchPoints);
var isTouchDevice = hasTouchCapabilities ? 'maybe':'nope';
$(window).one('touchstart mousemove click',function(e){
    if ( isTouchDevice == 'maybe' && e.type == 'touchstart' )
        isTouchDevice = 'yes';
});
/**************************
* Scroll Reveal
**************************/
window.sr = ScrollReveal({ reset: true });
sr.reveal('#aboutTitle');
sr.reveal('#eventCoverage', {distance: '200px', origin: 'left'});
sr.reveal('#eventCompetition', {distance: '200px', origin: 'right', viewOffset: {bottom: -150}});