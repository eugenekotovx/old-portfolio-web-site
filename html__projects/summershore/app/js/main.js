console.log('priem')

    $('.lazy').Lazy({
        scrollDirection: 'horizontal',
        effect: 'fadeIn',
        visibleOnly: true,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        },
        afterLoad: function() {
            console.log('done')
        }
    });

    $(document).ready(function(){
  $('.about__slider').slick({
    appendArrows: $('.controls'),
    prevArrow: '<button type="button" class="ctrl-left"></button>',
    nextArrow: '<button type="button" class="ctrl-right"></i></button>'
        });
    });
