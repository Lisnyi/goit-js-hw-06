const boxesConteiner = document.querySelector("#boxes")
const createButton = document.querySelector("button[data-create]")
const destroyButton = document.querySelector("button[data-destroy]")
const inputField = document.querySelector("input")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount=3) {
  const newElementsString = []
  for (let i = 1; i <= amount; i++) {    
    const newElement = document.createElement("div")
    newElement.style.width = `30px`
    newElement.style.height = `30px`
    newElement.style.backgroundColor = `${getRandomHexColor()}`
    newElementsString.push(newElement)
  }
  
  boxesConteiner.append(...newElementsString)
}

// function destroyBoxes() {
  
// }

createButton.addEventListener("click", createBoxes)