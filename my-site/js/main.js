/******************************
    BOTTOM SCROLL TOP BUTTON
 ******************************/
$(document).ready(function() {
    var scrollTop = $(".scroll__top");
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");
        } else {
            $(scrollTop).css("opacity", "0");
        }
    });
    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

$(function() {
    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" }, 1000, 'swing');
        return false;
    });
});