// Описаний в документації
import flatpickr from 'flatpickr';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';

import 'flatpickr/dist/flatpickr.min.css';
// require("flatpickr/dist/themes/material_red.css");
require('flatpickr/dist/themes/confetti.css');

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  input: document.querySelector('#datetime-picker'),
  button: document.querySelector('button[data-start]'),
  dataDay: document.querySelector('span[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};
let idInterval = null;

refs.button.setAttribute('disabled', 'disabled');
// refs.dataDay.textContent = 5

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  locale: Ukrainian,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      Notify.failure('Please select a date in the future', {
        timeout: 6000,
        position: 'center-top',
      });

      refs.button.setAttribute('disabled', 'disabled');
      return;
    } else {
     
      refs.button.removeAttribute('disabled');
    }
  },
};

const selectDate = flatpickr('input#datetime-picker', options);
refs.button.addEventListener('click', onClick);
function onClick(e) {
  e.preventDefault();
  Notify.success('The timer is started', {
    timeout: 6000,
    position: 'center-top',
  });
  // console.log(selectDate.selectedDates[0])
  // convertMs(result)
  idInterval = setInterval(calcDays, 1000);
  refs.button.setAttribute('disabled', 'disabled');
}

function calcDays() {
  const resultConvert = selectDate.selectedDates[0] - new Date();
  const convert = convertMs(resultConvert);

  console.log(resultConvert);
  if (resultConvert <= 1000) {
    clearInterval(idInterval);
  }
  renderPage(convert);
}

function renderPage({ days, hours, minutes, seconds }) {
  refs.dataDay.textContent = days;

  refs.dataHours.textContent = hours;

  refs.dataMinutes.textContent = minutes;

  refs.dataSeconds.textContent = seconds;

  console.log(refs.dataDay);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days

  const days = addLeadingZero(Math.floor(ms / day));

  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}
