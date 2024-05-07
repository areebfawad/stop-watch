let timerInterval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function startStop() {
  const startStopButton = document.getElementById("start-stop");
  if (startStopButton.innerHTML === "Start") {
    startStopButton.innerHTML = "Stop";
    timerInterval = setInterval(updateTimer, 10);
  } else {
    startStopButton.innerHTML = "Start";
    clearInterval(timerInterval);
  }
}

function reset() {
  clearInterval(timerInterval);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  updateDisplay();
  document.getElementById("start-stop").innerHTML = "Start";
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  const lapsList = document.getElementById("laps");
  const lapTime = `${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
  const lapItem = document.createElement("li");
  lapItem.textContent = lapTime;
  lapsList.appendChild(lapItem);
}

function updateTimer() {
  milliseconds++;
  if (milliseconds == 100) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  document.querySelector(".minutes").innerHTML = padZero(minutes);
  document.querySelector(".seconds").innerHTML = padZero(seconds);
  document.querySelector(".milliseconds").innerHTML = padZero(milliseconds);
}

function padZero(value) {
  return value < 10 ? `0${value}` : value;
}
