const diceCount = Number(prompt("How many dice?"));
const wantedSum = Number(prompt("What sum are you looking for?"));

const repetitions = 10000;
let matches = 0;

for (let i = 0; i < repetitions; i++) {
    let sum = 0;

    for (let j = 0; j < diceCount; j++) {
        sum += Math.floor(Math.random() * 6) + 1;
    }

    if (sum === wantedSum) {
        matches++;
    }
}

const probability = (matches / repetitions * 100).toFixed(2);

document.querySelector("#result").textContent =
    `Probability to get sum ${wantedSum} with ${diceCount} dice is ${probability}%`;