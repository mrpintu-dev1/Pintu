(function($) {
    "use strict";


    // owl carousel
    $('.testimonial-slider-wrapper').owlCarousel({
        loop:true,
        nav: true,
        navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        responsiveClass:true,
        responsive:{
            1000:{
                items:1
            },
            600:{
                items:1,
                nav: false,
                loop: true
            },
            0:{
                items:1,
                nav: false,
                loop: true
            }
        }
    });
    
    /*------ Menu stick ----*/
    const header = $('.sticky-bar')
    var scrollUp = $('#scrollUp')
    const win = $(window)
    win.on('scroll', function(e) {


        const scroll = win.scrollTop()


        if(scroll < 200) {
            header.removeClass('stick')
            scrollUp.css('display', 'none')
            
        } else {
            header.addClass('stick')
            scrollUp.css('display', 'block')
        }
    })

    scrollUp.on('click', function() {
        win.scrollTop(0)
    })

    $(".skillbar").skillbar({
        speed: 1000
    });

    $('.image-link').magnificPopup({type: 'image'});


    // custom cursor
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style","top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px")
    })

    document.addEventListener('click', () => {
        cursor.classList.add("expand");

        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500)
    })

    

})(jQuery);