(function($) {
    "use strict";
    
    /*------ Menu stick ----*/
    const header = $('.sticky-bar')
    const win = $(window)
    win.on('scroll', function() {
        const scroll = win.scrollTop()

        if(scroll < 200) {
            header.removeClass('stick')
        } else {
            header.addClass('stick')
        }
    })

    $(".skillbar").skillbar({
        speed: 1000
    });

    $('.image-link').magnificPopup({type:'image'});


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


    /*------ Wow Active ----*/
    new WOW().init();
    

})(jQuery);