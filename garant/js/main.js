$(document).ready(function() {
    $('[data-toggle=offcanvas]').click(function() {
        $('.row-offcanvas').toggleClass('active');
    });
});


setTimeout(function() {
    $('.odometer_number_one').html('10');
    $('.odometer_number_two').html('78');
    $('.odometer_number_three').html('47');
    $('.odometer_number_four').html('1000');
});

var swiper = new Swiper('#slider_advantage', {
    autoHeight: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
});

var swiper = new Swiper('#slider_project', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      }
});

var swiper = new Swiper('#slider_partners', {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    loop: true,
    // init: false,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1200:{
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});


var swiper = new Swiper('#slider_comment', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

$(document).ready(function() {
    //fade in/out based on scrollTop value
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#scroller').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});




	
