// TODO: Use the DOM API to create the card components

// 1. Seleccione el container

const container = document.getElementById('container');

// 2. cree una funciotn createCardComponent.
/**
 * @param {string} title
 * @param {string} body
 *
 * @return {HTMLElement}
 */

function createCardComponent(title, body ){
  const template = document.getElementById('card_template');
  const element = template.content.cloneNode(true).firstElementChild;
  const titleElement = element.getElementByTagname('h3');
  console.log(element);
  return element
}

// 3. Cree un componente
createCardComponent('Hola', 'Hola soy un body');

// 4. Agrege este nuevo componente al container
