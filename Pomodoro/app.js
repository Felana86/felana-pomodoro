let initialTime = 1800;
let restTime = 300;

function returnFormattedTime(time) {
    return `${Math.trunc(time/60)}:${time % 60 < 10 ? `0${time % 60}` : time % 60}`
}

const displayWork = document.querySelector(".work-display-time")
const displayPause = document.querySelector(".pause-display-time")

displayWork.textContent = returnFormattedTime(initialTime)
displayPause.textContent = returnFormattedTime(restTime)

const startPauseBtn = document.querySelector(".start-btn");
startPauseBtn.addEventListener("click", togglePomodoro)

let currentInterval = false;
let timerID;
function togglePomodoro(){
    handlePlayPause()

    if(currentInterval) return;
    currentInterval = true;

    initialTime--;
    displayWork.textContent = returnFormattedTime(initialTime)
  //handleClassAnimation({work: true, rest: false})

    timerID = setInterval(handleTicks, 1000)
}

let pause = true;
function handlePlayPause(){
    if(startPauseBtn.firstElementChild.src.includes("play")) {
    startPauseBtn.firstElementChild.src = "ressources/pause.svg"
    pause = false;
    }
    else {
    startPauseBtn.firstElementChild.src = "ressources/play.svg"
    pause = true;
    }
}

const cycles = document.querySelector(".cycles")
let cycleNumber = 0;

function handleTicks() {

    if(!pause &&  initialTime > 0) {
        initialTime--;
        displayWork.textContent = returnFormattedTime(initialTime)
    }
    else if(!pause && initialTime === 0 && restTime > 0) {
        restTime--;
        displayPause.textContent = returnFormattedTime(restTime)
    }
    else {
        initialTime = 1799;
        restTime = 300;
        displayWork.textContent = returnFormattedTime(initialTime)
        displayPause.textContent = returnFormattedTime(restTime)
        cycleNumber++;
        cycleNumber.textContent = `Cycle(s) : ${cycleNumber}`

    }
}