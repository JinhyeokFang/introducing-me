//set game
const max = 10;
const mines = 10;

var divsMine = new Array(max * max + 1).fill(0);
var divsStatus = new Array(max * max + 1).fill(0);
var divsNumber = new Array(max * max + 1).fill(0);
var score = 0;

//Math.floor(Math.random() *  + 1)

function addDiv (x, y) {
  div = document.createElement("div");
  div.id = y + max * ( x - 1 );  
  div.style.width = "5vw";
  div.style.height = "5vw";
  div.style.float = "left";
  div.style.border = "0.01vw solid black";
  div.onclick = function () {
    if (status(y, x) == 0) {
      changeBlockStatus(y, x, 1);
      if (number(y, x) == 0)
        showZeroBlocks(y, x);
    } else if (status(y, x) == 1) {
      show8blocks(y, x)
    }
  };
  div.oncontextmenu = function () {
    if (status(y, x) == 0)
      changeBlockStatus(y, x, 2);
    else if (status(y, x) == 2)
      changeBlockStatus(y, x, 0);
    
    return false;
  };

  document.body.appendChild(div, document.body);
}

function CreateDivs () {
  document.body.style.width = 5.5 * (max) + "vw";
  for (var x = 1; x < max + 1; x++) {
    for (var y = 1; y < max + 1; y++) {
      addDiv(x, y);
    }
  }
}

function addMines () {
  var repeat = mines;
  while (repeat) {
    var x = Math.floor(Math.random() * max + 1);
    var y = Math.floor(Math.random() * max + 1);
    if (mine(x,y) != 1) {
      changeBlockMine(x,y,1);
      repeat--;
    }
  }
}

function addNumber () {
  for (var x = 1; x < max + 1; x++) {
    for (var y = 1; y < max + 1; y++) {
      if (!mine(x, y))
        findMine(x, y);
    }
  }  
}

function findMine (x, y) {
  var number = 0;
  if (x != 1) {
    number += mine(x-1, y);

    if(y != 1)
      number += mine(x-1, y-1);
    if(y != max)
      number += mine(x-1, y+1);
  }

  if (x != max) {
    number += mine(x+1, y);

    if(y != 1)
      number += mine(x+1, y-1);
    if(y != max)
      number += mine(x+1, y+1)
  }

  if (y != 1)
    number += mine(x, y-1);

  if (y != max)
    number += mine(x, y+1);

  divsNumber[x + max * ( y - 1 )] = number;
}

function showZeroBlocks (x, y) {
  if (number(x, y) != 0)
    return;

  if (x != 1) {

    if(status(x-1, y) == 0) {
      changeBlockStatus(x-1, y, 1);
      showZeroBlocks(x-1, y);
    }

    if(y != 1 && status(x-1, y-1) == 0) {
      changeBlockStatus(x-1, y-1, 1);
      showZeroBlocks(x-1, y-1);
    }

    if(y != max && status(x-1, y+1) == 0) {
      changeBlockStatus(x-1, y+1, 1);
      showZeroBlocks(x-1, y+1);
    }
  }

  if (x != max) {
    if(status(x+1, y) == 0) {
      changeBlockStatus(x+1, y, 1);
      showZeroBlocks(x+1, y);
    }

    if(y != 1 && status(x+1, y-1) == 0) {
      changeBlockStatus(x+1, y-1, 1);
      showZeroBlocks(x+1, y-1);
    }

    if(y != max && status(x+1, y+1) == 0) {
      changeBlockStatus(x+1, y+1, 1);
      showZeroBlocks(x+1, y+1);
    }
  }

  if (y != 1 && status(x, y-1) == 0) {
    changeBlockStatus(x, y-1, 1);
    showZeroBlocks(x, y-1);
  }

  if (y != max && status(x, y+1) == 0) {
    changeBlockStatus(x, y+1, 1);
    showZeroBlocks(x, y+1);
  }
}

function show8blocks (x, y) {
  if(mine(x, y) == 1)
    return;

  if (x != 1) {
    if(status(x-1, y) == 0) {
      changeBlockStatus(x-1, y, 1);
      if(number(x-1, y) == 0)
        show8blocks(x-1, y);
    }

    if(y != 1 && status(x-1, y-1) == 0) {
      changeBlockStatus(x-1, y-1, 1);
      if(number(x-1, y-1) == 0)
        show8blocks(x-1, y-1);
    }

    if(y != max && status(x-1, y+1) == 0) {
      changeBlockStatus(x-1, y+1, 1);
      if(number(x-1, y+1) == 0)
        show8blocks(x-1, y+1);
    }
  }

  if (x != max) {
    if(status(x+1, y) == 0) {
      changeBlockStatus(x+1, y, 1);
      if(number(x+1, y) == 0)
        show8blocks(x+1, y);
    }

    if(y != 1 && status(x+1, y-1) == 0) {
      changeBlockStatus(x+1, y-1, 1);
      if(number(x+1, y-1) == 0)
        show8blocks(x+1, y-1);
    }

    if(y != max && status(x+1, y+1) == 0) {
      changeBlockStatus(x+1, y+1, 1);
      if(number(x+1, y+1) == 0)
        show8blocks(x+1, y+1);
    }
  }

  if (y != 1 && status(x, y-1) == 0) {
    changeBlockStatus(x, y-1, 1);
    if(number(x, y-1) == 0)
        show8blocks(x, y-1);
  }

  if (y != max && status(x, y+1) == 0) {
    changeBlockStatus(x, y+1, 1);
    if(number(x, y+1) == 0)
        show8blocks(x, y+1);
  }
}

function colorStyle (mine, status, x, y) {
  var div = document.getElementById(x + max * ( y - 1 ));
  if(status == 1) {
    if(mine)
      div.style.backgroundColor = "red";
    else {
      div.style.backgroundColor = "green";
      if (number(x, y) != 0)  
        div.innerHTML = "<h1'>"+number(x, y)+"</h1>";
    }
  } else {
    if(status == 2)
      div.style.backgroundColor = "yellow";
    else
      div.style.backgroundColor = "silver";
  }
}

function render () {
  for (var x = 1; x < max + 1; x++) {
    for (var y = 1; y < max + 1; y++) {
      colorStyle(mine(x, y), status(x, y) ,x, y);
    }
  }
}

function mine (x, y) {
  return divsMine[x + max * (y - 1)];
}

function status (x, y) {
  return divsStatus[x + max * (y - 1)];
}

function number (x, y) {
  return divsNumber[x + max * (y - 1)];
}

function changeBlockMine(x, y, mine) {
  divsMine[x + max * ( y - 1 )] = mine;
}

function changeBlockStatus(x, y, status) {
  divsStatus[x + max * ( y - 1 )] = status;
}

function repeat() {
  window.setInterval(() => {
    render();
  }, 1);
}

function minesweeper() {
  CreateDivs();
  addMines();
  addNumber();
  repeat();
}

minesweeper();