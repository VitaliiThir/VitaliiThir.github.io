 $(document).ready(function () {
     "use strict";
     var pull = $("#mobile-navigation");
     var nav = $("#mobile-nav");
     $(pull).on("click", function (e) {
         e.preventDefault();
         $(nav).slideToggle();
         $(this).toggleClass('mobile-navigation--activ');
     });
     $(window).resize(function () {
         var w = $(window).width();
         if (w > 768) {
             nav.removeAttr('style');
         }
     });
     
     // CAROUSEL
     $("#top-slider").owlCarousel({
         singleItem: true,
         navigation: true,
         theme: "top-slider-theme",
         navigationText: ["",""],
         slideSpeed: 600
     });
 });
 $(document).click(function (event) {
     "use strict";
     if ($(event.target).closest("#mobile-navigation").length)
         return;
     $("#mobile-nav").slideUp("slow");
     event.stopPropagation();
 });
//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});
 // $('.hide').click(function () {
 //     "use strict";
 //     $(this).siblings("#mobile-nav").slideToggle("slow");
 //     return false;
 // });
