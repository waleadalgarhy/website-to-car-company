$(function (){
	"use strict";
	
	var winh = $(window).height(),
		upph =$(".upper-bar").innerHeight(),
		nav =$(".navbar").innerHeight()
	
	$(".carousel-item").height(winh - (upph + nav));


 
$(".fetaed ul li").on('click',function (){
					  
$(this).addClass('active').siblings().removeClass('active');
if($(this).data('class') ==="all"){
	$('.shifled .row .col-md').css('opacity','1')
}
	else{
		$('.shifled .row .col-md').css('opacity','.08')
		$($(this).data('class')).css('opacity','1');
	}


});					  
});