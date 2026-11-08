function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const sides = Number(prompt("How many sides?"));
const list = document.querySelector("#result");

if (sides >= 2) {
  let roll;

  do {
    roll = rollDice(sides);

    const item = document.createElement("li");
    item.textContent = roll;
    list.appendChild(item);

  } while (roll !== sides);

} else {
  list.textContent = "Enter at least 2 sides.";
}