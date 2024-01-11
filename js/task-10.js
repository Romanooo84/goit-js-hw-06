function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// wyszukanie pola tekstowego
const textInput = document.querySelector('input')
// wyszukanie przycisku create
const buttonCreate = document.querySelector('button[data-create]')
// wyszukanie przycisku destroy
const buttonDestroy = document.querySelector('button[data-destroy]')
// wyszukanie div
const divBoxes = document.querySelector('[id="boxes"]')
// zmienna do której wpisujemy ilość elementów wybraną przez uzytkownia
let value = null;
// lista do wpisania elementów div
let divList = []
// ilość elementów div w boxes
let boxLength = 0


// uruchienie funkcji po wcisnieciu Create
buttonCreate.addEventListener("click", () => {
  // pobiera wartość value
  value = textInput.value;
  //uruchamia funkcję
  createBoxes(value)
})

// uruchienie funkcji po wcisnieciu Destroy
buttonDestroy.addEventListener("click", () => {
  destroyBoxes();
});


function createBoxes(value) {
  // iteracja az do osiągniecia i=value 
  for (var i = 1; i <= value; i++){
    //zmienna wyliczająca wysokość div (min 30 dla i=1)
    let divHeight = 20 + i * 10;
    let divWidth = divHeight;
    //zmienna przechowująca div z wartosciami divHeight, divWidth i funkcją losowego koloru
    let divPart = `<div style =" width:${divWidth}px; height:${divHeight}px; background-color:${getRandomHexColor()}"></div>`;
    //dodanie div do listy
    divList.push(divPart);
  }
  // stworzenie stringu z listy divList
  const newList = divList.join('')
  // stworzenie wszystkich div w boxes
  divBoxes.insertAdjacentHTML("beforeend", newList);
  // wyzerowanie listy 
  divList = []
}

// funkcja usuwająca elementy z boxes
function destroyBoxes() {
  // dopóki wystepuję lastChild w boxes
  while (divBoxes.lastChild) {
    //usun lastChild w boxes
    divBoxes.removeChild(divBoxes.lastChild);
  }
}




