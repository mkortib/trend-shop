$(function() {


  // menu settings

  
  $('#my-menu').mmenu({
		extensions: [
      'widescreen', 
      'theme-dark', 
      'effect-menu-slide', 
      'pagedim-black', 
      'position-left',
      "fx-menu-slide",
      "fx-panels-zoom",
      "fx-listitems-slide",
      "border-none"    
    ],
    navbar: {
      title: null
    }

  });
  
	var api = $("#my-menu").data( "mmenu" );
  api
    .bind( "open:finish", function() { 
      $('.mnu_nav').fadeOut();})
    .bind('close:finish', function() { 
      $('.mnu_nav').fadeIn();});


  $(".mnu_nav").click(function() { 
    api.open();
  });

  $('.close_inside').click(function() {
    api.close();
  })

  // slider bags

  $('.bag_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.bag_nav .next_arrow, .next_bag',
    prevArrow: '.bag_nav .prev_arrow',
    fade: true
  })


  var imgArray = $('.slider_wr img');

  $('.bag_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){   
    var Slide;
    (currentSlide === slick.slideCount - 1) ? Slide = imgArray[0] : Slide = imgArray[currentSlide + 1];
    var src = Slide.getAttribute('src');
    $('.next_bag img').attr('src', src);
  })


  // slider partners

  $('.partners_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false, 
    arrows: false
  })


});
