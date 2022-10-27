/* Get DOM Elements */
const submitButton = document.getElementById('submit-button');
const promptSection = document.getElementById('prompt');
const fortuneSection = document.getElementById('fortune');
const fortuneP = document.getElementById('answer');
const resetButton = document.getElementById('reset-button');

const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Do not count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

/* Events */
submitButton.addEventListener('click', () => {
    promptSection.classList.toggle('hide');
    fortuneSection.classList.toggle('hide');
    // generate a random number between 0 and the length
    // of the array minus 1
    const randNum = Math.floor(Math.random() * answers.length);
    const randChoice = answers[randNum];
    // set the text content to the random choice
    fortuneP.textContent = randChoice;
});

resetButton.addEventListener('click', () => {
    promptSection.classList.toggle('hide');
    fortuneSection.classList.toggle('hide');
});
