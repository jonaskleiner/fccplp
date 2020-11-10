$(function(){
	$(".img-responsive").not( ".logo-hero, #features" ).hover(
		function() {
		$( this ).animate( {opacity:0.35}, 300);
	}, function(){
		$( this ).animate( {opacity:1}, 400);
	});
});
