var swiper =  new Swiper(".slider-main", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 0,
    navigation: {
        nextEl: ".btn-next-main",
        prevEl: ".btn-prev-main",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1280: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});

var swiper =  new Swiper(".sl-post", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    navigation: {
        nextEl: ".btn-next-post",
        prevEl: ".btn-prev-post",
    },
});