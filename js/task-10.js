const boxesConteiner = document.querySelector("#boxes")
const createButton = document.querySelector("button[data-create]")
const destroyButton = document.querySelector("button[data-destroy]")
const inputField = document.querySelector("input")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let amount = 0

inputField.addEventListener("change", (event) => amount = event.currentTarget.valueAsNumber)

function createBoxes() {
  const newElementsArray = []
  for (let i = 0; i < amount; i++) {    
    const newElement = document.createElement("div")
    newElement.style.backgroundColor = `${getRandomHexColor()}`
    if (boxesConteiner.childElementCount === 0) {
      newElement.style.width = `${i*10+30}px`
      newElement.style.height = `${i*10+30}px`
    } else {
      newElement.style.width = `${(i+1)*10+boxesConteiner.lastElementChild.clientWidth}px`
      newElement.style.height = `${(i+1)*10+boxesConteiner.lastElementChild.clientHeight}px`
    }
    newElementsArray.push(newElement)
  }
  
  boxesConteiner.append(...newElementsArray)
}

function destroyBoxes() {
  boxesConteiner.innerHTML = ""
}

createButton.addEventListener("click", createBoxes)
destroyButton.addEventListener("click", destroyBoxes)