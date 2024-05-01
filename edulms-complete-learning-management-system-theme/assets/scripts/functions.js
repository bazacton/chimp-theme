/* -------------------------------	* Testimonials slider---------------------------------- */
$('.testimonial-slides').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 3,
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
/* Sticky Header */
$(window).scroll(function () {
  if ($(window).scrollTop() >= 1) {
    $('.header').addClass('fixed');
  }
  else {
    $('.header').removeClass('fixed');
  }
});
/* Smooth Scroll */
$("#button").click(function () {
  $('html, body').animate({
    scrollTop: $("#myButton").offset().top
  }, 1000);
});
$("#button1").click(function () {
  $('html, body').animate({
    scrollTop: $("#myButton").offset().top
  }, 1000);
});
$("#features").click(function () {
  $('html, body').animate({
    scrollTop: $("#myfeatures").offset().top
  }, 1000);
});
$("#help").click(function () {
  $('html, body').animate({
    scrollTop: $("#myHelp").offset().top
  }, 1000);
});
$("#Price").click(function () {
  $('html, body').animate({
    scrollTop: $("#myPrice").offset().top
  }, 1000);
});
$("#Logo").click(function () {
  $('html, body').animate({
    scrollTop: $("#myLogo").offset().top
  }, 1000);
});
/* Animation Effects */

wow = new WOW(
  {
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  }
);
wow.init();
document.getElementById('moar').onclick = function () {
  var section = document.createElement('section');
  section.className = 'section--purple wow fadeInDown';
  this.parentNode.insertBefore(section, this);
};