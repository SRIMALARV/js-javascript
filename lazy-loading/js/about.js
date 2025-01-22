export default function () {
  const container = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "About Us";

  const paragraph = document.createElement("p");
  paragraph.textContent = "We are a passionate team dedicated to delivering great experiences.";

  container.appendChild(heading);
  container.appendChild(paragraph);
  return container;
}
