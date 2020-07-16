$("img").on("contextmenu", false);

const menu = $('.nav'),
menuBtn = $('.submenu')
$('.submenu').on('click', function() {

var currentnav=$(this).closest('li').find('.nav__submenu');
    if (!currentnav.is(':visible')) {
        $('.nav__submenu').hide();
        menuBtn.removeClass('is-active').children('ul').removeClass('is-visible');
        currentnav.show();
        var $this = $(this);
        $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
        
        $('.selected').show()
    } else {
        currentnav.hide();
        var $this = $(this);
        $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
        
        $('.selected').show()
    }
});

$(document).click(function (e) {
    if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
        $('.nav__submenu').hide();
        menuBtn.removeClass('is-active').children('ul').removeClass('is-visible');
        
        $('.selected').show()
    }
})
$('.selected').show()

