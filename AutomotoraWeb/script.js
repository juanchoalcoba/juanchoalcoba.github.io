const images = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
]

//APP STATE

let index = 0;

const max = images.length;

//GET THE DOM ELEMENT

const containerElement = document.querySelector('.container');
const prevSlideButton = document.querySelector('.prevSlide');
const nextSlideButton = document.querySelector('.nextSlide');

//listen fot arrow click events

prevSlideButton.addEventListener("click", function () {
  index--;
  setImageIndex();
  changeBackgroundImage(images[index], containerElement);
});

nextSlideButton.addEventListener("click", function () {
  index++;
  setImageIndex();
  changeBackgroundImage(images[index], containerElement);
});


//Utility function
function setImageIndex() {
  if (index < 0) index = max - 1;
  if (index === max) index = 0;
}

function changeBackgroundImage(backgroundImage, element) {
  element.style.backgroundImage = `url(${backgroundImage})`;
}


