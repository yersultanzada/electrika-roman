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

    $('.phone').mask('+7 (999) 999-99-99');

    $('#contactForm').on('submit', function(event) {

        event.preventDefault();

        var form = $('#contactForm'),
            button = $('#button'),
            answer = $('#answer'),
            loader = $('#loader');

        $.ajax({
            url: '../handler.php',
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

})(jQuery);