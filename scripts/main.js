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

let root = document.querySelector(".root");

let modalRoot =document.getElementById("modal-root");

let modal = document.querySelector(".modal");

let para = document.querySelector(".answer");

let close = document.querySelector(".close");

let selectBox = document.querySelector("#time");

let selectedOption = document.querySelector("#time").selectedIndex;

let totalClassTime = Number(selectBox.options[selectedOption].text);

selectBox.addEventListener("change", (event) => {
    totalClassTime = event.target.value;
});

let elapsedClassSeconds = (minutes * 60) + seconds;

let wastedTime = ((elapsedClassSeconds / (totalClassTime * 60)) * 100);


let calculate = function() {
  clearTimeout(t);
  modal.style.display = "block";
  modalRoot.style.display = "block";
  para.textContent = wastedTime + "%";
}

close.onclick = function() {
  modal.style.display = "none";
  modalRoot.style.display = "none";
}

modalRoot.onclick = function(event) {
    if (event.target == modalRoot) {
      modal.style.display = "none";
      modalRoot.style.display = "none";
    }
}