
/* -------------------------------
	* Testimonials slider
---------------------------------- */

$('.testimonial-slides').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
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

/*Main Navigation Function Start*/
if (jQuery(".top-nav .menu").length != '') {
    jQuery('.top-nav .menu').slicknav({
        prependTo: '.top-nav'
    });
}
if (jQuery(".slicknav_menu").length != '') {
    $(document).mouseup(function (e) {
        var container = $(".slicknav_menu");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            jQuery('.top-nav .menu').slicknav('close');
        }
    });
}
/*Main Navigation Function EnD*/