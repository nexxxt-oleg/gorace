// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import  '~/node_modules/swiper/swiper-bundle.min.js'
import '~/node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './lazyload.min.js'



var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
});

function setEqualHeight(elements) {
    var mainDivs = document.getElementsByClassName(elements);
    var maxHeight = 0;
    for (var i = 0; i < mainDivs.length; ++i) {
        if (maxHeight < mainDivs[i].clientHeight) {
            maxHeight = mainDivs[i].clientHeight;
        }
    }
    for (var i = 0; i < mainDivs.length; ++i) {
        mainDivs[i].style.minHeight = maxHeight + "px";
    }
}

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

    if (document.getElementById('hitSlider')) {
        new Swiper('#hitSlider', {
            // Disable preloading of all images
            preloadImages: false,
            // Enable lazy loading
            lazy: true,
            slidesPerView: 4,
            spaceBetween: 10,
            navigation: {
                nextEl: '#hitSliderNext',
                prevEl: '#hitSliderPrev',
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                440: {
                    slidesPerView: 2,
                },
                600: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 4,
                },
            },
            on: {
                init: function () {
                    setEqualHeight('go__carusel__product-item');
                },
                resize: function () {
                    setEqualHeight('go__carusel__product-item');
                }
            },
        });
    }

    if (document.getElementById('brandSlider')) {
        new Swiper('#brandSlider', {
            // Disable preloading of all images
            preloadImages: false,
            // Enable lazy loading
            lazy: true,
            slidesPerView: 6,
            spaceBetween: 30,
            navigation: {
                nextEl: '#brandSliderNext',
                prevEl: '#brandSliderPrev',
            },
            breakpoints: {
                300: {
                    slidesPerView: 2,
                },
                440: {
                    slidesPerView: 3,
                },
                600: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 5,
                },
                1280: {
                    slidesPerView: 6,
                },
            },

        });
    }
})
