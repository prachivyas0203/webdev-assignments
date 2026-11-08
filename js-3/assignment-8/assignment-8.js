function concat(strings) {
  let result = "";
  for (const value of strings) result += value;
  return result;
}
document.querySelector("#result").textContent =
  concat(["Johnny", "DeeDee", "Joey", "Marky"]);