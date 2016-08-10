$('#nav').affix({
  offset: {
    top: $('header').height()-$('#nav').height() - 150
  }
});

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav', offset: -60 })

/* brand fade in if navbar is near */
$(window).scroll(function() {
  if ( $(this).scrollTop() > 550 ) {
    $('.scroll-top').fadeIn(600);
  }
  else {
    $('.scroll-top').fadeOut(600);
  }
});

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(event) {
  $('body, html').stop().animate({scrollTop: 0}, 1000, 'easeInOutExpo');
  event.preventDefault();
});

$('.scroll-down').click(function(event) {
  $('body, html').stop().animate({scrollTop: 650}, 1500, 'easeInOutExpo');
  event.preventDefault();
});

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function(event) {
  var link = $(this).attr('href');
  var pos = $(link).offset().top + 60;
  $('body, html').stop().animate({scrollTop: pos}, 1500, 'easeInOutExpo');
  $('.navbar-collapse').collapse('hide');
  event.preventDefault();
});
