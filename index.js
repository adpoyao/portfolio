'use strict';

var mainNav = $('.nav-desktop');
$(window).scroll(function() {
  if ( $(this).scrollTop() > 550 ) {
    mainNav.addClass('main-nav-scrolled');
  }
  else {
    mainNav.removeClass('main-nav-scrolled');
  }
});