const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');

const valueEl = document.querySelector('#value')
console.log(valueEl)

let counterValue = 0;

btnDecrementEl.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

btnIncrementEl.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});

