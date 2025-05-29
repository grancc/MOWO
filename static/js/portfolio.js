//наведение на таблицу
function TablePortfolioItemHover(){
    const modalContainer = document.getElementById('modalContainer');
    const modalSlider = document.getElementById('modalSlider');
    const cursor = document.getElementById('cursor');
    const projects = document.querySelectorAll('.table-portfolio-item');

    let active = false;

    // Расчет координат при движении курсора
    const xMoveContainer = gsap.quickTo(modalContainer, 'left', { duration: 0.8, ease: 'power3' });
    const yMoveContainer = gsap.quickTo(modalContainer, 'top', { duration: 0.8, ease: 'power3' });

    const xMoveCursor = gsap.quickTo(cursor, 'left', { duration: 0.8, ease: 'power3' });
    const yMoveCursor = gsap.quickTo(cursor, 'top', { duration: 0.8, ease: 'power3' });


    window.addEventListener('mousemove', (e) => {
        if (!active) return;
        const { pageX, pageY } = e;

        xMoveContainer(pageX);
        yMoveContainer(pageY);

        // xMoveCursor(pageX);
        // yMoveCursor(pageY);
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
            modalContainer.style.transition = "all 0.4s ease";
            modalContainer.style.opacity = 1;
            modalContainer.style.transform = "translate(5%, 5%) scale(1)";
            cursor.classList.add('active-portfolio-table');
        } else {
            modalContainer.style.opacity = 0;
            modalContainer.style.transform = "scale(0)";
            cursor.classList.remove('active-portfolio-table');
        }
    }
}

//наведение фото проекта
function PortfolioItemHover(){
    const projects = document.querySelectorAll('.portfolio-item-wrapper');
    const cursor = document.querySelector('.cursor');
    projects.forEach((item, index) => {

        item.querySelector('.swiper--prev').addEventListener('mouseenter', () => {
            cursor.classList.remove('active-portfolio-right');
            cursor.classList.add('active-portfolio-left');

            if (item.querySelector('.swiper--prev').classList.contains('swiper-button-disabled')){
                cursor.style.opacity = '0.6'
            }else{
                cursor.style.opacity = '1'
            }
        });
        item.querySelector('.swiper--next').addEventListener('mouseenter', () => {
            cursor.classList.remove('active-portfolio-left');
            cursor.classList.add('active-portfolio-right');

            if (item.querySelector('.swiper--next').classList.contains('swiper-button-disabled')){
                cursor.style.opacity = '0.6'
            }else{
                cursor.style.opacity = '1'
            }
        });

        item.querySelector('.swiper--prev').addEventListener('mouseleave', () => {
            cursor.classList.remove('active-portfolio-left');
        });
        item.querySelector('.swiper--next').addEventListener('mouseleave', () => {
            cursor.classList.remove('active-portfolio-right');
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 990){
        TablePortfolioItemHover()
        PortfolioItemHover()
    }
    
});