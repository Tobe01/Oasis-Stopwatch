// Javascript source codes for stop watch project
document.addEventListener('DOMContentLoaded', function() {
  let startTime;
  let elapsedTime = 0;
  let timerInterval;
  let isRunning = false;

  const stopwatchDisplay = document.getElementById('stopwatch');
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');
  const holdBtn = document.getElementById('holdBtn');

  function formatTime(milliseconds) {
      const hours = Math.floor(milliseconds / 3600000);
      const minutes = Math.floor((milliseconds % 3600000) / 60000);
      const seconds = Math.floor((milliseconds % 60000) / 1000);
      return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  function updateStopwatch() {
      const currentTime = Date.now();
      elapsedTime = currentTime - startTime;
      stopwatchDisplay.textContent = formatTime(elapsedTime);
  }

  function startStopwatch() {
      if (!isRunning) {
          startTime = Date.now() - elapsedTime;
          timerInterval = setInterval(updateStopwatch, 1000);
          isRunning = true;
      }
  }

  function stopStopwatch() {
      clearInterval(timerInterval);
      isRunning = false;
  }

  function holdStopwatch() {
      if (isRunning) {
          clearInterval(timerInterval);
          isRunning = false;
      } else {
          startStopwatch();
      }
  }

  startBtn.addEventListener('click', startStopwatch);
  stopBtn.addEventListener('click', stopStopwatch);
  holdBtn.addEventListener('click', holdStopwatch);
});