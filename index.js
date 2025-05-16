// TODO: Use the DOM API to create the card components

// 1. Seleccione el container

const container = document.getElementById('container');

// 2. cree una funciotn createCardComponent.
/**
 * @param {string} title
 * @param {string} body
 * @param {string} image
 * @return {HTMLElement}
 */


function createCardComponent(title, body, image ){
  const template = document.getElementById('card-template');
  const element = template.content.cloneNode(true).firstElementChild;

  const titleElement = element.querySelector('.card__title');
  const bodyElement = element.querySelector('.card__body__content');
  const imageContainer = element.querySelector('.card__body__image');

  titleElement.textContent = title;
  bodyElement.textContent = body;

  const img = document.createElement('img');
  img.src = image;
  img.alt = title;
  img.classList.add('card__body__image');

  imageContainer.appendChild(img);

  console.log(element);

  return element
}


// 3. Cree un componente
//createCardComponent('Hola', 'Hola soy un body');

function getImageByTitle(title) {
  switch (title) {
    case "Spider-Man: No Way Home":
      return "images/spiderman.jpg";
    case "Black Panther: Wakanda Forever":
      return "images/black.jpg";
    case "Avatar: The Way of Water":
      return "images/ava.jpg";
    default:
      return "images/fondo.png"; // Imagen por defecto
  }
}

fetch('./data/fakedata.json')
  .then(res => res.json())
  .then(data => {
    data.results.forEach(movie => {
      const image = getImageByTitle(movie.title);
      const card = createCardComponent(movie.title, movie.overview, image);
      container.appendChild(card);
    });
  })
  .catch(err => console.error('Error loading data:', err));
