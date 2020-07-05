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
