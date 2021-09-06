
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-container')) {
            slider.classList.add('swiper-container');
        }

        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
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
    }
    sliders_build_callback();
}

function sliders_build_callback(params) { }




if (document.querySelector('.slider__body')) {
    let mainSlider = new Swiper('.slider__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        watchOverflow: true,
        speed: 800,
        loop: true,
        preloadImages: false,
        parallax: true,
        autoHeight: true,
        autoplay: {
            delay: 3000,
        },
        //Dotts
        pagination: {
            el: '.controls-slider__dotts',
            clickable: true,
        },
    });
}

if (document.querySelector('.sub-slider')) {
    let imagesSubSlider = new Swiper('.sub-slider', {
        observer: true,
        observeParents: true,
        slidesPerView: 6,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
    });

    let imagesMainSlider = new Swiper('.main-slider', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        thumbs: {
            swiper: imagesSubSlider
        },
    });
}
