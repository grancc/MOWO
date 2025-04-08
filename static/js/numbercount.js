let valueDisplays = document.querySelectorAll(".number-num span");
let interval = 2500;

// Функция для запуска анимации
function startCounter(valueDisplay) {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
}

// Создаем Observer, который будет отслеживать, когда блок попадет в область видимости
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Если блок в области видимости, запускаем анимацию
      startCounter(entry.target);
      observer.unobserve(entry.target); // Останавливаем отслеживание этого элемента
    }
  });
}, { threshold: 0.5 }); // threshold определяет, насколько должен быть виден элемент (в данном случае 50%)

valueDisplays.forEach((valueDisplay) => {
  // Добавляем каждый элемент в observer для отслеживания
  observer.observe(valueDisplay);
});
