function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
const list = document.querySelector("#result");
let roll;
do {
  roll = rollDice();
  const item = document.createElement("li");
  item.textContent = roll;
  list.appendChild(item);
} while (roll !== 6);