'use strict';

(function(){
$(function(){





	// FANCYBOX
/*	if( $(".fancybox").length != 0 )
	$(".fancybox").fancybox({});*/
	$('[data-fancybox]').fancybox({
	
	});
	//WOW
	new WOW({
		offset: 30
	}).init();


	// AOS
	AOS.init({
	  offset: 0,
	  once: true,
	  duration: 1000,
	  delay: 100
	});
	setTimeout(function(){AOS.refresh()}, 300);


var header_status = false;



function phoneDap(){
	if ( checkView(992) )
		return;
	$(".copyright")
		.before( $(".social") )
}

function dropbtn(){
	$(".dropdown-lang .dropbtn").on("click", function(){
		$( $(this).siblings(".dropdown-content") ).toggleClass("active");
	});
	$(".dropdown-lang .dropdown-content").on("mouseleave", function(){
		$(this).removeClass("active");
	});
}


var statusSearchView = true;
$(".btn-search").on("click", function(){
	$(this).find("i")
		.toggleClass("fa fa-search")
		.toggleClass("fa fa-close");

	if(statusSearchView){
		statusSearchView = !statusSearchView;
		$(".nav-search-content")
			.find(".btn-search-sub")
			.add("input")
			.removeClass("hide").addClass("show");

		setTimeout(function(){ 
			$(".aSearch").addClass("in") 
		}, 1);

	}else{
		statusSearchView = !statusSearchView;
		$(".aSearch").removeClass("in");

		setTimeout(function(){
			$(".nav-search-content")
			.find(".btn-search-sub")
			.add("input")
			.addClass("hide").removeClass("show")
		}, 300);
	}

} )

dropbtn();



//RESIZE
$( window ).on("resize", function(e){

	// body

});
//SCROLL
var win = ( $(window) );
$( window ).on("scroll", function(e){
	$(".bg img").css("top",  "-"+(win.scrollTop()/6)+"px");

});








	});//$
}) (jQuery);











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
	if(!loadingStatus){
		//var he = Math.round( Math.sqrt( Math.pow( checkHeight(), 2 )+Math.pow( checkHeight(), 2 ) ) )
		//console.log( he );
		$(".black-div").css({
			"width": checkWidth()*2,
			"height": (checkHeight())+111,
			"margin-top": -+( ( (checkWidth())+111 )/2 ),
			"margin-right": -+( checkWidth() ),
			"top": checkHeight()/2,
			"right": ( (checkWidth())+111 )/2 ,
		});
		loadingStatus = !loadingStatus;
	}
	else{
		$(".loading-cover").css({
			"width": "",
			"height": "",
			"left": "",
			"top": ""
		});
		loadingStatus = !loadingStatus;
	}
	return "1"+(!loadingStatus);
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

