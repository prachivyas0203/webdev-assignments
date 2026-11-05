const start = Number(prompt("Enter the start year:"));
const end = Number(prompt("Enter the end year:"));

const list = document.querySelector("#result");

for (let year = start; year <= end; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        const item = document.createElement("li");
        item.textContent = year;
        list.appendChild(item);
    }
}