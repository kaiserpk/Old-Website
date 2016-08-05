$('#nav').affix({
  offset: {
    top: $('header').height()-$('#nav').height() - 150
  }
});

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* brand fade in if navbar is near */
$(window).scroll(function() {
  if ( $(this).scrollTop() > 600 ) {
    $('.scroll-top').fadeIn();
  }
  else {
    $('.scroll-top').fadeOut();
  }
});

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function() {
  $('body, html').animate({scrollTop: 0}, 1000);
});

$('.scroll-down').click(function() {
  $('body, html').animate({scrollTop: 650}, 1500);
});

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function() {
  var link = $(this).attr('href');
  var pos = $(link).offset().top + 90;
  $('body, html').animate({scrollTop: pos}, 800);
});
