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
    "garage", "workspace", "studio", "lab", "ubuntu", "fedora", "debian", "arch", "centos",
    "redhat", "suse", "gentoo", "slackware", "linuxmint"
];

function updateLengthValue(val) {
    document.getElementById('lenValue').textContent = val;
}

function generate(){
    const length = parseInt(document.getElementById('len').value);
    const passwordField = document.getElementById("password");
    const password = passwordField.value;
    var words = [
        document.getElementById("word").value,
        wordBank[Math.floor(Math.random() * wordBank.length)],
        wordBank[Math.floor(Math.random() * wordBank.length)],
        wordBank[Math.floor(Math.random() * wordBank.length)],
        wordBank[Math.floor(Math.random() * wordBank.length)],
        wordBank[Math.floor(Math.random() * wordBank.length)],
        wordBank[Math.floor(Math.random() * wordBank.length)],
        wordBank[Math.floor(Math.random() * wordBank.length)],
        wordBank[Math.floor(Math.random() * wordBank.length)]
    ]
    words[0].charAt(0).toUpperCase();
    var randomNums = [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100)
    ];
    var randomSymbol = [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10)
    ];
    switch (randomSymbol[0]) {
        case 0: randomSymbol[0] = "!"; break;
        case 1: randomSymbol[0] = "?"; break;
        case 2: randomSymbol[0] = "@"; break;
        case 3: randomSymbol[0] = "#"; break;
        case 4: randomSymbol[0] = "$"; break;
        case 5: randomSymbol[0] = "%"; break;
        case 6: randomSymbol[0] = "~"; break;
        case 7: randomSymbol[0] = "&"; break;
        case 8: randomSymbol[0] = "*"; break;
        case 9: randomSymbol[0] = "."; break;
        default: randomSymbol[0] = "!"; break;
    }
    switch (randomSymbol[1]) {
        case 0: randomSymbol[1] = "!"; break;
        case 1: randomSymbol[1] = "?"; break;
        case 2: randomSymbol[1] = "@"; break;
        case 3: randomSymbol[1] = "#"; break;
        case 4: randomSymbol[1] = "$"; break;
        case 5: randomSymbol[1] = "%"; break;
        case 6: randomSymbol[1] = "~"; break;
        case 7: randomSymbol[1] = "&"; break;
        case 8: randomSymbol[1] = "*"; break;
        case 9: randomSymbol[1] = "."; break;
        default: randomSymbol[1] = "!"; break;
    }
    switch (randomSymbol[2]) {
        case 0: randomSymbol[2] = "!"; break;
        case 1: randomSymbol[2] = "?"; break;
        case 2: randomSymbol[2] = "@"; break;
        case 3: randomSymbol[2] = "#"; break;
        case 4: randomSymbol[2] = "$"; break;
        case 5: randomSymbol[2] = "%"; break;
        case 6: randomSymbol[2] = "~"; break;
        case 7: randomSymbol[2] = "&"; break;
        case 8: randomSymbol[2] = "*"; break;
        case 9: randomSymbol[2] = "."; break;
        default: randomSymbol[2] = "!"; break;
    }
    switch (randomSymbol[3]) {
        case 0: randomSymbol[3] = "!"; break;
        case 1: randomSymbol[3] = "?"; break;
        case 2: randomSymbol[3] = "@"; break;
        case 3: randomSymbol[3] = "#"; break;
        case 4: randomSymbol[3] = "$"; break;
        case 5: randomSymbol[3] = "%"; break;
        case 6: randomSymbol[3] = "~"; break;
        case 7: randomSymbol[3] = "&"; break;
        case 8: randomSymbol[3] = "*"; break;
        case 9: randomSymbol[3] = "."; break;
        default: randomSymbol[3] = "!"; break;
    }
    switch (randomSymbol[4]) {
        case 0: randomSymbol[4] = "!"; break;
        case 1: randomSymbol[4] = "?"; break;
        case 2: randomSymbol[4] = "@"; break;
        case 3: randomSymbol[4] = "#"; break;
        case 4: randomSymbol[4] = "$"; break;
        case 5: randomSymbol[4] = "%"; break;
        case 6: randomSymbol[4] = "~"; break;
        case 7: randomSymbol[4] = "&"; break;
        case 8: randomSymbol[4] = "*"; break;
        case 9: randomSymbol[4] = "."; break;
        default: randomSymbol[4] = "!"; break;
    }
    switch (randomSymbol[5]) {
        case 0: randomSymbol[5] = "!"; break;
        case 1: randomSymbol[5] = "?"; break;
        case 2: randomSymbol[5] = "@"; break;
        case 3: randomSymbol[5] = "#"; break;
        case 4: randomSymbol[5] = "$"; break;
        case 5: randomSymbol[5] = "%"; break;
        case 6: randomSymbol[5] = "~"; break;
        case 7: randomSymbol[5] = "&"; break;
        case 8: randomSymbol[5] = "*"; break;
        case 9: randomSymbol[5] = "."; break;
        default: randomSymbol[5] = "!"; break;
    }
    switch (randomSymbol[6]) {
        case 0: randomSymbol[6] = "!"; break;
        case 1: randomSymbol[6] = "?"; break;
        case 2: randomSymbol[6] = "@"; break;
        case 3: randomSymbol[6] = "#"; break;
        case 4: randomSymbol[6] = "$"; break;
        case 5: randomSymbol[6] = "%"; break;
        case 6: randomSymbol[6] = "~"; break;
        case 7: randomSymbol[6] = "&"; break;
        case 8: randomSymbol[6] = "*"; break;
        case 9: randomSymbol[6] = "."; break;
        default: randomSymbol[6] = "!"; break;
    }
    switch (randomSymbol[7]) {
        case 0: randomSymbol[7] = "!"; break;
        case 1: randomSymbol[7] = "?"; break;
        case 2: randomSymbol[7] = "@"; break;
        case 3: randomSymbol[7] = "#"; break;
        case 4: randomSymbol[7] = "$"; break;
        case 5: randomSymbol[7] = "%"; break;
        case 6: randomSymbol[7] = "~"; break;
        case 7: randomSymbol[7] = "&"; break;
        case 8: randomSymbol[7] = "*"; break;
        case 9: randomSymbol[7] = "."; break;
        default: randomSymbol[7] = "!"; break;
    }
    switch (randomSymbol[8]) {
        case 0: randomSymbol[8] = "!"; break;
        case 1: randomSymbol[8] = "?"; break;
        case 2: randomSymbol[8] = "@"; break;
        case 3: randomSymbol[8] = "#"; break;
        case 4: randomSymbol[8] = "$"; break;
        case 5: randomSymbol[8] = "%"; break;
        case 6: randomSymbol[8] = "~"; break;
        case 7: randomSymbol[8] = "&"; break;
        case 8: randomSymbol[8] = "*"; break;
        case 9: randomSymbol[8] = "."; break;
        default: randomSymbol[8] = "!"; break;
    }
    switch (randomSymbol[9]) {
        case 0: randomSymbol[9] = "!"; break;
        case 1: randomSymbol[9] = "?"; break;
        case 2: randomSymbol[9] = "@"; break;
        case 3: randomSymbol[9] = "#"; break;
        case 4: randomSymbol[9] = "$"; break;
        case 5: randomSymbol[9] = "%"; break;
        case 6: randomSymbol[9] = "~"; break;
        case 7: randomSymbol[9] = "&"; break;
        case 8: randomSymbol[9] = "*"; break;
        case 9: randomSymbol[9] = "."; break;
        default: randomSymbol[9] = "!"; break;
    }
    if (word.length < 1) {
        alert("Please enter a word.");
        return;
    }
    
    function pasword() {
        const parts = [];
        for (let i = 0; i < length; i++) {
            parts.push(words[i]);
            parts.push(randomNums[i]);
            parts.push(randomSymbols[i]);
        }
        const randomIndex = Math.floor(Math.random() * (parts.length + 1));
        return parts.join('');
    }
    passwordField.value = pasword();
}