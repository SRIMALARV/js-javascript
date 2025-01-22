const routes = {
  "/": () => {
    const container = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Our Website";

    const paragraph = document.createElement("p");
    paragraph.textContent = "This is the home page. Explore our site to learn more about us!";

    container.appendChild(heading);
    container.appendChild(paragraph);
    return container;
  },

  "/about": () => {
    const container = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "About Us";

    const paragraph = document.createElement("p");
    paragraph.textContent = "We are a passionate team dedicated to delivering great experiences.";

    container.appendChild(heading);
    container.appendChild(paragraph);
    return container;
  },

  "/contact": () => {
    const container = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Reach out to us at:";

    const list = document.createElement("ul");

    const emailItem = document.createElement("li");
    emailItem.textContent = "Email: contact@gmail.com";

    const phoneItem = document.createElement("li");
    phoneItem.textContent = "Phone: +91 1234 1234";

    list.appendChild(emailItem);
    list.appendChild(phoneItem);

    container.appendChild(heading);
    container.appendChild(paragraph);
    container.appendChild(list);

    return container;
  },
};

const showNotFound = () => {
  const container = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "404 - Page Not Found";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Please go back to ";

  const link = document.createElement("a");
  link.href = "/";
  link.setAttribute("data-link", "");
  link.textContent = "Home";

  paragraph.appendChild(link);
  container.appendChild(heading);
  container.appendChild(paragraph);

  return container;
};

const router = () => {
  const path = window.location.pathname || "/";
  const app = document.getElementById("app");
  app.innerHTML = ""; 
  const page = routes[path] ? routes[path]() : showNotFound();
  app.appendChild(page);
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

router();
