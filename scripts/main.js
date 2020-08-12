var theTimer = document.getElementsByTagName('h3')[0],
    start = document.getElementById('start'),
    pause = document.getElementById('pause'),
    reset = document.getElementById('reset'),
    seconds = 0, minutes = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    
    theTimer.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}



/* Start button */
start.onclick = timer;

/* Stop button */
pause.onclick = function() {
    clearTimeout(t);
}

/* Reset button */
reset.onclick = function() {
    clearTimeout(t);
    theTimer.textContent = "00:00";
    seconds = 0; minutes = 0;
}

// var calculate = document.getElementById("calculate");

function getVars(){
var result = document.getElementById("result").textContent;
  document.getElementById("answer").innerHTML = result

result.textContent = function calcResult(){
  var n3 = parseInt(document.getElementById("classSeconds").value) = n1*60;
  var n4 = parseInt(document.getElementById("timerSeconds").value) = (int(minutes)*60)+int(seconds);
}
  n4 / n3;
}


var n1 = document.getElementById("classTime").value;
  /*var n2 = parseInt(document.getElementById("elapsed").value);*/

let root = document.querySelector(".root");

let modal = document.querySelector(".modal");

let para = document.querySelector(".answer");

let close = document.querySelector(".close");

let totalClassTime = document.querySelector(".totalClassTime");

let calculate = function() {
  clearTimeout(t);
  modal.style.display = "block";
  para.textContent = getPercentage();
}

let getPercentage = function() {
  totalClassTime = parseInt(totalClassTime, 10);
  let elapsedClassSeconds = parseInt((((minutes * 60) + seconds)), 10);
  let wastedTime = parseInt(((elapsedClassSeconds / (totalClassTime * 60)) * 100), 10);
  return wastedTime + "%";
}

close.onclick = function() {
  modal.style.display = "none";
}

root.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}