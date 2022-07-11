const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
];

function createIngredient (content) {
  const ingredientsElement = document.createElement("li")
  ingredientsElement.classList.add("item")
  ingredientsElement.textContent = content
  return ingredientsElement
}

const ingredientsElementsArray = ingredients.map(elem => createIngredient(elem))

const ingredientsList = document.querySelector("#ingredients")

ingredientsList.append(...ingredientsElementsArray)