//Mobile menu open/ close and chaning the button
jQuery(document).ready(function(){
jQuery('.mobile-menu-toggle').click(function() {
	var jQuerymobileMenu = jQuery('.mobile-menu');
	var jQuerymenuToggle = jQuery('.menuButton i');
	if(jQuerymobileMenu.hasClass('inactive')) {
	   jQuerymobileMenu.removeClass('inactive').addClass('active');
	
	
	if(jQuerymenuToggle.hasClass('ion-navicon-round')) {
	   jQuerymenuToggle.removeClass('ion-navicon-round');
		jQuerymenuToggle.addClass('ion-close-round');
		
	   }
		else {
			console.log('eat-shit');
		}
	}
	else {
		 jQuerymobileMenu.removeClass('active').addClass('inactive'); jQuerymenuToggle.removeClass('ion-close-round');
		 jQuerymenuToggle.addClass('ion-navicon-round');	 
		}
							   
	
})});


//Slider carousel


//script to bring in instagram feed

 var bigfeed = new Instafeed({
        get: 'user',
	 	//get: 'tagged',
	 	//tagName: 'shop',
	 	userId: '3293670556',
	 	target: 'slider-container',
	 	clientId: 'f144b7bbf1414833a1f523eea96f9329',
        resolution: 'standard_resolution',
        template: '<div class="caption-container"><a href="{{link}}"><div><p class="insta-caption">"{{caption}}"</p></div><img src="{{image}}"></a></div>',
	    accessToken: '3293670556.f144b7b.6a19faba7c3447049aad844021b1d272',
        after: function () {
       		jQuery('.slider-container').slick({
				arrows: true,
				centerMode: true,
				draggable: true,
				variableWidth: true,
				centerPadding: '10px',
				arrows: false,
				adaptiveHeight: true,
				swipeToSlide: true,
				slidestoshow: 1,
				slidesToScroll: 1,
  				autoplay: true,
				autoplaySpeed: 2000,
				infinite: true
			  });
			}
 		})
 	bigfeed.run();

 	


    


	
	
	
