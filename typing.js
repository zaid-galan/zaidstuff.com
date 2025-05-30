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