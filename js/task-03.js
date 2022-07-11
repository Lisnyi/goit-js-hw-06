const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery')
galleryList.style.display = "grid"
galleryList.style.alignItems = "center"
galleryList.style.gridTemplateColumns = "1fr 1fr"
galleryList.style.gap = "20px"

const galleryMarkup = images.map(element => `<img src="${element.url}" width=100% alt="${element.alt}">`).join("")

galleryList.insertAdjacentHTML ("afterbegin", galleryMarkup)