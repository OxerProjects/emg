// Timer

const countdownEl  = document.querySelector('#timer')
const startStopBtn = document.querySelector('#start')
const resetBtn  = document.querySelector('#reset')

let time = 600; // the initial time in seconds
let countdownInterval; // the interval ID for the countdown
let isCountingDown = false;

function startCountdown() {
  countdownInterval = setInterval(() => {
    time--;
    if (time < 0) {
      clearInterval(countdownInterval);
      return;
    }
    updateTime();
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
}

function resetCountdown() {
  time = 600;
  updateTime();
  if (isCountingDown) {
    stopCountdown();
    startCountdown();
  }
}
function updateTime() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  countdownEl.innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

startStopBtn.addEventListener('click', () => {
  if (isCountingDown) {
    stopCountdown();
    startStopBtn.innerText = 'התחל';
  } else {
    startCountdown();
    startStopBtn.innerText = 'עצור';
  }
  isCountingDown = !isCountingDown; // toggle the flag
});

resetBtn.addEventListener('click', resetCountdown);

updateTime();
