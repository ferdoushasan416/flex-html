(function ($) {
"use strict";

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

 // Accordion Scripts
    
        $('.accordion-title').eq(0).addClass('active');
        $('.accordion-content').eq(0).slideDown();

        $(".accordion-title").on('click', function (){
            
            var trigger = $(this);
            var hasClass = trigger.hasClass('active');

            $('.accordion-title').removeClass('active');
            $('.accordion-title').next().slideUp();
            
            if(hasClass) {
                trigger.removeClass('active');
                trigger.next().slideUp();
            }

            else {
                trigger.addClass('active');
                trigger.next().slideToggle();          
            }

        });

      
      

$(document).ready(function(){
    $('.text-carousel-wrap').slick({
      autoplay:true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      centerMode: true,
      focusOnSelect: true,
      loop:true,
      dots:false,
      arrows:false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
});


// WOW active
new WOW().init();


})(jQuery);