//set game
const xMax = 10;
const yMax = 10;
var divsStatus = new Array(xMax * yMax + 1).fill(0);
var blocksShape = 0;
var blocksShapeNumber = 1;
var importantBlockX = 0;
var importantBlockY = 0;

function addDiv (x, y) {
  div = document.createElement("div");
  div.id = y + xMax * ( x - 1 );  
  div.style.width = "5vw";
  div.style.height = "5vw";
  div.style.float = "left";
  div.style.border = "0.1vw solid black";

  document.body.appendChild(div, document.body);
}

function CreateDivs () {
  document.body.style.width = 5 * xMax + 5 + "vw";
  for (var x = 1; x < xMax + 1; x++) {
    for (var y = 1; y < yMax + 1; y++) {
      addDiv(x, y, xMax);
    }
  }
}

//render

function colorStyle (status, x, y) {
  var div = document.getElementById(x + xMax * ( y - 1 ));
  if(status == 0)
    div.style.backgroundColor = "white";
  else if(status == 1)
    div.style.backgroundColor = "black";
  else if(status == 2)
    div.style.backgroundColor = "red";
}

function render() {
  for (var x = 1; x < xMax + 1; x++) {
    for (var y = 1; y < yMax + 1; y++) {
      colorStyle(divsStatus[x + xMax * ( y - 1 )], x, y, xMax);
    }
  }
}

//change block
function createBlock(repeat) {
  if (repeat)
    return;

  blocksShape = Math.floor(Math.random() * 7 + 1);
  blocksShapeNumber = 1;
  importantBlockX = 6;
  importantBlockY = 2;

  if (blocksShape == 1) {
    changeBlockStatus(5,1,2);
    changeBlockStatus(6,1,2);
    changeBlockStatus(6,2,2);
    changeBlockStatus(7,2,2);
  }
  if (blocksShape == 2) {
    changeBlockStatus(5,2,2);
    changeBlockStatus(6,1,2);
    changeBlockStatus(6,2,2);
    changeBlockStatus(7,1,2);
  }
  if (blocksShape == 3) {
    changeBlockStatus(5,2,2);
    changeBlockStatus(6,1,2);
    changeBlockStatus(6,2,2);
    changeBlockStatus(6,3,2);
  }
  if (blocksShape == 4) {
    changeBlockStatus(5,1,2);
    changeBlockStatus(6,1,2);
    changeBlockStatus(6,2,2);
    changeBlockStatus(6,3,2);
  }
  if (blocksShape == 5) {
    changeBlockStatus(5,3,2);
    changeBlockStatus(6,1,2);
    changeBlockStatus(6,2,2);
    changeBlockStatus(6,3,2);
  }
  if (blocksShape == 6) {
    changeBlockStatus(5,1,2);
    changeBlockStatus(5,2,2);
    changeBlockStatus(6,1,2);
    changeBlockStatus(6,2,2);
  }
  if (blocksShape == 7) {
    importantBlockY = 1;
    changeBlockStatus(5,1,2);
    changeBlockStatus(6,1,2);
    changeBlockStatus(7,1,2);
    changeBlockStatus(8,1,2);
  }
}

function status (x, y) {
  return divsStatus[x + xMax * (y - 1)];
}

function changeBlockStatus(x, y, status) {
  divsStatus[x + xMax * ( y - 1 )] = status;
}

//move block
function moveBlockToLeft () {
  var stop = 0;
  for (var x = 0; x < xMax + 1; x++) {
    for (var y = yMax; y > 0; y--) {
      if (status(x,y) == 2 && (status(x-1,y)== 1 || x == 1)) {
        stop = 1;
      }
    }  
  }

  if (!stop) {
    for (var y = 1; y < yMax + 1; y++) {
      for (var x = 1; x < xMax + 1; x++) {
        if (status(x,y) == 2) {
          changeBlockStatus(x,y,0);
          changeBlockStatus(x-1,y,2);
          importantBlockX -= 0.25;
        }
      }
    }
  }
}

function moveBlockToRight () {
  var stop = 0;
  for (var x = xMax; x > 0; x--) {
    for (var y = yMax; y > 0; y--) {
      if (status(x,y) == 2 && (status(x+1,y) == 1 || x == xMax)) {
        stop = 1;
      }
    }  
  }

  if (!stop) {
    for (var y = 1; y < yMax + 1; y++) {
      for (var x = xMax; x > 0; x--) {
        if (status(x,y) == 2) {
          changeBlockStatus(x,y,0);
          changeBlockStatus(x+1,y,2);
          importantBlockX += 0.25;
        }
      }
    }
  }
}

function moveBlockToDown(spaceBarIsPressed) {
  var stop = 0;
  var repeat = 0; 
  for (var x = xMax; x > 0; x--) {
    for (var y = yMax; y > 0; y--) {
      if (status(x,y) == 2) {
        if (status(x,y+1) == 1 || y + 1 > yMax) {
          stop = 1;
        }
      }
    }
  }

    for (var x = xMax; x > 0; x--) {
      for (var y = yMax; y > 0; y--) {
        if (status(x,y) == 2) {
          if (!stop) {
            changeBlockStatus(x,y,0);
            changeBlockStatus(x,y+1,2);
            importantBlockY += 0.25;
          } else {
            changeBlockStatus(x,y,1);
            setTimeout(function() {
              clear();
              createBlock(repeat);
              repeat++;
            }, 1000);

            if (importantBlockY < 3)
              gameOver();
          }
        }
      }
    }
}

function moveBlockToBottom () {
  for (var repeat = 0; repeat < yMax; repeat++)
    moveBlockToDown(1); 
}

//clear
function clearLine (number) {
  for (var repeat = 1; repeat < xMax + 1; repeat++) {
    changeBlockStatus(repeat,number,0);
  }

  for (var x = 1; x < xMax + 1; x++) {
    for (var y = number - 1; y > 0; y--) {
      changeBlockStatus(x,y + 1, status(x,y));
    }
  }
  for (var x = 1; x < xMax; x++) {
    changeBlockStatus(x,1,0);
  }
}

function clear () {
  for (var y = 1; y < yMax + 1; y++) {
    if (status(1,y)+status(2,y)+status(3,y)+status(4,y)+status(5,y)+status(6,y)+status(7,y)+status(8,y)+status(9,y)+status(10,y) == 10) {
      clearLine(y);
    }
  }
}

//turn
document.onkeydown = function () {
    keyEvent = window.event;

    if (keyEvent.keyCode == '38') {
        // up arrow
      turnBlock();
    }
    else if (keyEvent.keyCode == '40') {
        // down arrow
      moveBlockToDown();
    }
    else if (keyEvent.keyCode == '37') {
       // left arrow
      moveBlockToLeft();
    }
    else if (keyEvent.keyCode == '39') {
       // right arrow
      moveBlockToRight();
    }
    else if (keyEvent.keyCode == '32') {
       // spaceBar
      moveBlockToBottom();
    }
}

function turnBlock () {
  var number = 0;
  if (blocksShape == 6) {
    console.log("T.T");
  } else if (blocksShape == 7) {
    if (blocksShapeNumber == 1 || blocksShapeNumber == 3 && status(importantBlockX - 1, importantBlockY) == 0 && status(importantBlockX + 1, importantBlockY) == 0 && status(importantBlockX + 2, importantBlockY) == 0) {
      changeBlockStatus(importantBlockX, importantBlockY + 2, 2);
      changeBlockStatus(importantBlockX, importantBlockY + 1, 2);
      changeBlockStatus(importantBlockX, importantBlockY - 1, 2);

      changeBlockStatus(importantBlockX - 1, importantBlockY,0);
      changeBlockStatus(importantBlockX + 1, importantBlockY,0);
      changeBlockStatus(importantBlockX + 2, importantBlockY,0);
    } else if(status(importantBlockX, importantBlockY - 1) == 0 && status(importantBlockX, importantBlockY + 1) == 0 && status(importantBlockX, importantBlockY + 2) == 0 ) {
      changeBlockStatus(importantBlockX, importantBlockY + 2, 0);
      changeBlockStatus(importantBlockX, importantBlockY + 1, 0);
      changeBlockStatus(importantBlockX, importantBlockY - 1, 0);

      changeBlockStatus(importantBlockX - 1, importantBlockY,2);
      changeBlockStatus(importantBlockX + 1, importantBlockY,2);
      changeBlockStatus(importantBlockX + 2, importantBlockY,2);
    }
  } else if(1<importantBlockX && importantBlockX < xMax && 1<importantBlockY && importantBlockY < yMax){
    var blocksTemp = [status(importantBlockX-1,importantBlockY-1),status(importantBlockX,importantBlockY-1),status(importantBlockX+1,importantBlockY-1),status(importantBlockX-1,importantBlockY),status(importantBlockX,importantBlockY),status(importantBlockX+1,importantBlockY),status(importantBlockX-1,importantBlockY+1),status(importantBlockX,importantBlockY+1),status(importantBlockX+1,importantBlockY+1)];

    if (status(importantBlockX,   importantBlockY) != 1 && status(importantBlockX,   importantBlockY-1) != 1 && status(importantBlockX+1,   importantBlockY-1) != 1 && status(importantBlockX-1,   importantBlockY) != 1 && status(importantBlockX+1,   importantBlockY) != 1 && status(importantBlockX-1,   importantBlockY+1) != 1 && status(importantBlockX,   importantBlockY+1) != 1 && status(importantBlockX+1,   importantBlockY+1) != 1) {
      changeBlockStatus(importantBlockX-1,   importantBlockY-1,  blocksTemp[6]);
      changeBlockStatus(importantBlockX,     importantBlockY-1,  blocksTemp[3]);
      changeBlockStatus(importantBlockX+1,   importantBlockY-1,  blocksTemp[0]);
      changeBlockStatus(importantBlockX-1,   importantBlockY,    blocksTemp[7]);
      changeBlockStatus(importantBlockX,     importantBlockY,    blocksTemp[4]);
      changeBlockStatus(importantBlockX+1,   importantBlockY,    blocksTemp[1]);
      changeBlockStatus(importantBlockX-1,   importantBlockY+1,  blocksTemp[8]);
      changeBlockStatus(importantBlockX,     importantBlockY+1,  blocksTemp[5]);
      changeBlockStatus(importantBlockX+1,   importantBlockY+1,  blocksTemp[2]);
    }
    
    console.log(1<importantBlockX && importantBlockX < xMax && 1<importantBlockY && importantBlockY < yMax);
  }

  if (blocksShapeNumber == 4)
    blocksShapeNumber = 0;
  blocksShapeNumber++;
}

//start game
function gameOver () {
  alert("game over!");
  window.location.replace('http://github.com/lastbranch02');
}
function repeat() {
  window.setInterval(() => {
    render();
  }, 1);
  window.setInterval(() => {
    moveBlockToDown(0);
  }, 1000);
}

function tetris() {
  CreateDivs();
  repeat();
  createBlock(0);
}

tetris();