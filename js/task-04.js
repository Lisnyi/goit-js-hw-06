const incrementButton = document.querySelector('button[data-action="increment"]')
const decrementButton = document.querySelector('button[data-action="decrement"]')
const displayValue = document.querySelector('#value')
let counterValue = 0

function increment() {
    counterValue += 1
    displayValue.textContent = counterValue
    return counterValue
}

function decrement() {
    counterValue -= 1
    displayValue.textContent = counterValue
    return counterValue
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);