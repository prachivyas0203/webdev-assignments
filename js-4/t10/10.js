const form = document.querySelector("#nameForm");

form.addEventListener("submit", event => {
  event.preventDefault();

  const first = form.querySelector('[name="firstname"]').value.trim();
  const last = form.querySelector('[name="lastname"]').value.trim();

  document.querySelector("#target").textContent = `Your name is ${first} ${last}`;
});