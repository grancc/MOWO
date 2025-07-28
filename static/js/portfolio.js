//наведение на таблицу
function TablePortfolioItemHover(){
    const modalContainer = document.getElementById('modalContainer');
    const modalSlider = document.getElementById('modalSlider');
    const cursor = document.getElementById('cursor');
    const projects = document.querySelectorAll('.table-portfolio-item');

    let active = false;

    // Расчет координат при движении курсора
    const xMoveContainer = gsap.quickTo(modalContainer, 'left', { duration: 0.1, ease: 'power3' });
    const yMoveContainer = gsap.quickTo(modalContainer, 'top', { duration: 0.1, ease: 'power3' });

    const xMoveCursor = gsap.quickTo(cursor, 'left', { duration: 0.8, ease: 'power3' });
    const yMoveCursor = gsap.quickTo(cursor, 'top', { duration: 0.8, ease: 'power3' });

    window.addEventListener('mousemove', (e) => {
        if (!active) return;
        const { pageX, pageY } = e;

        xMoveContainer(pageX);
        yMoveContainer(pageY);
    });

    //При наведении на портфолио итемы меняем картинку
    projects.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            toggleModal()
            updateModalSlider(index);
        });

        item.addEventListener('mouseleave', () => {
            toggleModal()
            updateModalSlider(index);
        });
    });

    // Изменение фото
    function updateModalSlider(index) {
        modalSlider.style.top = `${index * -100}%`;
    }

    // Скрытие/показ модального окна
    function toggleModal() {
        active = !active;

        if (active) {
            modalContainer.style.transition = "all 0s ease";
            modalContainer.style.opacity = 1;
            modalContainer.style.transform = "translate(5%, 5%) scale(1)";
            cursor && cursor.classList.add('active-portfolio-table');
        } else {
            modalContainer.style.opacity = 0;
            modalContainer.style.transform = "scale(0)";
            cursor && cursor.classList.remove('active-portfolio-table');
        }
    }
}

//наведение фото проекта
function PortfolioItemHover(){
    const projects = document.querySelectorAll('.portfolio-item-wrapper');
    const cursor = document.querySelector('.cursor');

    projects.forEach((item, index) => {
        const prevBtn = item.querySelector('.swiper--prev');
        const nextBtn = item.querySelector('.swiper--next');

        if (prevBtn) {
            prevBtn.addEventListener('mouseenter', () => {
                if (!cursor) return;
                cursor.classList.remove('active-portfolio-right');
                cursor.classList.add('active-portfolio-left');

                cursor.style.opacity = prevBtn.classList.contains('swiper-button-disabled') ? '0.6' : '1';
            });

            prevBtn.addEventListener('mouseleave', () => {
                cursor && cursor.classList.remove('active-portfolio-left');
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('mouseenter', () => {
                if (!cursor) return;
                cursor.classList.remove('active-portfolio-left');
                cursor.classList.add('active-portfolio-right');

                cursor.style.opacity = nextBtn.classList.contains('swiper-button-disabled') ? '0.6' : '1';
            });

            nextBtn.addEventListener('mouseleave', () => {
                cursor && cursor.classList.remove('active-portfolio-right');
            });
        }
    });
}

// Инициализация после загрузки всех изображений
function initPortfolio() {
    const portfolioSection = document.querySelector('#portfolio-page');
    
    // Показываем контент даже если изображения еще не загрузились
    if (window.innerWidth > 990) {
        TablePortfolioItemHover();
        PortfolioItemHover();
    }

    // Загружаем изображения в фоне
    imagesLoaded(portfolioSection, { background: true }, function() {
        // Можно добавить дополнительные действия после полной загрузки изображений
        console.log('Все изображения загружены');
    });
}

document.addEventListener("DOMContentLoaded", initPortfolio);