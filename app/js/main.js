'use strict';

(function(){
$(function(){





	// FANCYBOX
/*	if( $(".fancybox").length != 0 )
	$(".fancybox").fancybox({});*/
	$('[data-fancybox]').fancybox({
	
	});


	// AOS
	AOS.init({
	  offset: 0,
	  once: true,
	  duration: 1000,
	  delay: 100
	});
	setTimeout(function(){AOS.refresh()}, 300);


var header_status = false;
var win = $( $(window) );
var bgImage = $( $(".bg img") );




//RESIZE
win.on("resize", function(e){

	// body

});
//SCROLL

win.on("scroll", function(e){
	bgImage.css("top",  "-"+(win.scrollTop()/10)+"px");
});








	});//$
}) (jQuery);









function phoneDap(){
	if ( checkView(992) )
		return;
	$(".copyright")
		.before( $(".social") )
}



function ajPost(u, d, s, c){
	$.ajax({
		type: 		"POST",
		url: 			u,
		data: 		d,
		success: 	s,
		statusCode: {
			404: function(){alert("Страница не найдена");}
		},
		complete: c
	});
}

function sendForm(th){

	this.onsubmit = function(e){ e.preventDefault();}
	var require = $(th).serialize();
	send(require+"&to="+to);

	$(th).find("input").val("");
}



 $.fn.fadeToggleBool = function( dura = 290 ){
 	var self = $( $(this) ),
 		 bool = self.css("display") == "none";

	self.fadeToggle({

		duration: dura,
		easing: "linear"

	});

	return bool;
 }
function modalShadow( el ){

	if( $(modal_shadow).length == 0 && el.jquery) 
		return;

	if( modal_shadow.fadeToggleBool() ){
		modal_shadow.on("click", function(){
			if(el.length != 0)
				el.trigger("click");
			});
	}else
		modal_shadow.off("click");
}


function scrolledDiv(el) {
	try{
	  var docViewTop = $(window).scrollTop(),
		docViewBottom = docViewTop + $(window).height(),
		elTop = $(el).offset().top,
		elBottom = elTop + $(el).height()/1.8;
	}catch(err){console.error();}

  	return ((elBottom <= docViewBottom) && (elTop >= docViewTop));
}

var loadingStatus = true;

function loadingCover(n){
	switch(n){
		case 0:
			$(".loading-cover").addClass("in");
			break;
			//$(".loading-cover").remoteClass("out");break;
		case 1:
			$(".loading-cover").addClass("out");
			$(".loading-cover").addClass("show").removeClass("hide");
			break;
			//$(".loading-cover").removeClass("in");break;
		default:
		setTimeout(function(){ 
			$(".loading-cover").addClass("hide").removeClass("show")
		}, 500);
			$(".loading-cover").removeClass("in");
			$(".loading-cover").removeClass("out");break;
	}
/*	if(!loadingStatus){
		$(".loading-cover").addClass("in");
		loadingStatus = !loadingStatus;
	}
	else{
		$(".loading-cover").css({
			"margin-right": ""
		});
		loadingStatus = !loadingStatus;
	}
	return "1"+(!loadingStatus);*/
}


function checkView( width ){
	return ($( document ).width() > width);
}
function checkWidth(){
	return $( document ).width();
}
function checkHeight(){
	return $( document ).height();
}

