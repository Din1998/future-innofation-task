/* Main Js Start */

(function ($) {
  "use strict";

  $(document).ready(function () {


    // sidebar dropdown
    $(".has-dropdown > a").click(function (e) {
      e.preventDefault();
      var $submenu = $(this).next(".sidebar-submenu");
      var $parent = $(this).parent();
      if ($submenu.css("display") === "block") {
        $submenu.slideUp(200);
        $parent.removeClass("active");
      } else {
        $(".sidebar-submenu").not($submenu).slideUp(200);
        $(".has-dropdown.active").removeClass("active");
        $parent.addClass("active");
        $submenu.slideDown(200);
      }
    });


    $(".dashboard-body__bar-icon").on("click", function () {
      $(".sidebar-menu").addClass('show-sidebar');
      $(".sidebar-overlay").addClass('show');
    });
    $(".sidebar-menu__close, .sidebar-overlay").on("click", function () {
      $(".sidebar-menu").removeClass('show-sidebar');
      $(".sidebar-overlay").removeClass('show');
    });




    $('.popup_video').magnificPopup({
      type: 'iframe',
    });



      // slick slider
  $(document).ready(function () {
    function adjustTransform() {
      var screenWidth = $(window).width();
      if (screenWidth > 575) { // Check if screen width is greater than 575px
          $('.slick-track').each(function () {
              var newTransformValue = 'translate3d(-535px, 0px, 0px)';
              $(this).css('transform', newTransformValue);
          });
      } else {
          $('.slick-track').each(function () {
              $(this).css('transform', ''); // Remove custom transform for smaller screens
          });
      }
  }
    $('.testimonial-slider').on('init', function (event, slick) {
      setTimeout(adjustTransform, 10);
    }).on('afterChange', function (event, slick, currentSlide) {
      setTimeout(adjustTransform, 10);
    }).slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });



  });

  //   Splitting js
  Splitting();

  // preloader
  $(window).on("load", function () {
    $("#loading").fadeOut();
  })


  // sticky header
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 60) {
      $('.header').addClass('fixed-header');
    }
    else {
      $('.header').removeClass('fixed-header');
    }
  });






  // tap to top with progress

  if ($('.scroll-top').length > 0) {
    var $scrollTopBtn = $('.scroll-top');
    var $progressPath = $('.scroll-top path');
    var pathLength = $progressPath[0].getTotalLength();

    $progressPath.css({
      transition: 'none',
      strokeDasharray: pathLength + ' ' + pathLength,
      strokeDashoffset: pathLength,
    });

    $progressPath[0].getBoundingClientRect();
    $progressPath.css({
      transition: 'stroke-dashoffset 10ms linear'
    });

    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      $progressPath.css('strokeDashoffset', progress);
    };

    updateProgress();

    $(window).on('scroll', updateProgress);

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 50) {
        $scrollTopBtn.addClass('show');
      } else {
        $scrollTopBtn.removeClass('show');
      }
    });

    $scrollTopBtn.on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    });
  }




  // wow init
  new WOW().init();


})(jQuery);



// date picker
(function ($) {
  "use strict";
  const format = "dd-mm-yyyy";
  $.fn.datepicker.language['en'] = { days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], today: 'Today', clear: 'Clear', dateFormat: format, timeFormat: 'hh:ii aa', firstDay: 0 };
})(jQuery);




(function ($) {
  "use strict"; if (!$('.datepicker-here').val()) { $('.datepicker-here').datepicker(); }
})(jQuery) 
