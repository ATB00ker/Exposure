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