export default function () {
  const container = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Reach out to us at:";

  const emailItem = document.createElement("li");
  emailItem.textContent = "Email: contact@gmail.com";

  const phoneItem = document.createElement("li");
  phoneItem.textContent = "Phone: +91 1234 1234";

  const list = document.createElement("ul");
  list.appendChild(emailItem);
  list.appendChild(phoneItem);

  container.appendChild(heading);
  container.appendChild(paragraph);
  container.appendChild(list);

  return container;
}
