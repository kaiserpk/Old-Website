$('#nav').affix({
  offset: {
    top: $('header').height()-$('#nav').height() - 150
  }
});

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function() {
  $('body, html').animate({scrollTop: 0}, 1000);
});

$('.scroll-down').click(function() {
  $('body, html').animate({scrollTop: 649}, 1000);
});

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function() {
  var link = $(this).attr('href');
  var pos = $(link).offset().top + 90;
  $('body, html').animate({scrollTop: pos}, 800);
});
