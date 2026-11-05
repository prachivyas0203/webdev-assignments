const name = prompt("What is your name?");
document.querySelector("#result").textContent = `Hello, ${name || "there"}!`;