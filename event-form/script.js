function showError(event, errorMessageElement) {
    event.preventDefault();
    errorMessageElement.style.display = 'block';
}

function hideError(errorMessageElement) {
    errorMessageElement.style.display = 'none';
}

const inputelements = document.querySelectorAll('input[type="text"]');
inputelements.forEach(element => {
    element.addEventListener("paste", (event) => {
        event.preventDefault();
    });
});

//1.
const inputField = document.getElementById('name');
const errorAlphabet = document.getElementById('error-alphabet');
const errorLength = document.getElementById('error-len');
const errorSpace = document.getElementById('error-space');
const errorSpaceInvalid = document.getElementById('error-spacing');

inputField.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode || event.which;
    const currValue = inputField.value;
    if (keyCode === 32 && currValue.length === 0) { //to check space at start
        showError(event, errorSpace);
    }
    else {
        hideError(errorSpace);
    }
    if (keyCode === 32 && currValue[currValue.length - 1] === ' ') { //to check consecutive space
        showError(event, errorSpaceInvalid);
    }
    else {
        hideError(errorSpaceInvalid);
    }
    if ((keyCode >= 65 && keyCode <= 90) ||
        (keyCode >= 97 && keyCode <= 122) ||
        keyCode === 8 ||
        keyCode === 32) { //allows alphabets & space & backspace
        hideError(errorAlphabet);
    } else {
        showError(event, errorAlphabet);
    }
    if (currValue.length >= 20 && keyCode !== 8) { //check length
        showError(event, errorLength);
    }
    else {
        hideError(errorLength);
    }
    if (currValue[0] !== currValue[0].toUpperCase()) { //capitalise 1st letter
        inputField.value = currValue[0].toUpperCase();
    }
    if (currValue[currValue.length - 2] === ' ') { //capitalise 1st letter after space
        inputField.value = currValue.slice(0, currValue.length - 1) + currValue[currValue.length - 1].toUpperCase();
    }
});

//2.
const inputName = document.getElementById('lname');
const errorLetters = document.getElementById('error-letters');

inputName.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode || event.which;
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || keyCode === 8) {
        hideError(errorLetters);
    } else {
        showError(event, errorLetters);
    }
});

//3.
const inputNumber = document.getElementById('number');
const errorNumber = document.getElementById('error-number');
const errorDecimal = document.getElementById('error-decimal');

inputNumber.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode || event.which;
    const currValue = inputNumber.value;
    if (!((keyCode >= 48 && keyCode <= 57) || keyCode === 190 || keyCode === 8)) { //allow only numbers
        showError(event, errorNumber);
    }
    else {
        hideError(errorNumber);
    }
    if (currValue.includes('.') && keyCode === 190) { //allow only 1 dot
        showError(event, errorDecimal);
    }
    else {
        hideError(errorDecimal);
    }
    if (currValue.includes('.') && keyCode >= 48 && keyCode <= 57) { //allow only 2 digits after .
        const parts = currValue.split('.');
        const decimalPart = parts[1] || ' ';

        if (decimalPart.length >= 2) {
            showError(event, errorDecimal);
        } else {
            hideError(errorDecimal);
        }
    }
});

//4. 
const inputUser = document.getElementById('username');
const errorUsername = document.getElementById('error-user');

inputUser.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode || event.which;
    if ((!event.shiftKey && keyCode >= 48 && keyCode <= 57) ||
        (keyCode >= 65 && keyCode <= 90) ||
        (keyCode >= 97 && keyCode <= 122) ||
        keyCode === 8) {
        hideError(errorUsername);
    }
    else {
        showError(event, errorUsername);
    }
});