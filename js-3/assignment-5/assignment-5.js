const numbers = [];

while (true) {
  const number = Number(prompt("Enter a number:"));

  if (numbers.includes(number)) {
    alert("This number has already been given.");
    break;
  }

  numbers.push(number);
}

numbers.sort((a, b) => a - b);
console.log(numbers);