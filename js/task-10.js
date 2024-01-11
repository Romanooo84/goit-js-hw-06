function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textInput = document.querySelector('input')
const buttonCreate = document.querySelector('button[data-create]')
const buttonDestroy = document.querySelector('button[data-destroy]')
const divBoxes= document.querySelector('[id="boxes"]')
let value = null;
let divList = []
let boxLength = 0



buttonCreate.addEventListener("click", () => {
  value = textInput.value;
  createBoxes(value)
})

buttonDestroy.addEventListener("click", () => {
  destroyBoxes();
});


function createBoxes(value) {
  for (var i = 1; i <= value; i++){
    let divHeight = 20 + i * 10;
    let divWidth = divHeight  ;
    let divPart = `<div style =" width:${divWidth}px; height:${divHeight}px; background-color:${getRandomHexColor()}"></div>`;
    divList.push(divPart);
  }
  const newList = divList.join('')
  divBoxes.insertAdjacentHTML("beforeend", newList);
  boxLength = divBoxes.children.length
  divList = []
}

function destroyBoxes() {
  while (divBoxes.lastChild){
    divBoxes.removeChild(divBoxes.lastChild);
  }
}




