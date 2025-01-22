
import { pubsub, marks } from './pubsub.js';

const renderAbout = (app) => {
  const aboutHeading = document.createElement("h1");
  aboutHeading.textContent = "About Page";

  const total = marks.reduce((acc, mark) => acc + mark, 0);
  const average = total / marks.length;

  const stats = document.createElement("p");
  stats.textContent = `Total Marks: ${total}, Average: ${average.toFixed(2)}`;

  app.appendChild(aboutHeading);
  app.appendChild(stats);
};
pubsub.subscribe("marksUpdated", (data) => {
  marks.length = 0; 
  marks.push(...data.marks); 
});

export { renderAbout };