function question(text, option1, option2, option3, option4, answer) {
    this.text = text;
    this.options = [option1, option2, option3, option4];
    this.answer = this.options[answer];
}
var beginnerQuestions = [
    new question("What is the population of the usa?", "347 million", "350 million", "200 million", "1 billion", 0),
    new question("What programming language is used for web development?", "Python", "Java", "HTML", "C++", 2),
    new question("What type of data has only two values?", "String", "Boolean", "Integer", "Float", 1),
    new question("what molecules make up water?", "H2O", "CO2", "O2", "NaCl", 0),
    new question("Why was css created?", "To make websites look good", "To make websites interactive", "To make websites fast", "To control file size", 3),
    new question("What is the capital of the USA?", "New York", "Washington DC", "Los Angeles", "Chicago", 1),
    new question("What year was HTML created?", "1991", "1995", "2000", "2005", 0),
    new question("What is the order of operations?", "PEMDAS", "BODMAS", "BIDMAS", "DMAS", 0),
    new question("What is the difference between a variable and a constant?", "A variable can change", "A constant can change", "A variable is a number", "A constant is a number", 0),
    new question("What type of programming is behind all programs?", "Binary", "C#", "Java", "Python", 0)
]
var intermediateQuestions = [
    new question("What key is used to open the console in Chrome?", "F12", "Ctrl + Shift + I", "Ctrl + Shift + C", "Ctrl + Alt + I", 0),
    new question("Why do parentheses come first in the order of operations?", "To prioritize expressions", "To make it easier to write", "To make it easier to understand", "To make it easier to calculate", 0),
    new question("What is the chemical symbol for gold?", "Au", "Ag", "Fe", "Pb", 0),
    new question("What is the speed of light?", "300,000 km/s", "150,000 km/s", "1,000,000 km/s", "500,000 km/s", 0),
    new question("What is the largest mammal?", "Elephant", "Blue Whale", "Giraffe", "Hippopotamus", 1),
    new question("What is the capital of Japan?", "Tokyo", "Seoul", "Beijing", "Bangkok", 0),
    new question("What is the smallest prime number?", "1", "2", "3", "5", 1),
    new question("What is the boiling point of water?", "100°C", "90°C", "80°C", "70°C", 0),
    new question("What is the hardest natural substance on Earth?", "Diamond", "Gold", "Iron", "Platinum", 0),
    new question("What is the pH of pure water?", "7", "6", "8", "5", 0)
]
var expertQuestions = [
    new question("for loop syntax in JS?", "for (i = 0; i < 10; i++)", "for (i = 0; 10)", "for (i = 0; i < 10; i++) {}", "for (i = 0; i < 10) {}", 2),
    new question("What programming language is used for android development?", "Kotlin", "Python", "C++", "Swift", 0),
    new question("what is the square root of 777?", "27.87", "28.80", "29.43", "31", 1),
    new question("What is the average rainfall in africa?", "1000mm", "2000mm", "3000mm", "4000mm", 1),
    new question("Which of the following is not a JavaScript framework?", "React", "Angular", "Django", "Vue", 2)
    
];