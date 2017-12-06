'use strict';

//LOCK NAV BAR WHEN SCROLLING
const mainNav = $('.nav-desktop');
const mainSlideshow = $('.header-slideshow-desktop');
$(window).scroll(function() {
  if ( $(this).scrollTop() > 528 ) {
    mainNav.addClass('main-nav-scrolled');
    mainSlideshow.addClass('hidden');
  }
  else {
    mainNav.removeClass('main-nav-scrolled');
    mainSlideshow.removeClass('hidden');
  }
});

// //FADE IN INTRO PICTURE (DESKTOP VIEW)
// function fadeIn(obj) {
//   $(obj).fadeIn(2000);
// }

//SEAMLESS TRANSITION TO #LINKS
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 750, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(':focus')) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });

//SLIDE TEXTS
