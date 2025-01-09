function attachValidation() {
  const inputFields = document.querySelectorAll("input, textarea, select");

  inputFields.forEach((inputField) => {
    inputField.addEventListener("blur", () => {
      const currValue = inputField.value;
      const fieldName = inputField.id;

      let errorSpan = inputField.nextElementSibling;
      if (!errorSpan || errorSpan.className !== "error-message") {
        errorSpan = document.createElement("span");
        errorSpan.className = "error-message";
        errorSpan.style.color = "red";
        errorSpan.style.display = "block";
        inputField.parentNode.insertBefore(errorSpan, inputField.nextSibling);
      }

      if (currValue.length === 0) {
        showError(errorSpan, "This field is required.");
      }
      else if (fieldName === "firstName" || fieldName === "lastName") {
        if (!isAlphabetOnly(currValue)) {
          showError(errorSpan, "Only alphabets and spaces are allowed.");
        }
        else {
          hideError(errorSpan);
        }
      }
      else if (fieldName === "age") {
        if (!isPositiveNumber(currValue)) {
          showError(errorSpan, "Please enter a valid positive number.");
        }
        else {
          hideError(errorSpan);
        }
      }
      else if (fieldName === "email") {
        if (!isValidEmail(currValue)) {
          showError(errorSpan, "Please enter a valid email.");
        } 
        else {
          hideError(errorSpan);
        }
      }
      else if (fieldName === "password") {
        if (!isValidPassword(currValue)) {
          showError(errorSpan, "Password must be at least 8 characters, only at least one alphabet, number, and special character.");
        } 
        else {
          hideError(errorSpan);
        }
      }
      else if (currValue.length > 20) {
        showError(errorSpan, "Maximum length is 20 characters");
      }
      else {
        hideError(errorSpan);
      }
    });
  });

  function isAlphabetOnly(value) {
    for (let i = 0; i < value.length; i++) {
      const char = value[i];
      if (!(char >= "A" && char <= "Z") &&
        !(char >= "a" && char <= "z") &&
        char !== " ") {
        return false;
      }
      if (char === " " && (i === 0 || i === value.length - 1)) {
        return false;
      }
    }
    return true;
  }

  function isPositiveNumber(value) {
    if (isNaN(value)) return false;
    const num = parseFloat(value);
    return num > 0;
  }

  function isValidEmail(value) {
    const atIndex = value.indexOf('@');
    const dotIndex = value.lastIndexOf('.');
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < value.length - 1;
  }

  function isValidPassword(value) {
    if (value.length < 8) {
      return false;
    }

    let hasAlphabet = false;
    let hasNumber = false;
    let hasSpecialChar = false;

    for (let i = 0; i < value.length; i++) {
      const char = value[i];
      if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
        hasAlphabet = true;
      } else if (char >= "0" && char <= "9") {
        hasNumber = true;
      } else if (char === "@" || char === "_" || char === "#" || char ==="&" || char ==="-") {
        hasSpecialChar = true;
      }
      else if(char === " ") {
        return false;
      }
    }

    return hasAlphabet && hasNumber && hasSpecialChar;
  }

  function showError(span, message) {
    span.textContent = message;
  }

  function hideError(span) {
    span.textContent = "";
  }
}

function buildHTMLStructure(elements, parentElement = document.body) {
  elements.forEach((element) => {
    const htmlElement = document.createElement(element.tag);
    if (element.attributes) {
      for (let attr in element.attributes) {
        htmlElement.setAttribute(attr, element.attributes[attr]);
      }
    }
    if (element.class) {
      htmlElement.className = element.class;
    }
    if (element.style) {
      for (let styleKey in element.style) {
        htmlElement.style[styleKey] = element.style[styleKey];
      }
    }
    if (element.text) {
      htmlElement.innerHTML = element.text;
    }
    parentElement.appendChild(htmlElement);

    if (element.children) {
      buildHTMLStructure(element.children, htmlElement);
    }
  });
}

// Form structure
const userForm = [
  {
    tag: "div", 
    class: "form-page",
    children: [
      {
        tag: "form",
        class: "card",
        attributes: { id: "userForm", method: "post" },
        children: [
          {
            tag: "div",
            children: [
              {
                tag: "div",
                children: [
                  {
                    tag: "label",
                    attributes: { for: "firstName" },
                    text: "First Name: ",
                  },
                  {
                    tag: "input",
                    attributes: { type: "text", id: "firstName", name: "firstName", placeholder: "Enter first name", required: true },
                  },
                ],
              },
              {
                tag: "div",
                children: [
                  {
                    tag: "label",
                    attributes: { for: "lastName" },
                    text: "Last Name: ",
                  },
                  {
                    tag: "input",
                    attributes: { type: "text", id: "lastName", name: "lastName", placeholder: "Enter last name", required: true },
                  },
                ],
              },
            ],
          },
          {
            tag: "div",
            children: [
              {
                tag: "div",
                children: [
                  {
                    tag: "label",
                    attributes: { for: "age" },
                    text: "Age: ",
                  },
                  {
                    tag: "input",
                    attributes: { type: "number", id: "age", name: "age", placeholder: "Enter age", required: true },
                  },
                ],
              },
              {
                tag: "div",
                children: [
                  {
                    tag: "label",
                    attributes: { for: "gender" },
                    text: "Gender: ",
                  },
                  {
                    tag: "select",
                    attributes: { id: "gender", name: "gender", required: true },
                    children: [
                      { tag: "option", attributes: { value: "male" }, text: "Male" },
                      { tag: "option", attributes: { value: "female" }, text: "Female" },
                      { tag: "option", attributes: { value: "other" }, text: "Other" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            tag: "div",
            children: [
              {
                tag: "div",
                children: [
                  {
                    tag: "label",
                    attributes: { for: "email" },
                    text: "Email: ",
                  },
                  {
                    tag: "input",
                    attributes: { type: "email", id: "email", name: "email", placeholder: "Enter email", required: true },
                  },
                ],
              },
              {
                tag: "div",
                children: [
                  {
                    tag: "label",
                    attributes: { for: "password" },
                    text: "Password: ",
                  },
                  {
                    tag: "input",
                    attributes: { type: "password", id: "password", name: "password", placeholder: "Enter password", required: true },
                  },
                ],
              },
            ],
          },
          {
            tag: "div",
            children: [
              {
                tag: "div",
                children: [
                  {
                    tag: "label",
                    attributes: { for: "address" },
                    text: "Address: ",
                  },
                  {
                    tag: "textarea",
                    attributes: { id: "address", name: "address", placeholder: "Enter address", rows: "3", cols: "30", required: true },
                  },
                ],
              },
            ],
          },
          {
            tag: "button",
            attributes: { type: "submit" },
            text: "Submit",
          },
        ],
      },
    ],
  },
];

buildHTMLStructure(userForm);
attachValidation();
