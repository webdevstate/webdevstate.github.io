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


// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line('#progress__count_1', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#35373e',
    trailColor: '#35373e',
    trailWidth: 1,
    svgStyle: {width: '90%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#35373e',
        position: 'absolute',
        left: '110px',
        top: '-20px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleprogress__count_1: false
    },
    from: {color: '#35373e'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 90) + ' %');
    }
  });
  
  bar.animate(1.0);  // Number from 0.0 to 1.0

  var bar = new ProgressBar.Line('#progress__count_2', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#35373e',
    trailColor: '#35373e',
    trailWidth: 1,
    svgStyle: {width: '78%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#35373e',
        position: 'absolute',
        left: '190px',
        top: '-20px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleprogress__count_2: false
    },
    from: {color: '#35373e'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 78) + ' %');
    }
  });
  
  bar.animate(1.0);  // Number from 0.0 to 1.0
  var bar = new ProgressBar.Line('#progress__count_3', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#35373e',
    trailColor: '#35373e',
    trailWidth: 1,
    svgStyle: {width: '35%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#35373e',
        position: 'absolute',
        left: '115px',
        top: '-20px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleprogress__count_3: false
    },
    from: {color: '#35373e'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 35) + ' %');
    }
  });
  
  bar.animate(1.0);  // Number from 0.0 to 1.0

  var bar = new ProgressBar.Line('#progress__count_4', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#35373e',
    trailColor: '#35373e',
    trailWidth: 1,
    svgStyle: {width: '75%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#35373e',
        position: 'absolute',
        left: '120px',
        top: '-20px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleprogress__count_4: false
    },
    from: {color: '#35373e'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 75) + ' %');
    }
  });
  
  bar.animate(1.0);  // Number from 0.0 to 1.0
  var bar = new ProgressBar.Line('#progress__count_5', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#35373e',
    trailColor: '#35373e',
    trailWidth: 1,
    svgStyle: {width: '60%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#35373e',
        position: 'absolute',
        left: '80px',
        top: '-20px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleprogress__count_5: false
    },
    from: {color: '#35373e'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 60) + ' %');
    }
  });
  
  bar.animate(1.0);  // Number from 0.0 to 1.0

  var bar = new ProgressBar.Line('#progress__count_6', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#35373e',
    trailColor: '#35373e',
    trailWidth: 1,
    svgStyle: {width: '70%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#35373e',
        position: 'absolute',
        left: '65px',
        top: '-20px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleprogress__count_6: false
    },
    from: {color: '#35373e'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 70) + ' %');
    }
  });
  
  bar.animate(1.0);  // Number from 0.0 to 1.0