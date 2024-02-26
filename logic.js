let container = document.querySelector('#container');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function getNumber() {
  container.textContent = '';
  let n = +prompt('How many squares do you want to see on each direction? (Between 0 up to 50)', 16);
  if (n < 0 || n > 50) {
    return getNumber();
  } else {console.log(n);
      createSquares(n);
  };  
})

function createElem(type, cls, text, container) {
  let el = document.createElement(type);
  //el.setAttribute('class', cls);
  el.className = cls;
  el.textContent = text;
  container.append(el);

  return el;
}

function createSquares(nr) {
 
  let width = Math.floor(container.clientWidth / nr);
  let height = Math.floor(container.clientHeight / nr);

  console.log(width + " x " + height);
  console.log(container.clientWidth + " x " + container.clientHeight);

  for (let i = 0; i < nr * nr; i++) {
    let square = createElem('div', 'square', '', container);
    square.style.cssText = `width: ${width}px; height: ${height}px`;
    if (i < nr) {
      square.textContent = i + 1;      
    } else {
      if (i % nr == 0) {
        square.textContent = i / nr + 1;
      }      
    };

    let bkColor = getColor();
    square.addEventListener("mouseover", function() {
      square.style.backgroundColor = bkColor;
    });

    square.addEventListener("mouseout", function() {
      square.style.backgroundColor = bkColor;
    });
  };
};

function getColor() {
  let R, G, B, A;
  R = getRandom(255);
  G = getRandom(255);
  B = getRandom(255);
  A = getRandom(100);
  return `rgba(${R} ${G} ${B} / ${A}%)`
}

function getRandom(upTo) {
  return Math.floor(Math.random() * upTo)
}

