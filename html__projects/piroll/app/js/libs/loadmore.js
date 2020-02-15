$(function () {
    $(".gallery__image").slice(0, 4).show();
    $(".load-more__button").on('click', function (e) {
        e.preventDefault();
        $(".gallery__image:hidden").slice(0, 4).slideDown();
        if ($(".gallery__image:hidden").length == 0) {
            $(".load-more__button").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 500);
    });
});
