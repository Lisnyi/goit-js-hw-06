const inputSlider = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

inputSlider.addEventListener("change", () => {
    text.style.fontSize = inputSlider.value + "px"
})
