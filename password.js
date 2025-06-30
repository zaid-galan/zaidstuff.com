// This is a simple password generator
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
    "chair", "table", "computer", "phone", "book", "pen", "pencil", "notebook", "window", "door",
    "car", "bike", "bus", "train", "plane", "boat", "tree", "flower", "grass", "sky",
    "sun", "moon", "star", "cloud", "rain", "snow", "wind", "fire", "water", "sprint",
    "summer", "fall", "winter", "spring", "mountain", "river", "lake", "ocean", "sea", "beach",
    "forest", "desert", "jungle", "canyon", "valley", "hill", "rock", "stone", "sand", "dirt",
    "mud", "clay", "soil", "grass", "leaf", "house", "home", "apartment", "condo", "building",
    "skyscraper", "office", "factory", "store", "shop", "market", "mall", "restaurant", "cafe", "burger",
    "pizza", "sushi", "salad", "sandwich", "taco", "hotdog", "icecream", "cake", "cookie", "candy",
    "chocolate", "fruit", "vegetable", "meat", "fish", "apple", "banana", "orange", "grape", "lemon",
    "lime", "peach", "pear", "plum", "cherry", "gatorade", "coke", "pepsi", "water", "juice",
    "milk", "coffee", "tea", "couch", "sofa", "bed", "linux", "windows", "mac", "android",
    "ios", "html", "css", "javascript", "python", "java", "c++", "c#", "ruby", "php",
    "swift", "kotlin", "go", "rust", "sql", "paper", "cardboard", "plastic", "glass", "metal",
    "wood", "fabric", "leather", "cotton", "wool", "purple", "blue", "green", "red", "yellow",
    "orange", "pink", "brown", "black", "white", "gray", "silver", "gold", "bronze", "beige",
    "cyan", "magenta", "teal", "navy", "maroon", "olive", "lime", "aqua", "coral", "salmon",
    "chicken", "turkey", "duck", "goose", "quail", "pigeon", "sparrow", "eagle", "hawk", "owl",
    "parrot", "flamingo", "penguin", "dolphin", "whale", "shark", "octopus", "squid", "crab", "lobster",
    "shrimp", "clam", "oyster", "scallop", "mussel", "seaweed", "monitor", "keyboard", "mouse", "charger",
    "speaker", "headphones", "microphone", "router", "modem", "laptop", "tablet", "camera", "tripod", "lens",
    "battery", "calculator", "printer", "scanner", "drone", "projector", "backpack", "suitcase", "purse", "wallet",
    "watch", "ring", "bracelet", "necklace", "hat", "cap", "helmet", "gloves", "scarf", "jacket",
    "coat", "sweater", "shirt", "pants", "jeans", "shorts", "skirt", "dress", "shoes", "socks",
    "boots", "slippers", "umbrella", "towel", "blanket", "pillow", "mattress", "curtain", "rug", "mat",
    "mirror", "clock", "calendar", "lamp", "lightbulb", "fan", "heater", "airconditioner", "vacuum", "broom",
    "mop", "bucket", "soap", "shampoo", "toothpaste", "toothbrush", "comb", "brush", "razor", "tissue",
    "napkin", "plate", "bowl", "cup", "glassware", "fork", "knife", "spoon", "pan", "pot",
    "oven", "stove", "microwave", "refrigerator", "freezer", "blender", "toaster", "grill", "sink", "faucet",
    "bathtub", "shower", "toilet", "mirror", "cabinet", "drawer", "shelf", "bookcase", "desk", "file",
    "folder", "envelope", "stamp", "mailbox", "package", "label", "marker", "highlighter", "stapler", "clip",
    "tape", "glue", "scissors", "ruler", "protractor", "compass", "chalk", "whiteboard", "blackboard", "eraser",
    "notepad", "dictionary", "thesaurus", "magazine", "newspaper", "journal", "novel", "poem", "essay", "report",
    "presentation", "slide", "graph", "chart", "diagram", "drawing", "painting", "sculpture", "photo", "poster",
    "flyer", "brochure", "manual", "guide", "instruction", "tutorial", "course", "lesson", "lecture", "seminar",
    "workshop", "training", "webinar", "assignment", "exam", "test", "quiz", "homework", "project", "team",
    "group", "class", "school", "college", "university", "campus", "library", "gym", "stadium", "court",
    "field", "track", "pool", "theater", "museum", "gallery", "zoo", "aquarium", "park", "playground",
    "garden", "farm", "barn", "stable", "garage", "shed", "attic", "basement", "hallway", "lobby",
    "elevator", "stairs", "balcony", "patio", "porch", "fence", "gate", "path", "driveway", "road",
    "highway", "bridge", "tunnel", "crosswalk", "intersection", "sign", "traffic", "signal", "light", "stoplight",
    "crossing", "sidewalk", "bikepath", "trail", "route", "journey", "trip", "vacation", "holiday", "travel",
    "flight", "departure", "arrival", "ticket", "passport", "visa", "baggage", "luggage", "customs", "security",
    "boarding", "checkin", "hotel", "hostel", "resort", "motel", "inn", "suite", "reservation", "reception",
    "concierge", "room", "bedroom", "bathroom", "kitchen", "livingroom", "diningroom", "closet", "pantry", "laundry",
    "garage", "workspace", "studio", "lab"
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
    switch (randomSymbol) {
        case 0: randomSymbol = "!"; break;
        case 1: randomSymbol = "?"; break;
        case 2: randomSymbol = "@"; break;
        case 3: randomSymbol = "#"; break;
        case 4: randomSymbol = "$"; break;
        case 5: randomSymbol = "%"; break;
        case 6: randomSymbol = "~"; break;
        case 7: randomSymbol = "&"; break;
        case 8: randomSymbol = "*"; break;
        case 9: randomSymbol = "."; break;
        default: randomSymbol = "!"; break;
    }
    function pasword() {
        const parts = [word, randomNum, word2, randomNum2];
        const randomIndex = Math.floor(Math.random() * (parts.length + 1));
        parts.splice(randomIndex, 0, randomSymbol);
        return parts.join('');
    }
    passwordField.value = pasword();
}