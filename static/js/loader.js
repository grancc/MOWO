
document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 990) {
    const words = ["Архитектура и инженерия", "Исследование территории", "BIM", "GIS Analysis", "Algoritmic design", "AI design", "MOWO"];
    let index = 0;

    const container = document.querySelector('.preloader');

    // Text
    const text = document.createElement('p');
    const dot = document.createElement('span');
    text.appendChild(dot);
    text.append(words[0]);
    container.appendChild(text);


    // Animate text
    function updateText() {
      if (index < words.length - 1) {
        setTimeout(() => {
          index++;
          text.innerHTML = `<span></span>${words[index]}`;
          updateText();
        }, 250);
      }
    }

    setTimeout(() => {
      updateText();
    }, 250);



    setTimeout(() => {
      container.classList.add('exit');
    }, 2000);

    setTimeout(() => {
      container.style.display = 'none';
    }, 2600);
  }
});

