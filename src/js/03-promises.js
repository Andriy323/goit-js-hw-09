import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name = "delay"]'),
  amount: document.querySelector('input[name = "amount"]'),
  step: document.querySelector('input[name = "step"]'),
};

refs.form.addEventListener('submit', startNewPromise);

function startNewPromise(e) {
  e.preventDefault();
  let inputDeley = Number(refs.delay.value);
  const inputStep = Number(refs.step.value);

  for (let i = 1; i <= Number(refs.amount.value); i++) {
    createPromise(i, inputDeley)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    inputDeley = inputDeley + inputStep;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
