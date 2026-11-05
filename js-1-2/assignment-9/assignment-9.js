const number = Number(prompt("Enter an integer:"));

let prime = number >= 2;

for (let i = 2; i <= Math.sqrt(number) && prime; i++) {
    if (number % i === 0) {
        prime = false;
    }
}

document.querySelector("#result").textContent =
    prime
        ? `${number} is a prime number.`
        : `${number} is not a prime number.`;