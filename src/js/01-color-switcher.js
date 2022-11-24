function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};

refs.start.addEventListener('click', startChangeColor);
refs.stop.addEventListener('click', stopChangeColor);

refs.stop.setAttribute('disabled', 'disabled');

let timerId = null;

function startChangeColor() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  console.log(timerId);
  refs.start.setAttribute('disabled', 'disabled');
  refs.stop.removeAttribute('disabled');
}

function stopChangeColor() {
  clearInterval(timerId);
  refs.start.removeAttribute('disabled');
  refs.stop.setAttribute('disabled', 'disabled');

  console.log('STOP');
}
