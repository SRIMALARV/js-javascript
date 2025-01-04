//1.
const inputField = document.getElementById('name');
const errorMessage1 = document.getElementById('error-alphabet');
const errorMessage2 = document.getElementById('error-len');
const errorMessage3 = document.getElementById('error-space');
const errorMessage4 = document.getElementById('error-spacing');

inputField.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode || event.which;
    const currValue = inputField.value;
    if (keyCode === 32 && currValue.length === 0) { //to check space  at start
        event.preventDefault();
        errorMessage3.style.display = 'block';
    }
    else {
        errorMessage3.style.display = 'none';
    }
    if (keyCode === 32 && currValue[currValue.length - 1] === ' ') { //to check consecutive space
        event.preventDefault();
        errorMessage4.style.display = 'block';
    }
    else {
        errorMessage4.style.display = 'none';
    }
    if ((keyCode >= 65 && keyCode <= 90) ||
        (keyCode >= 97 && keyCode <= 122) ||
        keyCode === 8 ||
        keyCode === 32) { //allows alphabets & space & backspace
        errorMessage1.style.display = 'none';
    } else {
        event.preventDefault();
        errorMessage1.style.display = 'block';
    }
    if (currValue.length >= 20 && keyCode !== 8) { //check length
        event.preventDefault();
        errorMessage2.style.display = 'block';
    }
    else {
        errorMessage2.style.display = 'none';
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
const errorMessage5 = document.getElementById('error-letters');

inputName.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode || event.which;
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || keyCode === 8) {
        errorMessage5.style.display = 'none';
    } else {
        event.preventDefault();
        errorMessage5.style.display = 'block';
    }
});

//3.
const inputNumber = document.getElementById('number');
const errorMessage6 = document.getElementById('error-number');
const errorMessage7 = document.getElementById('error-decimal');

inputNumber.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode || event.which;
    const currValue = inputNumber.value;
    if (!((keyCode >= 48 && keyCode <= 57) || keyCode === 190 || keyCode === 8)) { //allow only numbers
        event.preventDefault();
        errorMessage6.style.display = 'block';
    }
    else {
        errorMessage6.style.display = 'none';
    }
    if (currValue.includes('.') && keyCode === 190) { //allow only 1 dot
        event.preventDefault();
        errorMessage7.style.display = 'block';
    }
    else {
        errorMessage7.style.display = 'none';
    }
    if (currValue.includes('.') && keyCode >= 48 && keyCode <= 57) { //allow only 2 digits after .
        const parts = currValue.split('.');
        const decimalPart = parts[1] || ' ';

        if (decimalPart.length >= 2) {
            event.preventDefault();
            errorMessage7.style.display = 'block';
        } else {
            errorMessage7.style.display = 'none';
        }
    }
});

//4. 
const inputUser = document.getElementById('username');
const errorMessage8 = document.getElementById('error-user');

inputUser.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode || event.which;
    if ((!event.shiftKey && keyCode >= 48 && keyCode <= 57) ||
        (keyCode >= 65 && keyCode <= 90) ||
        (keyCode >= 97 && keyCode <= 122) ||
        keyCode === 8) {
        errorMessage8.style.display = 'none';
    }
    else {
        event.preventDefault();
        errorMessage8.style.display = 'block';
    }
});