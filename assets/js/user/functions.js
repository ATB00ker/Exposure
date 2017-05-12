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
* Gallery Section
**************************/
var facebook = [];
// ----Fetch Photo from Facebook---- //
$.ajax({
	url: 'https://graph.facebook.com/exposureamity/albums?fields=picture.type(album),name&access_token=296257484143696%7C5fc04aadcc6fc9dd97a8d6f476148e81',
	jsonp: 'callback',
	dataType: 'jsonp',
	success: function( response ) {
		facebook = response;
		$(document).trigger("loadComplete");
	}
});
$(document).on("loadComplete", function(){
	dataIntegration();
// ----Initiate Golden Gallery function---- //
	$('#dg-container').gallery();
// ----Initiate Albums---- //
	$(".owl-carousel").owlCarousel({
		loop:true,
		margin: 20,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsive:{
			0:{items:1},
			320:{items:1.5},
			400:{items:1.7},
			450:{items:2},
			530:{items:2.4},
			600:{items:2.7},
			700:{items:3},
			800:{items:3.5},
			900:{items:4},
			1000:{items:4.5},
			1200:{items:5}
			1400:{items:6}
		}
	});
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
// ----Implimenting the swipe check---- //
var el = document.getElementById('dg-dynamicPosition')
swipedetect(el, function(swipedir){
    if (swipedir =='right')
        $('.dg-prev').trigger('click');
    else if (swipedir =='left')
        $('.dg-next').trigger('click');
})
/**************************
* Data Integration
**************************/
var facebookRemove = [];
var goldenCollection = [];
var goldenCollectionContainer = $('.dg-wrapper');
var facebookCollectionContainer = $('#facebookCollection');
function dataIntegration(){
	for (var x in goldenCollection){
		var html = '<a href="#"><img src="'+goldenCollection[x].img+'"><div>'+goldenCollection[x].text+'</div></a>';
		goldenCollectionContainer.append(html);
	}
	for (var x in facebook.data){
		html = '<div class="picsBox"><a href="https://facebook.com/'+facebook.data[x].id+'"><div class="coverpics"><img src="'+facebook.data[x].picture.data.url+'"></div><div class="picsText">'+facebook.data[x].name+'</div></a></div>';
		facebookCollectionContainer.append(html);
	}
}
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