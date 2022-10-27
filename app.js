/* Get DOM Elements */
const submitButton = document.getElementById('submit-button');
const promptSection = document.getElementById('prompt');
const fortuneSection = document.getElementById('fortune');
// fortune paragraph
// reset button

/* Events */
// event listener for submit button that targets fortuneP
// event listener for reset button that clears image and answer
submitButton.addEventListener('click', () => {
    promptSection.classList.toggle('hide');
    fortuneSection.classList.toggle('hide');
});

/* Display Functions */
// function that randomly generates fortune output
// function(s) that toggle appropriate hidden objects
