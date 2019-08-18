(function($) {
  "use strict";


  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });


  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
    $('#menuModal').modal('hide');
  });

  $('#menuModal').on('hidden.bs.modal', function (e) {
      $('body').removeClass('js-no-scroll')
  });
  $('#menuModal').on('shown.bs.modal', function (e) {
      $('body').addClass('js-no-scroll')
  });


  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

    $('#main-carousel').owlCarousel({
        items: 1,
        loop:true,
        dots: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        nav:false
    });

    $('#team-carousel').owlCarousel({
        items: 3,
        loop:true,
        dots: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        nav:true,
        navText: [
            "<img src=\"img/team/prev-btn-icon.png\">",
            "<img src=\"img/team/next-btn-icon.png\">"
        ],
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    $('#testimonials-carousel').owlCarousel({
        items: 1,
        loop:true,
        dots: true,
        autoplay:false,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav:true,
        navText: [
            "<img src=\"img/testimonials/prev-btn-icon_grey.png\">",
            "<img src=\"img/testimonials/next-btn-icon_grey.png\">"
        ],
        margin: 15
    });

    $("iframe[data-src]").Lazy();

    $('.phone').mask('+7 (999) 999-99-99');

    $('#contactForm').on('submit', function(event) {

        event.preventDefault();

        var form = $('#contactForm'),
            button = $('#button'),
            answer = $('#answer'),
            loader = $('#loader');

        $.ajax({
            url: 'handler.php',
            type: 'POST',
            data: form.serialize(),
            beforeSend: function() {
                answer.empty();
                button.attr('disabled', true);
                loader.fadeIn();
            },
            success: function(result) {
                loader.fadeOut(300, function() {
                    answer.text(result);
                });
                form.find('.form-control').val('');
                button.attr('disabled', false);
            },
            error: function() {
                loader.fadeOut(300, function() {
                    answer.text('Произошла ошибка!');
                });
                button.attr('disabled', false);
            }
        });

    });
    $('#contactForm_2').on('submit', function(event) {

        event.preventDefault();

        var form = $('#contactForm_2'),
            button = $('#button_2'),
            answer = $('#answer_2'),
            loader = $('#loader_2');

        $.ajax({
            url: 'handler.php',
            type: 'POST',
            data: form.serialize(),
            beforeSend: function() {
                answer.empty();
                button.attr('disabled', true);
                loader.fadeIn();
            },
            success: function(result) {
                loader.fadeOut(300, function() {
                    answer.text(result);
                });
                form.find('.form-control').val('');
                button.attr('disabled', false);
            },
            error: function() {
                loader.fadeOut(300, function() {
                    answer.text('Произошла ошибка!');
                });
                button.attr('disabled', false);
            }
        });

    });
    $('#contactForm_3').on('submit', function(event) {

        event.preventDefault();

        var form = $('#contactForm_3'),
            button = $('#button_3'),
            answer = $('#answer_3'),
            loader = $('#loader_3');

        $.ajax({
            url: 'handler.php',
            type: 'POST',
            data: form.serialize(),
            beforeSend: function() {
                answer.empty();
                button.attr('disabled', true);
                loader.fadeIn();
            },
            success: function(result) {
                loader.fadeOut(300, function() {
                    answer.text(result);
                });
                form.find('.form-control').val('');
                button.attr('disabled', false);
            },
            error: function() {
                loader.fadeOut(300, function() {
                    answer.text('Произошла ошибка!');
                });
                button.attr('disabled', false);
            }
        });

    });

    function galleryShadow() {
        $('.gallery-section__led').toggleClass('gallery-section__led--on');
        if ($('.gallery-section__led').hasClass('gallery-section__led--on')) {
            $('#measurer-digits').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    }
    window.setInterval(galleryShadow, 500);

})(jQuery);