// import { preloadImages } from '/static/js/v4/utils.js';
// let lenis;
// // Выбираем DOM элементы

// const contentElements = [...document.querySelectorAll('.content--sticky')];
// const totalContentElements = contentElements.length;
// gsap.registerPlugin(ScrollToPlugin);
// // Инициализация плавного скролла с использованием GSAP
// const initSmoothScrolling = () => {
// 	// Создаем экземпляр Lenis с желаемыми настройками
// 	lenis = new Lenis({
// 		lerp: 0.7, 
// 		smoothWheel: true 
// 	});

// 	// Обновляем ScrollTrigger при каждом событии скролла
// 	lenis.on('scroll', () => ScrollTrigger.update());

// 	// Функция для обновления анимации на каждом кадре
// 	let lastTime = 0;
//     const scrollFn = (time) => {
//         if (time - lastTime > 16) { // примерно 60 FPS
//         lenis.raf(time);
//         lastTime = time;
//         }
//         requestAnimationFrame(scrollFn);
//     };
	
// 	// Запускаем цикл анимации
// 	requestAnimationFrame(scrollFn);
// };

// // Функция для обработки анимаций, связанных с прокруткой
// const scroll = () => {
//     contentElements.forEach((el, position) => {
//         const isLast = position === totalContentElements - 1;
//         const isPreLast = position === totalContentElements - 2;

//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: el,
//                 start: () => {
//                     if (isLast) {
//                         return 'top top';
//                     } else if (isPreLast) {
//                         return 'bottom top';
//                     } else {
//                         return 'bottom+=100% top';
//                     }
//                 },
//                 end: '+=100%',
//                 scrub: true
//             }
//         })
//         .to(el, {
//             ease: 'none',
//             yPercent: -100
//         }, 0)

//     });
// };

// // Инициализация
// const init = () => {
//     preloadImages().then(() => { // Убедимся, что все изображения загружены
//         //initSmoothScrolling(); // Инициализируем плавный скролл с GSAP
//         scroll(); // Применяем анимации для прокрутки
//     });
// };

// init(); // Запускаем инициализацию
