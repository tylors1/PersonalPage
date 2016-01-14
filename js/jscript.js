
$(document).ready(function () {

	if ( $(window).width() > 800) {      
	  	//Add your javascript for large screens here 
	  	//Projects fade
	  	$(function() {
	  		$('#projects div .image1').hover(function() { 
	  			$('#projects div .imgDescrip1').fadeIn();
	  			$(this).addClass("on"); 
	  		}, function() { 
	  			$('div .imgDescrip1').fadeOut();
	  			$(this).removeClass("on");  
	  		});
	  	});

		$(function() {
			$('#projects div .image2').hover(function() { 
				$('#projects div .imgDescrip2').fadeIn();
				$(this).addClass("on"); 
			}, function() { 
				$('div .imgDescrip2').fadeOut();
				$(this).removeClass("on");  
			});
		});
	  	//click for top of page
	  	$(function() {
	  		var offset = 220;
	  		var duration = 800;
	  		jQuery(window).scroll(function() {
	  			if (jQuery(this).scrollTop() > offset + 570) {
	  				jQuery('.back-to-top').fadeIn(duration);
	  			} else {
	  				jQuery('.back-to-top').fadeOut(duration);
	  			}
	  		});

	  		jQuery('.back-to-top').click(function(event) {
	  			event.preventDefault();
	  			jQuery('html, body').animate({scrollTop: 0}, duration);
	  			return false;
	  		})
	  	});



	} 
	else {
  	//Add your javascript for small screens here 
	}

	//Upper page fade ins
	$('div.fadeIn').fadeIn(1000).removeClass('fadeIn');
	$('ul.fadeIn').fadeIn(800).removeClass('fadeIn');
	$('button.fadeIn').fadeIn(1400).removeClass('fadeIn');


	//fade in from left
    //check every time scrolled
    $(window).scroll(function(){

    	/* Check the location of each desired element */
    	$('.fadeLeft').each(function(i){

    		var bottom_of_object = $(this).offset().top + $(this).height();
    		var bottom_of_window = $(window).scrollTop() + $(window).height();

    		/* If the object is completely visible in the window, fade it it */
    		if(bottom_of_window > bottom_of_object){
    			if ( $(window).width() > 800) {      
					//Add your javascript for large screens here 
    				$(this)
    				.animate({left:0, opacity:"show"}, 1000);
				} 
				else {
					//Add your javascript for small screens here

					$(this)
    				.animate({left:$(window).width() / 3.75, opacity:"show"}, 1000); 
				}
    		}

    	}); 

    });

    //fade in from below
    //check every time scrolled
    $(window).scroll(function(){

    	/* Check the location of each desired element */
    	$('.fadeUp').each(function(i){

    		var bottom_of_object = $(this).offset().top + $(this).height();
    		var bottom_of_window = $(window).scrollTop() + $(window).height();

    		/* If the object is completely visible in the window, fade it it */
    		if(bottom_of_window > bottom_of_object){

    			$(this)
    			.animate({left:0, opacity:"show"}, 1000);
    		}

    	}); 

    });

	$('.toggle-button').on('click', function() {
	    slideout.toggle();
	});
});

