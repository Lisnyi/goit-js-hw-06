const inputField = document.querySelector("#validation-input")
inputField.addEventListener ("blur", (event) => {
    const inputText = event.currentTarget.value.trim()
    if (inputText !== "") {
        if (inputText.length === Number(inputField.dataset.length) && inputField.classList.contains("invalid")) {
            inputField.classList.replace("invalid", "valid")
        } else if (inputText.length === Number(inputField.dataset.length)) {
            inputField.classList.add("valid")
        } else inputField.classList.add("invalid")
    } else if (inputField.classList.contains("invalid")) {
        inputField.classList.remove("invalid")
    } else inputField.classList.remove("valid")
})
console.log(inputField)