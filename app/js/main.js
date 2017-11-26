'use strict';


(function(){
$(function(){





	// FANCYBOX
	if( $('[data-fancybox]').length != 0 )
		$('[data-fancybox]').fancybox({});

	// WOW
	$(".a-animated a").map(function(i, el){
		$(el).attr({
					"data-wow-duration": "1s",
					"data-wow-delay": "1s"});
		$(el).addClass("wow").addClass("fadeIn");
	});
	$(".a-animated-short a").map(function(i, el){
		$(el).attr({
					"data-wow-duration": "1s",
					"data-wow-delay": "0.5s"});
		$(el).addClass("wow").addClass("fadeIn");
	});
	$(".a-animated-long a").map(function(i, el){
		$(el).attr({
					"data-wow-duration": "1s",
					"data-wow-delay": "1s"});
		$(el).addClass("wow").addClass("fadeIn");
	});
	new WOW({
		offset: 30,
		delay: 300
	}).init();

	// CAROUSELS
	var arrowStyle = { 
		  x0: 10,
		  x1: 60, y1: 50,
		  x2: 60, y2: 45,
		  x3: 15
		}
	var carouselServ = $('.technologies-carousel .carousel-content').flickity({
		arrowShape: arrowStyle,
		//percentPosition: true,
		pageDots: false,
		autoPlay: false,
		draggable: !checkView(991),
		setGallerySize: true,
		cellAlign: 'center',
		contain: true,
		initialIndex: 2
	});


var header_status = false;
var filterObjectStatus = false;
var win = $( $(window) );
var bgImage = $( $(".bg img") );



	$(".cat-header").hover(function(){
		var self = this;
		$(self).closest(".objects-cat").addClass("in");
		$(self).siblings("ul").removeClass("hide");
		$(".objects-cat").on("mouseleave", function(){
			setTimeout( function(){ 
				$(self).closest(".objects-cat").removeClass("in");
				$(self).siblings("ul").addClass("hide");
			}, 300);
		})
	}, function(){

	})
//RESIZE
win.on("resize", function(e){

	// body

});
//SCROLL

win.on("scroll", function(e){
	bgImage.css("top",  "-"+(win.scrollTop()/30)+"px");
});
win.on("popstate", function(e){
	console.log(this);
})
var header_content = $(".header-content");
$(".min-navbar").append( header_content.clone() );

//-ВКЛЮЧЕНИЕ ЭКРАНА ЗАГРУЗКИ ПРИ ПЕРЕХОДЕ
$(".aLoad").on("click", "a", function(e){
	if( !/#/.test(this.href) ){
		var self = this;
		e.preventDefault();
		loading.clickObject = self;
		loading.in( self );
	}
});

window.loading = {

	loadingCover: $( ".loading-cover" ),
	loadingContent: $( ".loading-content" ),
	loadingLogo: $( "#overlay-logo" ),
	status: false,
	content: "",
	href: "",
	back: "",
	forward: "",
	clickObject: Object,

	checkHrefContent: function (){
		this.content.trim().length === 0 ?
			$(this.loadingLogo).removeClass("hide")
		:
			$(this.loadingLogo).addClass("hide")
			return true;
		
		
	},


	in: function( objHref ){
		var text = $(objHref).text();
		var href = objHref.href;
		var dataText = $(objHref).attr("data-text");
		if ( typeof dataText != "undefined" )
			text = dataText;
		this.clickObject = objHref;
		this.content = text;
		this.href = href;

		this.checkHrefContent() ? 
			$(this.loadingContent).text(text) 
		: 
			$(this.loadingContent).text("")
		
		var lc = $( this.loadingCover );
		lc.removeClass("hide");

		setTimeout(function(){ 
			lc.removeClass("in");
		}, 10)

		this._go( href );
	},


	out: function(){
		var lc = $( this.loadingCover );

		lc.addClass("out");

		setTimeout(function(){ 
			lc.addClass("hide")
				.addClass("in")
				.removeClass("out");
		}, 800)
		this.status = !this.status;

	},


	_go: function( path ){
		setTimeout(function(){
			location.assign( path );
		}, 600)

	}



}
		$( window, document ).on( "load", function(){

		});
		if(history.length == sessionStorage.historyState){
				loading.out();
				console.log( "Historyonload" );
		}else if ( !loading.status ) {
				loading.out();
				//ДОДЕЛАТЬ
		}
		sessionStorage.historyState = history.length;
		

	});//$
}) (jQuery);

console.log( history, sessionStorage.historyState );

window.onload = function (){
	try{
		if ( !loading.status ){
			loading.out();
			console.log( "onload" );
		}
	}catch(e){}
}


function statusHome( bool ){
	var statusAttr = $( $("[data-index]") );
	if ( statusAttr.length <= 0)
		return;
	if( statusAttr.attr("data-index") == "true" )
		statusAttr.removeClass("hide");
	return statusAttr;
}









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







function checkView( width ){
	return ($( document ).width() > width);
}
function checkWidth(){
	return $( document ).width();
}
function checkHeight(){
	return $( document ).height();
}

