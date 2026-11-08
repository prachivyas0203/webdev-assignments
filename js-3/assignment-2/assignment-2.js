const count = Number(prompt("How many participants?"));

const names = [];

for (let i = 0; i < count; i++) {
    names.push(prompt(`Name ${i + 1}:`));
}

names.sort((a, b) => a.localeCompare(b));

const list = document.querySelector("#result");

for (const name of names) {
    const item = document.createElement("li");
    item.textContent = name;
    list.appendChild(item);
}