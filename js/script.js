$(function () {

    /* top */
    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });

});