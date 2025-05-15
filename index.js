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
  img.src = 'images/Maxsucho pensativo.jpg';
  img.alt = title;
  img.classList.add('card__body__image');

  imageContainer.appendChild(img);

  console.log(element);

  return element
}


// 3. Cree un componente
//createCardComponent('Hola', 'Hola soy un body');
const card = createCardComponent('Hola', 'Hola soy un body, ddnkjdsnfjdsnfsin sdjfndsiuncdsiucnds sdnfoidsncodsicn unoisadmosaidm oiad fdsf dsjfndsun odsjfniudsfndsuifbdsiuf sodjfnodsiufndsoifnddf kjf sdjfnosiudfnodsufnusn osdifndsufbsiubs asdsfdsf ssdfdsf dsfdsfdsf ssdfsd', 'images/Maxsucho pensativo.jpg');
const card2 = createCardComponent('Hola', 'Hola soy un body extremadamente largo, chau', 'images/Maxsucho pensativo.jpg');

// 4. Agrege este nuevo componente al container
container.appendChild(card);
container.appendChild(card2);
