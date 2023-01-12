const inputEl = document.querySelector('#validation-input');
const reservedLength = Number(inputEl.dataset.length);

console.log(reservedLength);

inputEl.addEventListener('blur', onMarkInputText);

function onMarkInputText(event) {
  if (event.currentTarget.value.length === reservedLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
};