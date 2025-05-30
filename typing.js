const wordBank = [
    // Words with at least 8 letters
    "abundance", "adventure", "algorithm", "authority", "blueprint", "boundary", "challenge", "character", 
    "community", "composure", "creativity", "dedicated", "education", "elevation", "equipment", "essential", 
    "exception", "framework", "frequency", "generator", "happiness", "influence", "knowledge", "landscape", 
    "leadership", "lifestyle", "marketing", "mechanism", "motivation", "narrative", "objective", "operation", 
    "opportunity", "parameter", "perception", "potential", "procedure", "processor", "provision", "relevance", 
    "reliance", "resilience", "resources", "situation", "solutions", "structure", "synthesis", "technique", 
    "tolerance", "tradition", "validation", "variation", "vibration", "visibility", "volunteer", "workplace",

    // Shorter words
    "action", "active", "adjust", "advice", "affect", "agency", "amount", "animal", "answer", "aspect", 
    "assist", "assume", "attach", "belief", "beyond", "budget", "career", "center", "choice", "client", 
    "common", "concept", "create", "credit", "custom", "decide", "define", "design", "detail", "direct", 
    "divide", "effort", "energy", "engage", "ensure", "expand", "expert", "factor", "family", "figure", 
    "finish", "follow", "future", "growth", "impact", "income", "inform", "insight", "invest", "leader", 
    "length", "manage", "market", "method", "modern", "moment", "nature", "object", "option", "output", 
    "people", "period", "policy", "prefer", "profit", "reason", "record", "reduce", "region", "relate", 
    "result", "review", "safety", "sample", "scheme", "search", "sector", "select", "series", "service", 
    "settle", "source", "speech", "spirit", "status", "supply", "system", "target", "theory", "travel", 
    "unique", "update", "vision", "volume", "wealth", "winner", "worker", "writer"
];
function getRandomWord() {
    var randomNum = Math.floor(Math.random() * wordBank.length);
    const randomWord = wordBank[randomNum];
    return randomWord;
}
function getInputWord(){
    return document.getElementById('wordInput').value;
}
var time = 10;

function addSeconds(){
    time += 2;
}
let score = 0;
function checkWord(){
    if (getInputWord() === document.getElementById('word').innerHTML) {
        addSeconds();
        document.getElementById('word').innerHTML = getRandomWord();
        document.getElementById('wordInput').value = '';
        document.getElementById('wordInput').focus();
        score += 1;
        document.getElementById('score').innerHTML = score;
    }
}
function timer(){
    var timerElement = document.getElementById('timer');
    if (time > 0) {
        timerElement.innerHTML = time;
        time -= 1;
        if (!document.getElementById('word').innerHTML === '') {
            document.getElementById('word').innerHTML = getRandomWord();
        }
    }
    console.log(time);
    timerElement.innerHTML = time;
    if (time == 0 || time < 0) {
        document.getElementById('word').innerHTML = '';
        document.getElementById('wordInput').value = '';
        window.alert("Time's up! Refresh the page to play again.");
    }
}
//pause timer function for debugging and testing; NOT FOR USERS!!!
setInterval(checkWord, 1);
setInterval(timer, 1000);
function pauseTimer(){
    clearInterval(timer);
}
function resumeTimer(){
    setInterval(timer, 1000);
}
let timerPaused = false;

document.addEventListener('keyup', function(event) {
    if (event.keycode === 192) {
        if (!timerPaused) {
            pauseTimer();
            timerPaused = true;
        } else {
            resumeTimer();
            timerPaused = false;
        }
    }
});