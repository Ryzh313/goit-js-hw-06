const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
console.log(list);

const items = ingredients.forEach(ingredient => {
  let li = document.createElement('li');
li.classList.add('item');
li.textContent = ingredient;
list.append(li);
})