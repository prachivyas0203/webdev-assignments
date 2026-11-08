const dogs = [];

for (let i = 0; i < 6; i++) {
    dogs.push(prompt(`Name of dog ${i + 1}:`));
}

dogs.sort((a, b) => b.localeCompare(a));

const list = document.querySelector("#result");

for (const dog of dogs) {
    const item = document.createElement("li");
    item.textContent = dog;
    list.appendChild(item);
}