const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "style.css";
document.head.appendChild(link);

function buildHTMLStructure(elements, parentId = "body") {
  elements.forEach((element) => {
    const htmlElement = document.createElement(element.tag);

    if (parentId === "body") {
      document.body.appendChild(htmlElement);
    } else {
      document.getElementById(parentId).appendChild(htmlElement);
    }
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
    if (element.children) {
      buildHTMLStructure(element.children, element.attributes?.id);
    }
  });
}

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
            tag: "label",
            attributes: { for: "firstName" },
            text: "First Name: ",
          },
          {
            tag: "input",
            attributes: { type: "text", id: "firstName", name: "firstName", required: true },
          },
          { tag: "br" },
          {
            tag: "label",
            attributes: { for: "lastName" },
            text: "Last Name: ",
          },
          {
            tag: "input",
            attributes: { type: "text", id: "lastName", name: "lastName", required: true },
          },
          { tag: "br" },
          {
            tag: "label",
            attributes: { for: "age" },
            text: "Age: ",
          },
          {
            tag: "input",
            attributes: { type: "number", id: "age", name: "age", required: true },
          },
          { tag: "br" },
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
          { tag: "br" },
          {
            tag: "label",
            attributes: { for: "email" },
            text: "Email: ",
          },
          {
            tag: "input",
            attributes: { type: "email", id: "email", name: "email", required: true },
          },
          { tag: "br" },
          {
            tag: "label",
            attributes: { for: "password" },
            text: "Password: ",
          },
          {
            tag: "input",
            attributes: { type: "password", id: "password", name: "password", required: true },
          },
          { tag: "br" },
          {
            tag: "label",
            attributes: { for: "address" },
            text: "Address: ",
          },
          {
            tag: "textarea",
            attributes: { id: "address", name: "address", rows: "3", cols: "30", required: true },
          },
          { tag: "br" },
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
