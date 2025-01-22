
class PubSub {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  unsubscribe(eventName, listenerToRemove) {
    if (!this.events[eventName]) return;
    this.events[eventName] = this.events[eventName].filter(
      (listener) => listener !== listenerToRemove
    );
  }
  publish(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((listener) => listener(data));
    }
  }
}

const pubsub = new PubSub();

const routes = {
  "/": () => import("./home.js"),
  "/about": () => import("./about.js"),
  "/contact": () => import("./contact.js"),
};

const router = () => {
  const path = window.location.pathname || "/";
  const app = document.getElementById("app");
  app.innerHTML = "";

  if (routes[path]) {
    routes[path]()
      .then((module) => {
        const content = module.default();
        app.appendChild(content);

        pubsub.publish("routeChange", { path, content });
      })
      .catch((error) => {
        console.error("Error loading module:", error);
        showNotFound(app);
      });
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

  pubsub.publish("routeChange", { path: "404", content: app });
};

const navigate = (url) => {
  window.history.pushState(null, "", url);
  router();
};

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigate(e.target.getAttribute("href"));
  }
});

window.addEventListener("popstate", router);

pubsub.subscribe("routeChange", (data) => {
  console.log(`Route changed to: ${data.path}`);
});

router();
