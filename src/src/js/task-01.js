const categoriesList = document.querySelectorAll(".item")
console.log(`Number of categories: ${categoriesList.length}`)

categoriesList.forEach(elem => {
    console.log(`Category: ${elem.children[0].textContent}`),
    console.log(`Elements: ${elem.children[1].childElementCount}`)}
    )