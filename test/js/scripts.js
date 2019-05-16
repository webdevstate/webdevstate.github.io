$(document).ready(function() {
	
	/* scroll */
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	/* timer */
	function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").text( pad(hrs) + 'ч');
		$(".timer .minutes").text( pad(min) + 'м');
		$(".timer .seconds").text( pad(sec) + 'с');
		setTimeout( update, 200);
	}
	function pad(s) { return ('00'+s).substr(-2) }
	update();

});





$(window).on("load", function(){
	$(".gallery").owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 300,
		mouseDrag: true,
		pullDrag: true,
		dots: true,
		nav: false
	});
	$('.reviews').owlCarousel({
		loop:true,
		margin:10,
		autoHeight: true,
		navText: "",
		dots: false,
		responsive:{
			0:{
				items:1,
				nav:true,
			},
			659:{
				items:2,
				nav:true,
			},
			960:{
				items:3,
				nav:false,
				loop:false
			}
		}
	})
});


