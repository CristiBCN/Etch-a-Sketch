let container = document.querySelector('#container');

function createElem(type, cls, text, container) {
  let el = document.createElement(type);
  //el.setAttribute('class', cls);
  el.className = cls;
  el.textContent = text;
  container.append(el);

  return el;
}

let square = createElem('div', 'square', '', container);

