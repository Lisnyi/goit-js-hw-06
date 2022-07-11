const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("ul")

const ingredientsElementsArray = ingredients.map(elem => {
  // const ingredientsElement = document.createElement("li")
  // // ingredientsElement.classList.add(".item")
  // ingredientsElement.textContent = `${elem}`
})
ingredientsList.append(...ingredientsElementsArray)