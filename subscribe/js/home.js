import { pubsub, marks } from './pubsub.js';

const renderHome = (app, navigate) => {
  const homeHeading = document.createElement("h1");
  homeHeading.textContent = "Home Page";

  const form = document.createElement("form");

  const formHeading = document.createElement("h2");
  formHeading.textContent = "Enter Marks";
  form.appendChild(formHeading);

  marks.forEach((mark, index) => {
    const label = document.createElement("label");
    label.setAttribute("for", `mark${index}`);
    label.textContent = `Mark ${index + 1}:`;

    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", `mark${index}`);
    input.setAttribute("value", mark);
    input.setAttribute("min", "0");
    input.setAttribute("max", "100");

    form.appendChild(label);
    form.appendChild(input);

    form.appendChild(document.createElement("br"));
  });

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Go to About";
  form.appendChild(submitButton);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const updatedMarks = marks.map((_, index) => {
      const input = document.getElementById(`mark${index}`);
      return parseInt(input.value, 10);
    });

    pubsub.publish("marksUpdated", { marks: updatedMarks });

    navigate('/about');
  });

  app.appendChild(homeHeading);
  app.appendChild(form);
};

export { renderHome };

