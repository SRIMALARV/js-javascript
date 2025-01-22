import { pubsub, resetMarks } from './pubsub.js';
import { renderHome } from './home.js';
import { renderAbout } from './about.js';

const routes = {
  "/": renderHome,
  "/about": renderAbout,
};

let currentSubscription = null; 

const router = () => {
  const path = window.location.pathname || "/";
  const app = document.getElementById("app");
  app.innerHTML = ""; 

  if (currentSubscription) {
    pubsub.unsubscribe(currentSubscription); 
    currentSubscription = null;
  }

  if (routes[path]) {
    const pageRenderFunction = routes[path];

    if (path === "/about") {
      currentSubscription = pubsub.subscribe("marksUpdated", updateAboutPage);
    }
    else if (path === "/") {
      resetMarks(); 
      currentSubscription = pubsub.subscribe("marksUpdated", updateHomePage);
    }

    pageRenderFunction(app, navigate); 
  } else {
    showNotFound(app); 
  }
};

const showNotFound = (app) => {
  const notFoundHeading = document.createElement("h1");
  notFoundHeading.textContent = "404 - Page Not Found";

  const notFoundMessage = document.createElement("p");
  notFoundMessage.textContent = "Please go back to Home";

  app.appendChild(notFoundHeading);
  app.appendChild(notFoundMessage);
};

const navigate = (url) => {
  window.history.pushState(null, "", url);
  router();
};

const updateHomePage = (data) => {
  const form = document.querySelector("form");
  if (form) {
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input, index) => {
      input.value = data.marks[index];
    });
  }
};

const updateAboutPage = (data) => {
  const total = data.marks.reduce((acc, mark) => acc + mark, 0);
  const average = total / data.marks.length;

  const stats = document.querySelector("p");
  if (stats) {
    stats.textContent = `Total Marks: ${total}, Average: ${average.toFixed(2)}`;
  }
};

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigate(e.target.getAttribute("href"));
  }
});

window.addEventListener("popstate", router);

router();
