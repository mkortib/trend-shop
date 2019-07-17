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
      $('.mnu_nav').fadeOut();
    })
    .bind('close:finish', function() { 
      $('.mnu_nav').fadeIn();
      $('.bottom_header').addClass('bottom_header_line');
    });


  $(".mnu_nav").click(function() { 
    api.open();
    $('.bottom_header').removeClass('bottom_header_line');
  });

  $('.close_inside').click(function() {
    api.close();
    $('.bottom_header').addClass('bottom_header_line');
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
    $('#current').text('0' + (currentSlide + 1) );
    console.log(currentSlide, slick);
  });



  // slider partners

  $('.partners_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false, 
    arrows: false,
    prevArrow: '.partner_nav .l_nav',
    nextArrow: '.partner_nav .r_nav',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  })

  // advantages mobile nav

  $('.nav_numb').click(function() {
    $('.nav_numb').removeClass('active')
    var ths = $(this);
    if (ths.hasClass('first_adv')) {
      ths.addClass('active');
      $('.adv').removeClass('d-none');
      $('.adv2, .adv3').addClass('d-none');
    } else if (ths.hasClass('second_adv')) {
      ths.addClass('active');
      $('.adv2').removeClass('d-none');
      $('.adv3, .adv').addClass('d-none');
    } else {
      ths.addClass('active');
      $('.adv3').removeClass('d-none');
      $('.adv2, .adv').addClass('d-none');
    }
  })

  // responsive itms in footer

  if ($(window).width() < 768) {
    $('.wsf, .copy').appendTo('.foot_col_4');
  }




});
