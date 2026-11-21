const picArray = [
    {
        title: "Forest path",
        medium: "https://placehold.co/420x260?text=Forest",
        large: "https://placehold.co/1000x700?text=Forest",
        caption: "A quiet path through the forest",
        description: "A peaceful green forest path on a bright day."
    },
    {
        title: "Mountain lake",
        medium: "https://placehold.co/420x260?text=Lake",
        large: "https://placehold.co/1000x700?text=Lake",
        caption: "A lake between the mountains",
        description: "Clear water surrounded by tall mountain peaks."
    }
];

const section = document.querySelector("#target");
const dialog = document.querySelector("dialog");
const closeButton = dialog.querySelector("span");
const largeImage = dialog.querySelector("img");

for (const picture of picArray) {
    const article = document.createElement("article");
    article.className = "card";

    const heading = document.createElement("h2");
    heading.textContent = picture.title;

    const figure = document.createElement("figure");

    const image = document.createElement("img");
    image.src = picture.medium;
    image.alt = picture.title;

    const caption = document.createElement("figcaption");
    caption.textContent = picture.caption;

    figure.append(image, caption);

    const description = document.createElement("p");
    description.textContent = picture.description;

    article.append(heading, figure, description);

    article.addEventListener("click", () => {
        largeImage.src = picture.large;
        largeImage.alt = picture.title;
        dialog.showModal();
    });

    section.appendChild(article);
}

closeButton.addEventListener("click", () => {
    dialog.close();
});