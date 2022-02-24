const setTimer = document.querySelector("#input-timer");
const setButton = document.querySelector("#button-timer");
const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
    window.location.reload();
})

setButton.addEventListener("click", () => {
  const inputValue = setTimer.value;
  let countDownDate = new Date(inputValue).getTime();

  let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let timer = document.getElementById("timer");
    timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
      clearInterval(x);
      timer.innerHTML = "Time Up!";
    }
  }, 1000);
});
