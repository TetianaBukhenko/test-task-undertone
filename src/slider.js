export function slider() {
  let displayIndex = 0;
  console.log(displayIndex);

  let intervalId = startCarousel();

  function startCarousel() {
    return window.setInterval(() => {
      displayIndex = increase(displayIndex);
      if (displayIndex === 3) {
        const mainText = document.querySelector('.info__main');
        const textBlock = document.querySelector('.info--show');
        mainText.classList.add('move-up');
        textBlock.classList.add('move-up');
      }
      handleCarousel('increase', displayIndex);
    }, 3000);
  }

  const controlCarousel = document.getElementById('control');
  controlCarousel.addEventListener('click', e => {
    window.clearInterval(intervalId);

    if (e.target.id === 'increase') {
      displayIndex = increase(displayIndex);
      handleCarousel('increase', displayIndex);
    }

    if (e.target.id === 'decrease') {
      displayIndex = decrease(displayIndex);
      handleCarousel('decrease', displayIndex);
    }
  });
}

function handleCarousel(direction, displayIndex) {
  const images = document.querySelectorAll('.image');
  const quotes = document.querySelectorAll('.info__secondary');
  const controlText = document.getElementById('control-text');
  controlText.innerText = `${displayIndex + 1}/5`;

  images[displayIndex].classList.remove('hide');
  images[displayIndex].classList.add('show');

  let prev = displayIndex - 1 < 0 ? images.length - 1 : displayIndex - 1;

  if (direction === 'decrease') {
    prev = displayIndex + 1 > 4 ? 0 : displayIndex + 1;
    quotes[displayIndex].classList.add('show-from-left');
  } else {
    quotes[displayIndex].classList.add('show-from-right');
  }

  quotes[prev].classList.add('hide');
  images[prev].classList.add('hide');
  images[prev].classList.remove('show');

  quotes[prev].classList.remove('show-from-right');
  quotes[prev].classList.remove('show-from-left');
}

function increase(displayIndex) {
  const increaseButton = document.getElementById('increase');
  increaseButton.classList.remove('pulse');
  void increaseButton.offsetWidth;
  increaseButton.classList.add('pulse');

  return displayIndex + 1 > 4 ? 0 : displayIndex + 1;
}

function decrease(displayIndex) {
  const decreaseButton = document.getElementById('decrease');
  decreaseButton.classList.remove('pulse');
  void decreaseButton.offsetWidth;
  decreaseButton.classList.add('pulse');

  return displayIndex - 1 < 0 ? 4 : displayIndex - 1;
}
