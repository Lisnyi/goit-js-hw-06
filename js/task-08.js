const form = document.querySelector(".login-form");
const loginButton = document.querySelector("button")

loginButton.addEventListener("click", () => {
    if (form[0].value.trim() === "" || form[1].value.trim() === "") {
        alert("Всі поля повинні бути заповнені!")
    } else {
    form.addEventListener('submit', onFormSubmit); 

    function onFormSubmit(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value
    const password = event.currentTarget.elements.password.value

    const formData = {
        email,
        password
    }
    
    console.log(formData)
}}})

