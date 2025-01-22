export default function () {
  const container = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to the Home Page";

  const paragraph = document.createElement("p");
  paragraph.textContent = "This is the homepage. Explore more pages!";

  container.appendChild(heading);
  container.appendChild(paragraph);

  return container;
}
