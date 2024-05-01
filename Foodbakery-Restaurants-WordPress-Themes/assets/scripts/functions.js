jQuery(document).ready(function () {
/* Main Navigation Slicknav Function Start */
    if (jQuery(".top-nav-inner>ul").length != '') {
        jQuery('.top-nav-inner>ul').slicknav({
            prependTo: '.top-nav-inner'
        });
    }
    if (jQuery(".slicknav_menu").length != '') {
        jQuery(document).mouseup(function (e) {
            var container = jQuery(".slicknav_menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                jQuery('.top-nav-inner>ul').slicknav('close');
            }
        });
    }
  });
/* -------------------------------
	* Testimonials slider
---------------------------------- */

$('.testimonial-slides').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll:3,
  adaptiveHeight: true,
	responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$(window).scroll(function(){
    if ($(window).scrollTop() >= 1) {
       $('header').addClass('fixed');
    }
    else {
       $('header').removeClass('fixed');
    }
});

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#myButton").offset().top
    }, 1000);
});

$("#button1").click(function() {
  $('html, body').animate({
    scrollTop: $("#myButton").offset().top
  }, 1000);
});

$("#features").click(function() {
  $('html, body').animate({
    scrollTop: $("#myfeatures").offset().top
  }, 1000);
});

$("#listing").click(function() {
  $('html, body').animate({
    scrollTop: $("#myListing").offset().top
  }, 1000);
});

$("#Price").click(function() {
  $('html, body').animate({
    scrollTop: $("#myPrice").offset().top
  }, 1000);
});

$("#how-button").click(function() {
  $('html, body').animate({
    scrollTop: $("#myhow-button").offset().top
  }, 1000);
}); 

$("#support").click(function() {
  $('html, body').animate({
    scrollTop: $("#mysupport").offset().top
  }, 1000);
});

$("#home-top").click(function() {
  $('html, body').animate({
    scrollTop: $("#myTop").offset().top
  }, 1000);
});