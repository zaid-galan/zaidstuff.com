import {wordBank} from 'words.js';
function getRandomWord() {
    var randomNum = Math.floor(Math.ramdom() * wordBank.length);
    const randomWord = wordBank[randomNum];
    return randomWord;
}
function getInputWord(){
    return document.getElementById('wordInput').value;
}
var time;

function addSeconds(){
    time += 2;
}
function checkWord(){
    if (getInputWord() === document.getElementById('word').innerHTML) {
        addSeconds();
        document.getElementById('word').innerHTML = getRandomWord();
    }
}
function timer(){
    time = 10;
    var timerElement = document.getElementById('timer');
    if (time > 0) {
        time -= 1;
        if (!document.getElementById('word').innerHTML === '') {
            document.getElementById('word').innerHTML = getRandomWord();
        }
    }
    timerElement.innerHTML = time;
    if (time == 0){
        wordBank = null;
        getInputWord = null;
        getRandomWord = null;
        timer = null;
        checkWord = null;
        addSeconds = null;
        alert ("Time's up!");
    }
}
setInterval(checkWord, 1);
setInterval(timer, 1000);