const count = Number(prompt("How many dice should be rolled?"));

let sum = 0;

for (let i = 0; i < count; i++) {
    sum += Math.floor(Math.random() * 6) + 1;
}

document.querySelector("#result").textContent = `Sum: ${sum}`;