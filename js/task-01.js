// 1.1 Task
const itemEl = document.querySelectorAll(".item");
const itemElAmount = itemEl.length;
console.log('Number of categories: ',itemElAmount);
// 1.2 Task
itemEl.forEach(item => {
    console.log('Category: ', item.firstElementChild.textContent);
console.log('Elements: ', item.lastElementChild.children.length)
})