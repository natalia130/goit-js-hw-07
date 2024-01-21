function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector("body");
const spanElem = document.querySelector(".color");
const buttonElem = document.querySelector(".change-color");
buttonElem.addEventListener("click", onButtonClick);

function onButtonClick() {
  const randomColor = getRandomHexColor();
  spanElem.textContent = randomColor;
  bodyElem.style.backgroundColor = randomColor;
}

