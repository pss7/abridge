$(function () {

    /* top */
    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });

    /* mobileMenu */
    $('#header .mobileBtn').click(function () {
        $('body').addClass('of');
        $('#header #mobileMenuWrap').animate({
            right: 0
        }, 300);
        $('.bg').show();
    });
    $('#header #mobileMenuWrap .closeBtn').click(function () {
        $('body').removeClass('of');
        $('#header #mobileMenuWrap').animate({
            right: -3000
        }, 300);
        $('.bg').hide();
    });

    $('#header #mobileMenuWrap .mobileMenu > li > a').click(function () {
        if ($(this).parents('li').find('.depth02').length) {
            if ($(this).parent().hasClass('active')) {
                $(this).parents('li').find('.depth02').slideUp();
                $(this).parent().removeClass('active');
            } else {
                $('#header #mobileMenuWrap .mobileMenu > li').find('.depth02').slideUp();
                $(this).parents('li').find('.depth02').slideDown();
                $('#header #mobileMenuWrap .mobileMenu > li').removeClass('active');
                $(this).parent().addClass('active');
            }
            return false;
        }
    });
    $('#header #mobileMenuWrap .mobileMenu > li:has(ul)').children('a').addClass('depth2');

});