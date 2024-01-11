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
  console.log(value);
  createBoxes(value)
})

buttonDestroy.addEventListener("click", () => {
  console.log('guzik działa')
  destroyBoxes(boxLength);
});


function createBoxes(value) {
  for (var i = 1; i <= value; i++){
    let divHeight = 20 + i * 10;
    let divWidth = divHeight  ;
    let divPart = `<div style =" width:${divWidth}px; height:${divHeight}px; background-color:${getRandomHexColor()}">div</div>`;
    divList.push(divPart);
  }
  const newList = divList.join('')
  divBoxes.insertAdjacentHTML("beforeend", newList);
  boxLength = divBoxes.length
  console.log(boxLength)
}

function destroyBoxes(boxLength) {
  console.log('funkcja uruchamia się')
  console.log(boxLength)
  for (var i = 1; i = boxLength; i++){
    console.log(i)
    console.log(divBoxes.lastChild)
    divBoxes.removeChild(divBoxes.lastChild);
  }
}




