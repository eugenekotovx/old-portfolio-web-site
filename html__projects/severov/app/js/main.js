$("img").on("contextmenu", false);
$('.selected').addClass('underline')
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
        $('.selected').removeClass('underline')
    }  else  {
        currentnav.hide();
        var $this = $(this);
        $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
        
        
    }

    
});

$(document).click(function (e) {
    if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
        $('.nav__submenu').hide();
        menuBtn.removeClass('is-active').children('ul').removeClass('is-visible');
        $('.selected').addClass('underline')
        $('.selected').show()
    }
})
$('.selected').click(function () {
    $('.selected').addClass('underline')
})
    
$('.selected').show()

