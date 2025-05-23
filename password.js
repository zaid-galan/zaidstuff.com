// This is a simple password generator and manager
function copyPassword() {
    const password = document.getElementById("password").value;
    navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard!");
    }, () => {
        alert("Failed to copy password.");
    });
}
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
    const themeButton = document.getElementById("theme-button");
    if (body.classList.contains("dark-theme")) {
        themeButton.innerHTML = "Light Theme";
    } else {
        themeButton.innerHTML = "Dark Theme";
    }
}
function showPassword() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        document.getElementById("showBtn").innerHTML = "Hide";
    } else {
        passwordField.type = "password";
        document.getElementById("showBtn").innerHTML = "Show";
    }
}
function shortenPassword() {
    const passwordField = document.getElementById("password");
    const password = passwordField.value;
    var hobby = prompt("enter a hobby", '');
    var initials = document.getElementById("name1").value.charAt(0) + document.getElementById("name2").value.charAt(0);
    if (hobby.length < 1 || initials.length < 1) {
        alert("Please enter first name and last name.");
        return;
    }
    var randomNum1 = Math.floor(Math.random() * 99);
    var randomNum2 = Math.floor(Math.random() * 99);
    var randomNum3 = Math.floor(Math.random() * 99);
    var newPassword = `${hobby}${randomNum1}${initials}${randomNum2}${randomNum3}`;
    document.getElementById("password").value = newPassword;
    passwordField.type = "text";
}
var wordBank = [
    "chair",
    "table",
    "computer",
    "phone",
    "book",
    "pen",
    "pencil",
    "notebook",
    "window",
    "door",
    "car",
    "bike",
    "bus",
    "train",
    "plane",
    "boat",
    "tree",
    "flower",
    "grass",
    "sky",
    "sun",
    "moon",
    "star",
    "cloud",
    "rain",
    "snow",
    "wind",
    "fire",
    "water",
    "sprint",
    "summer",
    "fall",
    "winter",
    "spring",
    "mountain",
    "river",
    "lake",
    "ocean",
    "sea",
    "beach",
    "forest",
    "desert",
    "jungle",
    "canyon",
    "valley",
    "hill",
    "rock",
    "stone",
    "sand",
    "dirt",
    "mud",
    "clay",
    "soil",
    "grass",
    "leaf",
    "house",
    "home",
    "apartment",
    "condo",
    "building",
    "skyscraper",
    "office",
    "factory",
    "store",
    "shop",
    "market",
    "mall",
    "restaurant",
    "cafe",
    "burger",
    "pizza",
    "sushi",
    "salad",
    "sandwich",
    "taco",
    "hotdog",
    "icecream",
    "cake",
    "cookie",
    "candy",
    "chocolate",
    "fruit",
    "vegetable",
    "meat",
    "fish",
    "apple",
    "banana",
    "orange",
    "grape",
    "lemon",
    "lime",
    "peach",
    "pear",
    "plum",
    "cherry",
    "gatorade",
    "coke",
    "pepsi",
    "water",
    "juice",
    "milk",
    "coffee",
    "tea",
    "couch",
    "sofa",
    "bed",
    "linux",
    "windows",
    "mac",
    "android",
    "ios",
    "html",
    "css",
    "javascript",
    "python",
    "java",
    "c++",
    "c#",
    "ruby",
    "php",
    "swift",
    "kotlin",
    "go",
    "rust",
    "sql",
    "paper",
    "cardboard",
    "plastic",
    "glass",
    "metal",
    "wood",
    "fabric",
    "leather",
    "cotton",
    "wool",
    "purple",
    "blue",
    "green",
    "red",
    "yellow",
    "orange",
    "pink",
    "brown",
    "black",
    "white",
    "gray",
    "silver",
    "gold",
    "bronze",
    "beige",
    "cyan",
    "magenta",
    "teal",
    "navy",
    "maroon",
    "olive",
    "lime",
    "aqua",
    "coral",
    "salmon",
    "chicken",
    "turkey",
    "duck",
    "goose",
    "quail",
    "pigeon",
    "sparrow",
    "eagle",
    "hawk",
    "owl",
    "parrot",
    "flamingo",
    "penguin",
    "dolphin",
    "whale",
    "shark",
    "octopus",
    "squid",
    "crab",
    "lobster",
    "shrimp",
    "clam",
    "oyster",
    "scallop",
    "mussel",
    "seaweed"
];
function generate(){
    const passwordField = document.getElementById("password");
    const password = passwordField.value;
    var word = document.getElementById("word").value;
    word.charAt(0).toUpperCase();
    var word2 = wordBank[Math.floor(Math.random() * wordBank.length)];
    var randomNum = Math.floor(Math.random() * 99);
    var randomNum2 = Math.floor(Math.random() * 99);
    var randomSymbol = Math.floor(Math.random() * 10);
    if (word.length < 1) {
        alert("Please enter a word.");
        return;
    }
    if (randomSymbol === 0) {
        randomSymbol = '!';
    } else if (randomSymbol === 1) {
        randomSymbol = '=';
    } else if (randomSymbol === 2) {
        randomSymbol = '#';
    } else if (randomSymbol === 3) {
        randomSymbol = '$';
    } else if (randomSymbol === 4) {
        randomSymbol = '%';
    } else if (randomSymbol === 5) {
        randomSymbol = '^';
    } else if (randomSymbol === 6) {
        randomSymbol = '&';
    } else if (randomSymbol === 7) {
        randomSymbol = '*';
    } else if (randomSymbol === 8) {
        randomSymbol = '.';
    } else if (randomSymbol === 9) {
        randomSymbol = '?';
    }
    passwordField.value = `${word}${randomNum}${word2}${randomNum2}${randomSymbol}`;
}