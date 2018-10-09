(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      $("#mask-logo").addClass("dark-theme");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $("#mask-logo").removeClass("dark-theme");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    navbarCollapse();
    $('.fadein').each( function(i){
        
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
          
          $(this).animate({'opacity':'1'},2000);
              
      }
    })
  })

})(jQuery); // End of use strict

jQuery(function(){
  function random(n) {
      return Math.floor(Math.random() * n);
  }
  imageLoop('div#gov-logo-block-1 img');
  imageLoop('div#gov-logo-block-2 img');
  imageLoop('div#gov-logo-block-3 img');
  function imageLoop(selector){
    var transition_time = 1000;
    var waiting_time = 2000;
    var images = $(selector);
    var n = images.length;
    var current = random(n);
    images.hide();
    images.eq(current).show();
    
    var interval_id = setInterval(function () {
        images.eq(current).fadeOut(transition_time, function () {
            current = random(n);
            images.eq(current).fadeIn(transition_time);
        });
    }, 2 * transition_time + waiting_time);
  }
})