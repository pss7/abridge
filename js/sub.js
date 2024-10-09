$(function () {

    $(window).load(function () {
        $('main .topImg').addClass('active');
    });

    /* 론픽-slick */
    $('.productImgBox01').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.productimgList01'
    });
    $('.productimgList01').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.productImgBox01',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    $('.productImgBox02').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.productimgList02'
    });
    $('.productimgList02').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.productImgBox02',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    $('.productImgBox03').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.productimgList03'
    });
    $('.productimgList03').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.productImgBox03',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    $('.productImgBox04').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.productimgList04'
    });
    $('.productimgList04').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.productImgBox04',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    $('.productImgBox05').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.productimgList05'
    });
    $('.productimgList05').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.productImgBox05',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    $('.productImgBox06').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.productimgList06'
    });
    $('.productimgList06').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.productImgBox06',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    /* 론픽-tab */
    $(".ronficWrap .productContentWrap .productContentBox").hide();
    $(".ronficWrap .productContentWrap .productContentBox").first().show();

    $('.ronficWrap .contentTab li').click(function () {

        $('.ronficWrap .contentTab li').children().removeClass('active');
        $(this).children().addClass('active');

        var Idx = $(this).index();

        $(".ronficWrap .productContentWrap .productContentBox").hide();
        $(".ronficWrap .productContentWrap .productContentBox").eq(Idx).show();

        $('.productImgBox01').slick('setPosition');
        $('.productImgBox01').slick('refresh')

        $('.productImgBox02').slick('setPosition');
        $('.productImgBox02').slick('refresh')

        $('.productImgBox03').slick('setPosition');
        $('.productImgBox03').slick('refresh')

        $('.productImgBox04').slick('setPosition');
        $('.productImgBox04').slick('refresh')

        $('.productImgBox05').slick('setPosition');
        $('.productImgBox05').slick('refresh')

        $('.productImgBox06').slick('setPosition');
        $('.productImgBox06').slick('refresh')

        $('.productimgList01').slick('setPosition');
        $('.productimgList01').slick('refresh')

        $('.productimgList02').slick('setPosition');
        $('.productimgList02').slick('refresh')

        $('.productimgList03').slick('setPosition');
        $('.productimgList03').slick('refresh')

        $('.productimgList04').slick('setPosition');
        $('.productimgList04').slick('refresh')

        $('.productimgList05').slick('setPosition');
        $('.productimgList05').slick('refresh')

        $('.productimgList06').slick('setPosition');
        $('.productimgList06').slick('refresh')

        return false;

    });

    /* 기업-slick */
    $('.enterpriseSlide .slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });

    /* 사업소개-slick */
    $('.businessListBox .slick').slick({
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: $('.businessListBox .prev'),
        nextArrow: $('.businessListBox .next'),
        responsive: [ 
            {  
                breakpoint: 769, 
                settings: {
                    centerMode: true,
                    slidesToShow:3 
                } 
            },
        ]
    });






});

