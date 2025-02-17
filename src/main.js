import gsap from 'gsap';
import { slider } from './slider';

const setTimer = time => new Promise(resolve => setTimeout(resolve, time));

setTimer(2000)
  .then(() => {
    animateMainText();
    return setTimer(3000);
  })
  .then(() => {
    const infoBlock = document.getElementById('info');
    const image = document.getElementById('main-image');
    const button = document.getElementById('button');
    infoBlock.classList.add('info--show');
    image.classList.add('image-1--small');
    button.classList.add('button--show');
    return setTimer(1000);
  })
  .then(() => {
    const textEl = document.querySelectorAll('.fade-out');
    textEl.forEach(el => {
      el.classList.add('fade-in');
    });
    return setTimer(500);
  })
  .then(() => {
    slider();
  });

function animateMainText() {
  const mainText = document.getElementById('main-text');

  mainText.classList.remove('hide');
  const lines = mainText.innerHTML
    .split('<br>')
    .map(line => `<div class="line">${line}</div>`)
    .join('');

  mainText.innerHTML = lines;

  const lineElements = document.querySelectorAll('.line');

  gsap.from(lineElements, {
    duration: 2,
    opacity: 0,
    x: -100,
    stagger: 0.5,
    ease: 'expo.out',
  });
}
