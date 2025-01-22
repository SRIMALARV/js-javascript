const data = {
  tamil: 70,
  english: 80,
  maths: 60,
  science: 90,
  social: 50,
};

const calculateTotal = () => {
  return Object.values(data).reduce((sum, mark) => sum + (Number(mark) || 0), 0);
};

const calculateAverage = () => {
  const totalMarks = calculateTotal();
  const subjectCount = Object.keys(data).length;
  return totalMarks / subjectCount;
};

// Function to create and style an element
const createElement = (tag, options = {}) => {
  const element = document.createElement(tag);

  if (options.attributes) {
    for (const [key, value] of Object.entries(options.attributes)) {
      element.setAttribute(key, value);
    }
  }

  if (options.styles) {
    for (const [key, value] of Object.entries(options.styles)) {
      element.style[key] = value;
    }
  }

  if (options.text) {
    element.textContent = options.text;
  }

  return element;
};

const renderUI = () => {
  const container = createElement("div", {
    styles: {
      maxWidth: "400px",
      margin: "20px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
    },
  });

  const heading = createElement("h2", {
    text: "Marks Calculator",
    styles: { textAlign: "center", marginBottom: "20px" },
  });
  container.appendChild(heading);

  const marksContainer = createElement("div");
  for (const key in data) {
    const subjectWrapper = createElement("div", {
      styles: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
      },
    });

    const label = createElement("label", {
      text: `${key.charAt(0).toUpperCase() + key.slice(1)}:`,
      styles: { fontWeight: "bold", textTransform: "capitalize" },
    });

    const input = createElement("input", {
      attributes: { type: "text", value: data[key], "data-key": key },
      styles: { width: "100px", padding: "5px", border: "1px solid #ccc" },
    });

    input.addEventListener("input", (event) => handleInputChange(event));

    subjectWrapper.appendChild(label);
    subjectWrapper.appendChild(input);
    marksContainer.appendChild(subjectWrapper);
  }
  container.appendChild(marksContainer);

  const totalDisplay = createElement("div", {
    text: `Total: ${calculateTotal()}`,
    styles: {
      marginTop: "20px",
      textAlign: "center",
      fontSize: "1.2em",
      color: "#333",
    },
  });
  totalDisplay.id = "total-display";
  container.appendChild(totalDisplay);

  const averageDisplay = createElement("div", {
    text: `Average: ${calculateAverage().toFixed(2)}`,
    styles: {
      marginTop: "10px",
      textAlign: "center",
      fontSize: "1.2em",
      color: "#333",
    },
  });
  averageDisplay.id = "average-display";
  container.appendChild(averageDisplay);

  document.body.appendChild(container);
};

const handleInputChange = (event) => {
  const key = event.target.getAttribute("data-key");
  const value = event.target.value.trim();

  if (!isNaN(value)) {
    data[key] = value ? Number(value) : 0;
    updateUI();
  } else {
    alert("Please enter a valid number.");
    event.target.value = data[key];
  }
};

const updateUI = () => {
  const totalDisplay = document.getElementById("total-display");
  totalDisplay.textContent = `Total: ${calculateTotal()}`;

  const averageDisplay = document.getElementById("average-display");
  averageDisplay.textContent = `Average: ${calculateAverage().toFixed(2)}`;
};

renderUI();
