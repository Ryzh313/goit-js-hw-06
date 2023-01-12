const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const array = [];


const items = ingredients.forEach(ingredient => {
  let li = document.createElement('li');
  li.classList.add('item');  
  li.textContent = ingredient;

  array.push(li);
  
});

list.append(...array);