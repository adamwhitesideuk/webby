jQuery(document).ready(function($) {

	var $link = $(".back-top, a.header-branding");	
	$link.on('click', function(event) {
		event.preventDefault();
		$('body,html').animate({scrollTop:0}, 'slow');
	});
	
	var $branding = $(".header-branding");


	$(window).on('resize scroll', function() {
	    
	     if ($(window).width() > 767){    
	         
	         if ($(window).scrollTop() > 550) {                        
	              $branding.fadeIn("fast");
	         } else {
	              $branding.fadeOut("fast");
	         }
	     } else {
	         $branding.show();
	     }
	    
	});


	
	$(".nav li a").on('click', function(event){
		event.preventDefault();
		$.scrollTo( $(this).data('nav'), 1000,{ queue:false, offset:-110});	
	});

});
