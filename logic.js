let container = document.querySelector('#container');
let btn = document.querySelector('#btn');
let setting = document.querySelector('#setUp');
let unicolor = document.querySelector('#uniColorSquares');
let multicolor = document.querySelector('#colorSquares');
let darkening = document.querySelector('#darkeningSquares');
let n;

function createElem(type, id, cls, text, container) {
  let el = document.createElement(type);
  el.setAttribute('id', id);
  el.className = cls;
  el.textContent = text;
  container.append(el);

  return el;
}

function getRandom(upTo) {
  return Math.floor(Math.random() * upTo);
}

function getColor() {
  let R, G, B, A;
  R = getRandom(255);
  G = getRandom(255);
  B = getRandom(255);
  A = getRandom(100);
  return `rgba(${R} ${G} ${B} / ${A}%)`
}

function darkenColor(color, percent) {
  let rgba = color.slice(5, -1).split(' ');  
  
  for (let i = 0; i < 3; i++) {
    rgba[i] = Math.floor(rgba[i] * (1 - percent / 100));
  };

  let val = 100 - parseFloat(rgba[4]);  
  rgba[4] = (parseFloat(rgba[4]) + (val / 100) * percent);
  
  return `rgba(${rgba[0]} ${rgba[1]} ${rgba[2]} / ${rgba[4]}%)`;
}

btn.addEventListener('click', function getNumber() {
  setting.hidden = false ? setting.hidden = true : '';
  container.textContent = '';
  n = +prompt('How many squares do you want to see on each direction? (Between 0 up to 50)', 16);
  if (n < 0 || n > 50) {
    return getNumber();
  } else {
    setting.hidden = false;
    selectFunction();
    
    //uniColorSquares(n);
    //colorSquares(n);
    //darkeningSquares(n);
    
  }
});





function selectFunction() {
  
  unicolor.addEventListener('change', () => {
    if (unicolor.checked) {
      uniColorSquares(n);
      console.log('uniColorSquares selected');      
    }});
  
  multicolor.addEventListener('change', () => {
    if (multicolor.checked) {
      colorSquares(n);
      console.log('colorSquares selected');      
    }
  });
  darkening.addEventListener('change', () => {
    if (darkening.checked) {
      darkeningSquares(n);
      console.log('darkeningSquares selected');      
    }
  });
}
  


/*
function handleSelection() {
  if (typeof selectedFunction === "function") {
    new Promise((resolve, reject) => {
      resolve(selectedFunction(n));      
    }).then(result => {
      container.innerHTML = result;
    });      
  } else {
    console.log("No function selected");
  }  
}

*/

/**
 * ***********************************************
 * This is the darkeningSquares (Extra Credit 2)
 * *********************************************** 
 */

function darkeningSquares(nr) {
 
  let width = Math.floor(container.clientWidth / nr);
  let height = Math.floor(container.clientHeight / nr);

  console.log(width + " x " + height);
  console.log(container.clientWidth + " x " + container.clientHeight);

  for (let i = 0; i < nr * nr; i++) {
    let square = createElem('div', i + 1, 'square', '', container);
    square.style.cssText = `width: ${width}px; height: ${height}px;`;
    if (i < nr) {
      square.textContent = i + 1;      
    } else {
      if (i % nr == 0) {
        square.textContent = i / nr + 1;
      }      
    };
    
    square.mouseoverCount = 0;
    
    let bkColor = getColor();
    console.log('bkColor:', bkColor);
    
    square.addEventListener("mouseover", function() {
      
      square.mouseoverCount++;
      let darkenPercent = square.mouseoverCount * 10;
      let newColor = darkenColor(bkColor, darkenPercent);
      console.log('newColor:', newColor);
      square.style.backgroundColor = newColor;      
      console.log(`Square ${event.target.id} has been moused over ${square.mouseoverCount} times.`);      
      console.log(square.style.backgroundColor);
    });
  };
};


/**
 * ************************************************
 * This is the colorSquares part (Extra Credit 1)
 * ************************************************ 
 */

function colorSquares(nr) {
 
  let width = Math.floor(container.clientWidth / nr);
  let height = Math.floor(container.clientHeight / nr);

  console.log(width + " x " + height);
  console.log(container.clientWidth + " x " + container.clientHeight);

  for (let i = 0; i < nr * nr; i++) {
    let square = createElem('div', i + 1, 'square', '', container);
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




/**
 * **********************************************************
 * This is the uniColorSquares part (Basic NO Extra Credit)
 * ********************************************************** 
 */

function uniColorSquares(nr) {
 
  let width = Math.floor(container.clientWidth / nr);
  let height = Math.floor(container.clientHeight / nr);

  console.log(width + " x " + height);
  console.log(container.clientWidth + " x " + container.clientHeight);

  for (let i = 0; i < nr * nr; i++) {
    let square = createElem('div', i + 1, 'square', '', container);
    square.style.cssText = `width: ${width}px; height: ${height}px`;
    if (i < nr) {
      square.textContent = i + 1;      
    } else {
      if (i % nr == 0) {
        square.textContent = i / nr + 1;
      }      
    };
    
    square.addEventListener("mouseover", function() {
      square.style.backgroundColor = "aqua";      
    });

    square.addEventListener("mouseout", function() {
      square.style.backgroundColor = "aqua";      
    });
  };
};

