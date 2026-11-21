document.querySelector("#calculate").addEventListener("click", () => {
  const expression = document.querySelector("#calculation").value.replaceAll(" ", "");
  const result = document.querySelector("#result");
  let operator = "";

  for (const symbol of ["+", "-", "*", "/"]) {
    if (expression.indexOf(symbol, 1) !== -1) {
      operator = symbol;
      break;
    }
  }

  if (!operator) {
    result.textContent = "Enter a valid calculation.";
    return;
  }

  const parts = expression.split(operator);

  if (parts.length !== 2 || parts.some(part => part === "" || !Number.isInteger(Number(part)))) {
    result.textContent = "Enter two integers and one operator.";
    return;
  }

  const a = Number(parts[0]), b = Number(parts[1]);
  let answer;

  if (operator === "+") answer = a + b;
  if (operator === "-") answer = a - b;
  if (operator === "*") answer = a * b;
  if (operator === "/") answer = b === 0 ? "Cannot divide by zero." : a / b;

  result.textContent = `Result: ${answer}`;
});