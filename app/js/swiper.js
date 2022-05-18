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

var swiper =  new Swiper(".slider-project", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".next-project",
        prevEl: ".prev-project",
    },
});

var swiper =  new Swiper(".slider-project2", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".next-project2",
        prevEl: ".prev-project2",
    },
});

var swiper =  new Swiper(".slider-team", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".slider-testimonior", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 0,
    pagination: {
        el: ".testimonior-pagination",
        clickable: true,
    },
    breakpoints: {
        1280: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});

var swiper =  new Swiper(".sl-partner", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 90,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 90,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 90,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 90,
        },
        750: {
            slidesPerView: 3,
            spaceBetween: 90,
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 90,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 90,
        },
    },
});

var swiper =  new Swiper(".slider-service", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    pagination: {
        el: ".service-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".swiper-loop", {
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 3
        },
        991: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 3
        },
    },
    // autoplay: {
    // delay: 0.3, 
    // }, 
    autoplay: false,
    speed: 2000,
    disableOnInteraction: true
});