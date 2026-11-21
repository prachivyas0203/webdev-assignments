const target = document.querySelector("#target");

["First item", "Second item", "Third item"].forEach((text, index) => {
  const item = document.createElement("li");
  item.textContent = text;

  if (index === 1) {
    item.classList.add("my-item");
  }

  target.appendChild(item);
});