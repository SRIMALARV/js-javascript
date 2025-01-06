const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "style.css";
document.head.appendChild(link);

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
