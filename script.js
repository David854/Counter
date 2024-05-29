let count = 0;

const counterElement = document.querySelector("#counter");
const incrementButton = document.querySelector("#plus");
const decrementButton = document.querySelector("#minus");
const resetButton = document.querySelector("#reset");
const setValueButton = document.querySelector("#set-value");
const clickSound = new Audio('click.mp3');

incrementButton.addEventListener('click', () => {
    playSound();
    count++;
    updateCounter();
});

decrementButton.addEventListener('click', () => {
    playSound();
    count--;
    updateCounter();
});

resetButton.addEventListener('click', () => {
    playSound();
    count = 0;
    updateCounter();
});

setValueButton.addEventListener('click', () => {
    const userValue = prompt("Enter the new counter value:", count);
    if (userValue !== null) {
        const newValue = parseInt(userValue, 10);
        if (!isNaN(newValue)) {
            playSound();
            count = newValue;
            updateCounter();
        } else {
            alert("Please enter a valid number.");
        }
    }
});

function updateCounter() {
    counterElement.textContent = count;
    counterElement.classList.add('update');
    setTimeout(() => counterElement.classList.remove('update'), 500);
}

function playSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}