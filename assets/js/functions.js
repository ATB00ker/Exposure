/**************************
* Set page height
**************************/
setHeight();
function setHeight(){
$(".parallax-container").css("height",$(window).height());
$("#Boo").css("width",$(window).width());
$("#eventCompetition").css("height",$("#pic5 img").height()*0.4);
$("#photowalkPic1").css("height",$("#photowalkPic1 img").height());
$("#photowalkPic3").css("height",$("#photowalkPic1 img").height());
$("#photowalkPic2").css("height",$("#photowalkPic1 img").height());
	if ($(window).width() < 626){
		$("#eventCompetitionDescription").css("top",$("#pic5 img").height()+5);
		$("#photowalkPic2").css("top",$("#pic5 img").height());
		$("#photowalkDescription").css("top",($("#pic5 img").height() + $("#photowalkPic2 img").height()));
		$("#workshops").css("top",($("#pic5 img").height() + $("#photowalkPic2 img").height()+100));
		$("#internalCmpt").css("marginTop",$("#photowalkPic2 img").height()*1.9);
		$("#contactUs").css("marginTop",$("#photowalkPic2 img").height()*2 + $("#internalCmpt").height());
	}
}
/**************************
* Navigation Bar Item List 
**************************/
	if ($(window).width() < 624){
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
	if((reloadFlag+100 < $(window).width())||(reloadFlag-100 > $(window).width()))
		location.reload();
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
    if ( isTouchDevice === 'maybe' && e.type === 'touchstart' )
        isTouchDevice = 'yes';
});
/**************************
* Gallery Seection
**************************/
// ----Initiate Golden Gallery function---- //
$(function() {
	$('#dg-container').gallery();
});
// ----Fetch Photo from Facebook---- //
$.ajax({
	url: 'https://graph.facebook.com/exposureamity/albums?fields=cover_photo,name&access_token=296257484143696%7C5fc04aadcc6fc9dd97a8d6f476148e81',
	jsonp: 'callback',
	dataType: 'jsonp',
	success: function( response ) { console.log( response );}
});
/**************************
* Detect Swipe
**************************/
function swipedetect(el, callback){
  
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 100, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){};
  
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0];
        swipedir = 'none';
        dist = 0;
        startX = touchobj.pageX;
        startY = touchobj.pageY;
        startTime = new Date().getTime(); // record time when finger first makes contact with surface
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0];
        distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime; // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right'; // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down'; // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir);
        e.preventDefault();
    }, false)
}
var el = document.getElementById('dg-dynamicPosition')
swipedetect(el, function(swipedir){
    if (swipedir =='right')
        $('.dg-prev').trigger('click');
    else if (swipedir =='left')
        $('.dg-next').trigger('click');
})
/**************************
* Scroll Reveal
**************************/
window.sr = ScrollReveal({ reset: true });
sr.reveal('#aboutTitle');
sr.reveal('#eventCoverage', {distance: '200px', origin: 'left'});
sr.reveal('#eventCompetition', {distance: '200px', origin: 'right', viewOffset: {bottom: -150}});
sr.reveal('#photowalkPic2', {distance: '200px', origin: 'bottom',viewOffset: {top: -200}});
if($(window).width() > 450)
	sr.reveal('#workshops', {distance: '200px', origin: 'bottom',viewOffset: {top: -1000,bottom: 400}, scale: 1});
else
	sr.reveal('#workshops', {distance: '200px', origin: 'bottom',viewOffset: {top: -1000,bottom: 200}, scale: 1});
sr.reveal('#internalCmpt', {distance: '200px', origin: 'left'});
sr.reveal('.contactButtons', { duration: 1000 }, 50);
sr.reveal('.galleryHeader', { duration: 1000 });
sr.reveal('.dg-wrapper', { duration: 1000, viewOffset: {top: -200}});
sr.reveal('.dg-next', { duration: 1000, viewOffset: {top: 200, bottom: -400}});
sr.reveal('.dg-prev', { duration: 1000, viewOffset: {top: 200, bottom: -400}});