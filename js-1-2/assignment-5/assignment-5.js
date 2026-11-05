const year = Number(prompt("Enter a year:"));

const leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

document.querySelector("#result").textContent =
    leap ? `${year} is a leap year.` : `${year} is not a leap year.`;