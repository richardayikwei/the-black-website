const enterName = document.getElementById('js-name');
const openingMessage = document.getElementById('js-openingMessage');
const displayMessage = document.getElementById('js-welcomeMessage');
const displayInstructions = document.getElementById('js-instructions');
const displayDot1 = document.getElementById('js-dot1');
const displayDot2 = document.getElementById('js-dot2');
const displayDot3 = document.getElementById('js-dot3');
const displayDot4 = document.getElementById('js-dot4');
const displayDot5 = document.getElementById('js-dot5');
const displayDot6 = document.getElementById('js-dot6');

function enter() {
    if (event.key == 'Enter') {
        displayGreeting();
    }
}


function displayGreeting() {
    enterName.classList.add('hide');
    openingMessage.classList.add('hide');

    document.getElementById('js-greeting').innerHTML =
        `Hello ${enterName.value}`;

    //timeouts for some elements
    setTimeout(dot1, 1000);
    setTimeout(dot2, 2000);
    setTimeout(dot3, 3000);
    setTimeout(welcomeMessage, 5000);
    setTimeout(instructions, 10000);

}

// Animation for the dots
function dot1() {
    displayDot1.innerHTML = '.';
}
function dot2() {
    displayDot2.innerHTML = '.';
}
function dot3() {
    displayDot3.innerHTML = '.';
}

//message after entering nconst
function welcomeMessage() {
    displayMessage.innerHTML =
        `Welcome to the black website.`;
}

//instructions after welcome massage
function instructions() {
    displayInstructions.innerHTML =
        `The elements of this webpage are hidden in the void. Hover to find them.`;
}