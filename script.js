let score = 0;
let timeLeft = 30;
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const clickButton = document.getElementById('clickButton');

clickButton.addEventListener('click', () => {
    if (timeLeft > 0) {
        score++;
        scoreDisplay.textContent = score;
    }
});

const countdown = setInterval(() => {
    if (timeLeft > 0) {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
    } else {
        clearInterval(countdown);
        clickButton.disabled = true;
        clickButton.textContent = '게임 종료';
    }
}, 1000);
