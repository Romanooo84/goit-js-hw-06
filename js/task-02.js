const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
list.classList.add("item");
let tempList=[]
ingredients.forEach(element => {
  const item = document.createElement("li");
  item.textContent = element;
  tempList.push(item);
})
list.append(...tempList)
