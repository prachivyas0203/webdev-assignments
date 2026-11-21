document.querySelector("#start").addEventListener("click", function() {

    const num1 = Number(document.querySelector("#num1").value);
    const num2 = Number(document.querySelector("#num2").value);

    const operation = document.querySelector("#operation").value;

    let answer;

    if (operation === "+") {
        answer = num1 + num2;
    }
    else if (operation === "-") {
        answer = num1 - num2;
    }
    else if (operation === "*") {
        answer = num1 * num2;
    }
    else if (operation === "/") {
        answer = num1 / num2;
    }

    document.querySelector("#result").textContent = answer;

});