/*global $, alert, console */

$(function (){
  'use strict';


  $('a[href="#"]').click(function ($) {
    $.preventDefault()
  });
  
  // Navbar Active
  $('.navbar-nav .nav-item').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('value')).offset().top - 80
    }, 1000);
  });
  
  // Scroll 
  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $('nav').addClass('fx-top');
    } else {
      $('nav').removeClass('fx-top');
    }
 

  });

  // Carousel Active Code
  if ($.fn.owlCarousel) {
    $(".welcome_slides").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      smartSpeed: 1500,
      nav: true,
      navText: ["<i class='pe-7s-angle-left'</i>", "<i class='pe-7s-angle-right'</i>"]
    });
    $(".app_screenshots_slides").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      smartSpeed: 800,
      margin: 30,
      center: true,
      dots: true,
      responsive: {
      0: {
        items: 1
      },
      480: {
        items: 3
      },
      992: {
        items: 5
      }
      }
    });
  }
  

  // Footer Reveal Active Code
  if ($.fn.footerReveal) {
    $('footer').footerReveal({
      shadow: true,
      shadowOpacity: 0.3,
      zIndex: -101
    });
  }
  
});
