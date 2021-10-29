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


    /*------ Wow Active ----*/
    new WOW().init();
    

})(jQuery);