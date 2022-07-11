const inputName = document.querySelector("#name-input")
const outputName = document.querySelector("#name-output")

inputName.addEventListener("input", (event) => {
    const name = event.currentTarget.value.trim()
    name !== "" ? outputName.textContent = name : outputName.textContent = "Anonymous"
  });