const numbers = [];

let number = Number(prompt("Enter a number (0 stops):"));

while (number !== 0) {
    numbers.push(number);
    number = Number(prompt("Enter another number (0 stops):"));
}

numbers.sort((a, b) => b - a);

console.log(numbers);