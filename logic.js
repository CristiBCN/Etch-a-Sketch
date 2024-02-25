let container = document.querySelector('#container');

let width = container.clientWidth / 16;
let height = container.clientHeight / 16;

console.log(width + " x " + height);


function createElem(type, cls, text, container) {
  let el = document.createElement(type);
  //el.setAttribute('class', cls);
  el.className = cls;
  el.textContent = text;
  container.append(el);

  return el;
}

for (let i = 0; i < 16 * 16; i++) {
let square = createElem('div', 'square', '', container);
square.style.cssText = `width: ${width}px; height: ${height}px`;

square.addEventListener("mouseover", function() {
  square.style.backgroundColor = "aqua";
});

square.addEventListener("mouseout", function() {
  square.style.backgroundColor = "aqua";
});
}
