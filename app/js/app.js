// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import  '~/node_modules/swiper/swiper-bundle.min.js'
import '~/node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '~/node_modules/@fancyapps/ui/dist/fancybox.umd.js'
import './smooth-scroll.polyfills.min.js'
import './lazyload.min.js'
import './imask.min.js'




var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
});

var scroll = new SmoothScroll('.js-scroll', {
    speed: 300
});

function setEqualHeight(elements) {
    var mainDivs = document.getElementsByClassName(elements);
    var maxHeight = 0;
    for (var i = 0; i < mainDivs.length; ++i) {
        if (maxHeight < mainDivs[i].clientHeight) {
            maxHeight = mainDivs[i].clientHeight;
        }
    }
    if(maxHeight > 0) {
        for (var i = 0; i < mainDivs.length; ++i) {
            mainDivs[i].style.minHeight = maxHeight + "px";
        }
    }
}



document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('homeSlider')) {

        new Swiper('#homeSlider', {

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

    if (document.getElementById('productBigSlider')) {
        let productMinSlider = new Swiper("#productMinSlider", {
            spaceBetween: 30,
            slidesPerView: 6,
            //freeMode: true,
            watchSlidesProgress: true,
            lazy: {
                loadPrevNext: true,
            },
            preloadImages: false,
            breakpoints: {
                300: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                440: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                600: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                991: {
                    slidesPerView: 5,
                    spaceBetween: 15,
                },
                1280: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                },
            },
        });

        let productBigSlider = new Swiper('#productBigSlider', {
            // Disable preloading of all images
            preloadImages: false,
            // Enable lazy loading
            lazy: true,
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
            thumbs: {
                swiper: productMinSlider,
            },
            spaceBetween: 30,
            navigation: {
                nextEl: '#productSliderNext',
                prevEl: '#productSliderPrev',
            },

            on: {
                slideChange: function () {
                    productBigSlider.lazy.load()
                },
            },
        });
    }

    if (document.getElementById('openAnalog')) {
        document.getElementById('openAnalog').addEventListener( "click" , () => {
            document.querySelector('.nav-link[data-bs-target="#nav-analog"]').click();
        });
    }


    let phones = document.getElementsByClassName('js-inp-tel');
    if(phones.length > 0) {
        for (var i = 0; i < phones.length; ++i) {

            IMask(phones[i], {
                mask: '+{7}(000)000-00-00',
                lazy: false
            });
        }
    }


    if (document.getElementById('brendsList')) {
        mixitup(document.getElementById('brendsList'));
    }

    var collapseElementList = [].slice.call(document.querySelectorAll('.go__order-info .collapse'))
    var collapseList = collapseElementList.map(function (collapseEl) {
        collapseEl.addEventListener('hidden.bs.collapse', function () {
            collapseEl.parentNode.classList.toggle('active');
        });
        collapseEl.addEventListener('show.bs.collapse', function () {
            collapseEl.parentNode.classList.toggle('active');
        });
    });

    var navCollapsible = document.getElementById('navMainMenu')
    navCollapsible.addEventListener('hidden.bs.collapse', function () {
        document.body.classList.toggle("active_menu");
        try {
            document.getElementById('navMainMenu').classList.remove('active_level2');
            let activeElementList = [].slice.call(document.querySelectorAll('#navMainMenu .nav-item.active'))
            activeElementList.map(function (collapseEl) {
                collapseEl.classList.remove('active');
            });
        } catch (err) {

        }
    });
    navCollapsible.addEventListener('show.bs.collapse', function () {
        document.body.classList.toggle("active_menu");
    });


    var menuLevel1 = [].slice.call(document.querySelectorAll('.go__header__nav__level1'))
    menuLevel1.map(function (menuEl) {
        menuEl.addEventListener('click', function (e) {
            menuEl.parentNode.classList.toggle('active');
            document.getElementById('navMainMenu').classList.toggle('active_level2');
            e.preventDefault();
        });
    });

    var menuLevel2 = [].slice.call(document.querySelectorAll('.js-level2'))
    menuLevel2.map(function (menuEl) {
        menuEl.addEventListener('click', function (e) {
            menuEl.parentNode.classList.toggle('active_level2');
            e.preventDefault();
        });
    });



});


