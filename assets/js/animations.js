/**************************
* GreenSock Control
**************************/
var navCollapseFlag=0;
(function($){
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if(scroll>$(window).height()-100){
		TweenLite.to(masthead, 2,{ backgroundColor:"rgba(0, 0, 0, 0.3)"});
		} else {
		TweenLite.to(masthead, 1,{ backgroundColor:"rgba(0, 0, 0, 0)"});
		}
	});
	$(".mobBtn").on("click", function() {
		if(navCollapseFlag==0){
		TweenLite.to(".mobBtn", 0.1, {rotation: "+=45"});
		TweenLite.to("header .container-fluid", 0.1, {backgroundColor:"rgba(0, 0, 0, 0.3)"});
		$("header .container-fluid").css("height",$(window).height());
		navCollapseFlag=1;
		}else{TweenLite.to(".mobBtn", 0.1, {rotation: "-=45"});
		TweenLite.to("header .container-fluid", 0.1, {backgroundColor:"rgba(0, 0, 0, 0)"});
		$("header .container-fluid").css("height","93px");
		navCollapseFlag=0;}
	});
})(jQuery);
/**************************
* Parallax Scroll Control
**************************/
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
/**************************
* ScrollReveal Control
	Useage Format:
		$(function(){
			$().addClass("animated");
			window.sr = ScrollReveal({origin:'bottom'});
			sr.reveal(".animated",{duration:2000});
		});
**************************/