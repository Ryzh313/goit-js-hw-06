const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
console.log(inputEl);
console.log(outputEl);

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === '') {
        outputEl.textContent = 'Anonymous';
    } else {
        outputEl.textContent = event.currentTarget.value;
        console.log(event.currentTarget.value)
    }
};

console.log(outputEl.textContent)





