$(function(){"use strict";$('a[href="#"]').click(function(e){e.preventDefault()}),$(".navbar-nav .nav-item").on("click",function(){$(this).addClass("active").siblings().removeClass("active"),$("html, body").animate({scrollTop:$("#"+$(this).data("value")).offset().top-80},1e3)}),$(window).scroll(function(){$(window).scrollTop()?$("nav").addClass("fx-top"):$("nav").removeClass("fx-top")}),$.fn.owlCarousel&&($(".welcome_slides").owlCarousel({items:1,loop:!0,autoplay:!0,smartSpeed:1500,nav:!0,navText:["<i class='pe-7s-angle-left'</i>","<i class='pe-7s-angle-right'</i>"]}),$(".app_screenshots_slides").owlCarousel({items:1,loop:!0,autoplay:!0,smartSpeed:800,margin:30,center:!0,dots:!0,responsive:{0:{items:1},480:{items:3},992:{items:5}}})),$.fn.footerReveal&&$("footer").footerReveal({shadow:!0,shadowOpacity:.3,zIndex:-101})});