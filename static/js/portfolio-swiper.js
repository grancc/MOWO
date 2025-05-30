document.addEventListener("DOMContentLoaded", function () {
    const swipers = document.querySelectorAll(".swiper-photos");
    console.log(swipers)
    swipers.forEach((swiperEl, index) => {
        let swiper = new Swiper(swiperEl, {
            slidesPerView: 1,
            grabCursor: true,
            navigation: {
                nextEl: `.button-next-${index + 1}`,
                prevEl: `.button-prev-${index + 1}`,
            },
            pagination: {
                el: `.swiper-pagination-${index + 1}`,
                clickable: true,
            },
        });

        swiper.on('slideChange', () => {
            const prevBtn = swiper.navigation.prevEl;
            const nextBtn = swiper.navigation.nextEl;

            if (!prevBtn || !nextBtn || !cursor) return;

            if (cursor.classList.contains('active-portfolio-left')) {
                cursor.style.opacity = prevBtn.classList.contains('swiper-button-disabled') ? '0.6' : '1';
            }

            if (cursor.classList.contains('active-portfolio-right')) {
                cursor.style.opacity = nextBtn.classList.contains('swiper-button-disabled') ? '0.6' : '1';
            }
        });
    });
});