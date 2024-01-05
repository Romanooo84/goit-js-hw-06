const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

ingredients.forEach(element => {
  const Item = document.createElement("li");
  Item.textContent = element;
list.append(Item);
})
