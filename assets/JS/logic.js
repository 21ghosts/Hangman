// creat an array of Words
const words = ['Americano', 'Cappucino', 'Espresso', 'Cubano', 'Latte', 'Macchiato', 'Flat White', 'Mocha', 'Frappe','Black'];
// Choose word randomly "let is ver"
let randNum = Math.floor(Math.random() * words.length);
let chosenWord = words[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

// Testing
console.log(chosenWord);

// Creat underscores based on length of word
let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}


// Get users guess
document.addEventListener('keypress', (event) =>{
    let keyWord = String.fromCharCode(keycode);
// if users gues is right
    if(chosenWord.indexOf(keyword) > -1) {
    // add to the right word array
        rightWord.push(keyword);
    // Replace underscore with right letter
        underScore[chosenWord.indexOf(keyword)] = keyword;
    // Checks to see if user word matches guess
    if(underScore.join('') == chosenWord) {
        alert('You Win!')
    }
    else {
        wrongWord.push(keyword);
    }
        
    }
});
// Check if guess is right
// If guess is right push to right array
// If guess is wrong push to wrong array