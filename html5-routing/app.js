const routes = {
  "/": `
    <h1>Welcome to Our Website</h1>
    <p>This is the home page. Explore our site to learn more about us!</p>
  `,
  "/about": `
    <h1>About Us</h1>
    <p>We are a passionate team dedicated to delivering great experiences.</p>
  `,
  "/contact": `
    <h1>Contact Us</h1>
    <p>Reach out to us at:</p>
      <li>Email: contact@gmail.com</li>
      <li>Phone: +91 1234 1234</li>
  `,
};
const router = () => {
  const path = window.location.pathname || "/";
  const app = document.getElementById("app");
  app.innerHTML = routes[path] || `
    <h1>404 - Page Not Found</h1>
    <p> Please go back to <a href="/" data-link>Home</a>.</p>
  `;
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