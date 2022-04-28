// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import  '~/node_modules/swiper/swiper-bundle.min.js'
import '~/node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './lazyload.min.js'



var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
});

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('homeSlider')) {
        const swiper = new Swiper('#homeSlider', {

            //loop: true,
            lazy: {
                loadPrevNext: true,
            },
            // If we need pagination
            pagination: {
                el: '#homeSliderPag',
                clickable: true,
            },
            effect: 'creative',
            creativeEffect: {
                prev: {
                    // will set `translateZ(-400px)` on previous slides
                    translate: [0, 0, -400],
                },
                next: {
                    // will set `translateX(100%)` on next slides
                    translate: ['100%', 0, 0],
                },
            },
            parallax: true,
            navigation: {
                nextEl: '#homeSliderNext',
                prevEl: '#homeSliderPrev',
            },


        });
    }

})
