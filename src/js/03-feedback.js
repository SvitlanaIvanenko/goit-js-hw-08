import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput() {
    const inputData = {
      email: input.value,
      message: textarea.value,
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputData));
  }
  
  function onSubmit (event) {
    event.preventDefault();
    if (input.value === '' || textarea.value === '') {
      return window.alert('Please fill in all the fields');
    }
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
  }

function getSavedData() {
    const storagedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  
    if (storagedData) {
      input.value = storagedData.email;
      textarea.value = storagedData.message;
    }
  }
  getSavedData();
