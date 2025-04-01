const projects = document.querySelectorAll('.our-work-title');



projects.forEach(project => {
    project.addEventListener('mouseenter', (e) => {
        
        var currentImage = document.getElementById('current-image');
        var nextImage = document.getElementById('next-image');
        var nextImgElement = nextImage.querySelector('img');
        var newImage = e.target.getAttribute('data-image');
        currentImage.style.transition = 'transform .5s ease-in-out';
        nextImage.style.transition = 'transform .5s ease-in-out';
        // Переключаем изображение в блоке next
        nextImgElement.src = newImage;

        // Начинаем анимацию
        nextImage.style.transform = 'translateY(-100%)';
        currentImage.style.transform = 'translateY(-100%)';

        // После завершения анимации перемещаем блоки
        setTimeout(() => {
            currentImage.id = 'next-image';
            nextImage.id = 'current-image';
            currentImage.style.transition = 'none';
            nextImage.style.transition = 'none';
            const parent = currentImage.parentElement;
            parent.appendChild(currentImage);
            nextImage.style.transform = 'translateY(0)';
            currentImage.style.transform = 'translateY(0)';
        }, 1000);
    });
});
