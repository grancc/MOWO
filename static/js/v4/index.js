import { preloadImages } from '/static/js/v4/utils.js';

// Выбираем DOM элементы
const contentElements = [...document.querySelectorAll('.content--sticky')];
const totalContentElements = contentElements.length;
gsap.registerPlugin(ScrollToPlugin);
// Инициализация плавного скролла с использованием GSAP
const initSmoothScrolling = () => {
    // Плавный скролл с использованием GSAP
    gsap.to(window, {
        scrollTo: { y: 0, autoKill: false },
        duration: 0.5, // Продолжительность анимации скролла
        ease: 'power2.out'
    });
};

// Функция для обработки анимаций, связанных с прокруткой
const scroll = () => {
    contentElements.forEach((el, position) => {
        const isLast = position === totalContentElements - 1;
        const isPreLast = position === totalContentElements - 2;

        gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: () => {
                    if (isLast) {
                        return 'top top';
                    } else if (isPreLast) {
                        return 'bottom top';
                    } else {
                        return 'bottom+=100% top';
                    }
                },
                end: '+=100%',
                scrub: true
            }
        })
        .to(el, {
            ease: 'none',
            yPercent: -100
        }, 0)

    });
};

// Инициализация
const init = () => {
    preloadImages().then(() => { // Убедимся, что все изображения загружены
        initSmoothScrolling(); // Инициализируем плавный скролл с GSAP
        scroll(); // Применяем анимации для прокрутки
    });
};

init(); // Запускаем инициализацию
