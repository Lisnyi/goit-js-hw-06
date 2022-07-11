const changeColorButton = document.querySelector(".change-color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorButton.addEventListener("click", () => {
  const page = document.querySelector("body")
  const colorText = document.querySelector(".color")

  page.style.backgroundColor = `${getRandomHexColor()}`
  colorText.textContent = `${getRandomHexColor()}`
})