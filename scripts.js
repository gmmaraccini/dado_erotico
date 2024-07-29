const actions = ["Lamber", "Chupar", "Beijar", "Massagear", "Acariciar", "Morder", "Cheirar", "Apertar", "Explorar", "Tocar"];
const maleBodyParts = ["Peito", "Nuca", "Orelha", "Barriga", "Perna", "Mão", "Pênis", "Escroto", "Coxas", "Bunda"];
const femaleBodyParts = ["Peito", "Nuca", "Orelha", "Barriga", "Perna", "Mão", "Vagina", "Clitóris", "Coxas", "Bunda"];
const times = ["10 segundos", "20 segundos", "30 segundos", "40 segundos", "50 segundos", "60 segundos"];

const actionDice = document.getElementById('action-dice');
const maleBodyDice = document.getElementById('male-body-dice');
const femaleBodyDice = document.getElementById('female-body-dice');
const timeDice = document.getElementById('time-dice');

function rollDice(options, diceElement) {
    diceElement.classList.add('rolling');
    const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * options.length);
        diceElement.textContent = options[randomIndex];
    }, 100); // Change text every 100ms to simulate rolling

    setTimeout(() => {
        clearInterval(interval);
        const randomIndex = Math.floor(Math.random() * options.length);
        diceElement.textContent = options[randomIndex];
        diceElement.classList.remove('rolling');
    }, 5000); // 5 seconds
}

actionDice.addEventListener('click', () => {
    rollDice(actions, actionDice);
});

maleBodyDice.addEventListener('click', () => {
    rollDice(maleBodyParts, maleBodyDice);
});

femaleBodyDice.addEventListener('click', () => {
    rollDice(femaleBodyParts, femaleBodyDice);
});

timeDice.addEventListener('click', () => {
    rollDice(times, timeDice);
});
