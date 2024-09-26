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

});