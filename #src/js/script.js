
@@include('functions.js');
@@include('swiper.min.js');
@@include('sliders.js');
@@include('inputmask.js');
@@include('form.js');
@@include('popup.js');
@@include('scroll.js');



window.onscroll = function showHeader() {
    let header = document.querySelector(".header");

    if (window.pageYOffset > 60) {
        header.classList.add("_active");
    } else {
        header.classList.remove("_active");
    }
}


