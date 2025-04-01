document.addEventListener("DOMContentLoaded", function () {
    let fadeBlocks = document.querySelectorAll(".fadeBlock");

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 0;
            } else {
                entry.target.style.opacity = 1;
            }
        });
    }, {
        threshold: 0.5 // 50% блока должно быть видно, чтобы сработал триггер
    });

    fadeBlocks.forEach(block => observer.observe(block));
});
