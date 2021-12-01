// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const chatchphrasesEl = document.getElementById('chatchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;
// set state for all of the character's catchphrases
let catchphraseArray = [];

headDropdown.addEventListener('change', () => {
   // get the value of the head dropdown
    const id = headDropdown.value;
    // increment the head change count state
    headCount++;
    // update the dom for the head
    if (headEl.hasChildNodes()) { // if it has an image
        const imageEl = headEl.firstChild;
        headEl.removeChild(imageEl); // remove the image
    }

    const img = document.createElement('img');
    img.src = `./assets/${id}-head.png`;
    headEl.appendChild(img);
    // update the stats to show the new count
    // reportEl.textContent = `You have changed the head ${headCount} times`;
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    const id = middleDropdown.value;
    // increment the middle change count state
    middleCount++;
    // update the dom for the middle
    if (middleEl.hasChildNodes()) { // if it has an image
        const imageEl = middleEl.firstChild;
        middleEl.removeChild(imageEl); // remove the image
    }

    const img = document.createElement('img');
    img.src = `./assets/${id}-middle.png`;
    middleEl.appendChild(img);
    // update the stats to show the new count
    // reportEl.textContent = `You have changed the middle ${middleCount} times`;
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    const id = bottomDropdown.value;
    // increment the bottom change count state
    bottomCount++;
    // update the dom for the bottom
    if (bottomEl.hasChildNodes()) { // if it has an image
        const imageEl = bottomEl.firstChild;
        bottomEl.removeChild(imageEl); // remove the image
    }

    const img = document.createElement('img');
    img.src = `./assets/${id}-pants.png`;
    bottomEl.appendChild(img);
    // update the stats to show the new count
    // reportEl.textContent = `you have changed the bottom ${bottomCount} times`;
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const slogan = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchphraseArray.push(slogan);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (call a function to do this work)
    displayCatchphrases();
});

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    chatchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    for (let slogan of catchphraseArray) {

        const p = document.createElement('p');
        p.classList.add('slogan');
        p.textContent = slogan;

        chatchphrasesEl.append(p);
    }
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
}

function displayStats() {
    // change the text contentof the reportEl to tell the user how many times they've changed each piece of the state
    
    const statsString = makeStatsString(headCount, middleCount, bottomCount); // call this function with the correct arguments
    reportEl.textContent = statsString;
}