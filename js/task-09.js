function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('button')
const bgColor = document.querySelector(".color")
const body = document.querySelector("body")

button.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  bgColor.textContent = color;
  body.style.backgroundColor = color
});
  

  
