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
const word = getRandomWord();
function guessLetter(letter){
    var guessedLetters = [];
    var wordLength = word.length;
    var guessedWord = fill('_', wordLength);
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
    } else if(!guessedWord.includes('_')){
        document.getElementById('word').innerHTML = "You guessed the word: " + word + "! Remaining guesses: " + remainingGuesses;
    }
    document.getElementById('remainingGuesses').innerHTML = "Remaining guesses: " + remainingGuesses;
}