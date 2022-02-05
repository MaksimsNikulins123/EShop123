//BildSlider
let sliders = document.querySelectorAll('._swiper');
if(sliders) {
    for(let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if(!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if(slider_items) {
                for(let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        } 
        if(slider.classList.contains('_gallery')) {

        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) { }
if(document.querySelector('.mainslider')) {
    let mainslider = new Swiper('.mainslider__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeigth: true,
        speed: 800,
        // loop: true,
        pagination: {
            el: '.mainslider__dotts',
            clickable: true,
        },
        
        
        on: {
            lazyImageReady: function () {
                ibg();
            },
        }
        
        });
    let mainsliderImages = document.querySelectorAll('.mainslider__image');
    let mainsliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');

    for (let index = 0; index < mainsliderImages.length; index++) {
        const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
        mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
    }
}

if(document.querySelector('.products-slider')) {
    let productsSlider = new Swiper('.products-slider__item', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeigth: true,
        speed: 800,
        // loop: true,
        pagination: {
            el: '.products-slider__info',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.products-slider__arrow_next',
            prevEl: '.products-slider__arrow_prev',
        },
        
        // on: {
        //     lazyImageReady: function () {
        //         ibg();
        //     },
        // }

    })
}

if(document.querySelector('.brands-slider')) {
    let brandsSlider = new Swiper('.brands-slider__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 5,
        spaceBetween: 0,
        // autoHeigth: true,
        speed: 800,
        loop: true,
        navigation: {
            nextEl: '.brands-slider__arrow_next',
            prevEl: '.brands-slider__arrow_prev',
        },
        breakpoints: {
            320: {
               slidesPerView: 1,
               autoHeigth: true,
            },
            480: {
                slidesPerView: 2,
            },
            600: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4, 
            },
            992: {
                slidesPerView: 5,
            
        },
    }
        
    })
}

if(document.querySelector('.images-product')) {
    let imagesSubSlider = new Swiper('.images-product__subslider', {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 0,
        // autoHeigth: true,
        speed: 800,
        //loop: true,        
    });
    let imagesMainSlider = new Swiper('.images-product__mainslider', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        thumbs: {
            swiper: imagesSubSlider
          },
        // autoHeigth: true,
        speed: 800,
        //loop: true,
               
    });
    
    
}