var wordBank = ['function', 'computer', 'carpet', 'monitor', 'puzzle', 'folder', 'fragrance', 'diode', 'desktop', 'tutorial']
function getRandomWord() {
    return wordBank[Math.floor(Math.random() * wordBank.length)];
} function countChar(word, letter) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            count++;
        }
    }
    return count;
}
function fill(char, length) {
    let str = '';
    for (let i = 0; i < length; i++) {
        str += char;
    }
    return str;
}
String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
var wordLength = 0;
var guessedWord = '';
var remainingGuesses = 0;
var guessedLetters = [];
const word = getRandomWord();
function  initialize() {
    wordLength = word.length;
    guessedWord = fill('-', wordLength);
    remainingGuesses = 6;
    guessedLetters = [];
    document.getElementById('remainingGuesses').innerHTML = "Remaining guesses: " + remainingGuesses;
}
function resetGame() {
    word = getRandomWord();
    initialize();
    document.getElementById('word').innerHTML = guessedWord;
    document.getElementById('wrong-letters').innerHTML = "Guessed letters: " + guessedLetters.join(', ');
}
window.onload = function() {
    initialize();
}   
function guessLetter(letter){
    var guessedLetters = [];
    var wordLength = word.length;
    var guessedWord = fill('-', wordLength);
    var remainingGuesses = 6;
    if(word.includes(letter)){
        guessedWord.replaceAt(word.indexOf(letter), letter);
    } else{
        remainingGuesses--;
        guessedLetters.push(letter);
    }
    document.getElementById('word').innerHTML = guessedWord;
    if(remainingGuesses === 0){
        document.getElementById('word').innerHTML = "Game Over! The word was: " + word;
    } else if(!guessedWord.includes('-')){
        document.getElementById('word').innerHTML = "You guessed the word: " + word + "! Remaining guesses: " + remainingGuesses;
    }
    document.getElementById('wrong-letters').innerHTML = "Guessed letters: " + guessedLetters.toString();
    document.getElementById('remainingGuesses').innerHTML = "Remaining guesses: " + remainingGuesses;
}