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
    $('.book__slider').slick({
        appendArrows: $('.controls'),
        prevArrow: '<img class="ctrl-left" src="./css/img/arr.svg" alt="" srcset="">',
        nextArrow: '<img class="ctrl-right" src="./css/img/arr.svg" alt="" srcset="">'
            });