function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElem = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  const amount = inputElem.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
}

function onDestroyBtnClick() {
  boxesDiv.innerHTML = "";
}

function createBoxes(amount) {
  boxesDiv.innerHTML = "";
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.background = getRandomHexColor();
    boxesDiv.appendChild(box);
    boxSize += 10;
  }
  inputElem.value = "";
}