'use strict';

// FADE IN INTRO PICTURE (DESKTOP VIEW)
function fadeIn(obj) {
  $(obj).hide().fadeIn(2000);
}

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
        }, 650, function() {
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

//FADE: ABOUT
$(document).ready(function(){
  $('.divs div').each(function(e) {
    if (e !== 0)
      $(this).hide();
  });
  
  $('#next').click(function(){
    if ($('.divs div:visible').next().length !== 0)
      $('.divs div:visible').fadeOut(function(){
        $(this).next().fadeIn();
      });
    else {
      $('.divs div:visible').fadeOut(function(){
        $('.divs div:first').fadeIn();
      });
    }
    return false;
  });

  $('#prev').click(function(){
    if ($('.divs div:visible').prev().length !== 0)
      $('.divs div:visible').fadeOut(function(){
        $(this).prev().fadeIn();
      });
    else {
      $('.divs div:visible').fadeOut(function(){
        $('.divs div:last').fadeIn();
      });
    }
    return false;
  });
});


//FADE: PROJECT 1
$(document).ready(function(){
  $('.project-1 div').each(function(e) {
    if (e !== 0)
      $(this).hide();
  });
  
  $('#next-project-1').click(function(){
    if ($('.project-1 div:visible').next().length !== 0)
      $('.project-1 div:visible').fadeOut(function(){
        $(this).next().fadeIn();
      });
    else {
      $('.project-1 div:visible').fadeOut(function(){
        $('.divs div:first').fadeIn();
      });
    }
    return false;
  });

  $('#prev-project-1').click(function(){
    if ($('.project-1 div:visible').prev().length !== 0)
      $('.project-1 div:visible').fadeOut(function(){
        $(this).prev().fadeIn();
      });
    else {
      $('.project-1 div:visible').fadeOut(function(){
        $('.project-1 div:last').fadeIn();
      });
    }
    return false;
  });
});

//FADE: PROJECT 2
$(document).ready(function(){
  $('.project-2 div').each(function(e) {
    if (e !== 0)
      $(this).hide();
  });
  
  $('#next-project-2').click(function(){
    if ($('.project-2 div:visible').next().length !== 0)
      $('.project-2 div:visible').fadeOut(function(){
        $(this).next().fadeIn();
      });
    else {
      $('.project-2 div:visible').fadeOut(function(){
        $('.divs div:first').fadeIn();
      });
    }
    return false;
  });

  $('#prev-project-2').click(function(){
    if ($('.project-2 div:visible').prev().length !== 0)
      $('.project-2 div:visible').fadeOut(function(){
        $(this).prev().fadeIn();
      });
    else {
      $('.project-2 div:visible').fadeOut(function(){
        $('.project-2 div:last').fadeIn();
      });
    }
    return false;
  });
});

//FADE: PROJECT 3
$(document).ready(function(){
  $('.project-3 div').each(function(e) {
    if (e !== 0)
      $(this).hide();
  });
  
  $('#next-project-3').click(function(){
    if ($('.project-3 div:visible').next().length !== 0)
      $('.project-3 div:visible').fadeOut(function(){
        $(this).next().fadeIn();
      });
    else {
      $('.project-3 div:visible').fadeOut(function(){
        $('.divs div:first').fadeIn();
      });
    }
    return false;
  });

  $('#prev-project-3').click(function(){
    if ($('.project-3 div:visible').prev().length !== 0)
      $('.project-3 div:visible').fadeOut(function(){
        $(this).prev().fadeIn();
      });
    else {
      $('.project-3 div:visible').fadeOut(function(){
        $('.project-3 div:last').fadeIn();
      });
    }
    return false;
  });
});


//TOGGLE BETWEEN PHOTO PAGES
$('.go-to-page-1').on('click', event => {
  $('.photo-part-2').addClass('hidden');
  $('.photo-part-1').removeClass('hidden');
});

$('.go-to-page-2').on('click', event => {
  $('.photo-part-1').addClass('hidden');
  $('.photo-part-2').removeClass('hidden');
});

// Hamburger Menu
$(document).ready(function(){
  $('.hamburger').click(function(){
    // $('.nav-mobile').removeClass('hidden');
    $('.cross').removeClass('hidden');
    $('.hamburger').addClass('hidden');
    $('.nav-mobile').addClass('expand');
  });

  $('.cross').click(function(){
    $('.nav-mobile').removeClass('expand');
    $('.nav-mobile').addClass('expandable-nav');
    $('.cross').addClass('hidden');
    $('.hamburger').removeClass('hidden');
  });

  $('.mobile-select').click(function(){
    $('.nav-mobile').removeClass('expand');
    $('.nav-mobile').addClass('expandable-nav');
    $('.cross').addClass('hidden');
    $('.hamburger').removeClass('hidden');
  });
});