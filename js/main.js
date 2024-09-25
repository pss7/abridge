$(function () {

    $('#section01 .slick').on('beforeChange', function (slick, currentSlide, nextSlide) {
        $('#section01 .mainTitle').fadeOut();
        $('#section01 .progressBar').removeClass('active');
        $('#section01 .mainImgBox img').removeClass('active');
    });
    $('#section01 .slick').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $('#section01 .mainTitle').fadeIn(800);
        $('#section01 .progressBar').addClass('active');
        $('#section01 .mainImgBox img').addClass('active');
    });
    $('#section01 .slick').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('#section01 .countBox').html('<em>' + i + '</em>' + slick.slideCount);
        $('#section01 .progressBar').addClass('active');
    });

    $('#section01 .slick').slick({
        variableWidth: false,
        autoplay: true,
        arrows: true,
        dots: false,
        accessibility: true,
        prevArrow: $('#section01 .prev'),
        nextArrow: $('#section01 .next'),
        draggable: true,
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        speed: 1000,
        autoplaySpeed: 8000
    });

    $('#section01 .playBox button').on('click', function (e) {
        e.preventDefault();

        if ($(this).hasClass('pause')) {
            //   $(this).hide();
            $('#section01 .playBox .play').show();
            $('#section01 .slick').slick('slickPause');
            $('#section01 .progressBar').removeClass('active');
        } else if ($(this).hasClass('play')) {
            //   $(this).hide();
            $('#section01 .playBox .pause').show();
            $('#section01 .slick').slick('slickPlay');
            $('#section01 .progressBar').addClass('active');
        }
    });

    /* aos */
    $(window).load(function () {
        AOS.init({
            duration: 1500
        });
        $('#section01 .mainImgBox img').addClass('active');
        // $('#section01 .mainVisualWrap .mainTitle').addClass('active');
    });


});

