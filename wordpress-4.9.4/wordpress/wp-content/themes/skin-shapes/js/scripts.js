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
        template: '<div class="caption-container"><a href="{{link}}"><img src="{{image}}"><p class="instaCaption" style="color: #fff !important;"><span>@skinshapes: </span>"{{caption}}"</p></a></div>',
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
				autoplaySpeed: 4000,
				infinite: true,
						responsive: [
						{
						  breakpoint: 576,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: true,
							dots: false,
							autoplay: false
						  }
						}]
			  });
			}
 		})
 	bigfeed.run();


//script to show and hide instagram caption on hover

/*
function removeCaption(e) {
	const instaCaption = this.querySelector('.instaCaption');
	if(!instaCaption) return;
	instaCaption.classList.toggle('active');
}

window.setTimeout(function(){
	const photos = document.querySelectorAll('.caption-container');
	var checkExist = setInterval(function() {
		if (photos.length) {
		photos.forEach(instaCaption => instaCaption.addEventListener('mouseover', removeCaption));
		}
	}, 100);
}, 1000);
*/


var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
	var menu = document.getElementById("wrapper-navbar");
	if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
		   if (st > lastScrollTop){
			   menu.classList.remove('Scroll-up');
			   menu.classList.add('Scroll-down');
		   } else {
			  menu.classList.remove('Scroll-down');
			  menu.classList.add('Scroll-up');
		   }
		   lastScrollTop = st;
	}

} , false);


    



	
	
	
