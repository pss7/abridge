$(function () {

    $('.productImgBox').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.productimgList'
    });
    $('.productimgList').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.productImgBox',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });


});

