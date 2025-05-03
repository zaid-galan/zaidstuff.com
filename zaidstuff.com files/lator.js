//calculator script
var Error = 4;
function press(){
var audio = new Audio("zaid%20stuff%20files/stop-13692.mp3");
audio.play();
}
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
    console.log(input);
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
    display.value = eval(display.value);
    console.log(eval(display.value));
    }
    catch(Error){
        display.value = "Error"
        console.log("Error")
    }
}
document.addEventListener("keyup", keyUpHandler);

function keyUpHandler(event) {
  calculate(event.keyCode==13);
    clearDisplay(event.keyCode==8);
}

const displa = document.getElementById("disply");

function random(max){
    var rndm = Math.random() * 6;
    if (rndm < 1.5){
        rndm = 1;
    } else if (rndm < 2.5){
        rndm = 2;
    } else /*if (rndm < 3.5)*/{
        rndm = 3;
    } /*else if (rndm < 4.5){
        rndm = 4;
    } else if (rndm < 5.5){
        rndm = 5;
    } else /*if (rndm < 6.5) 6z{
        rndm = 6;
    } //else {
        //rndm = 7;
    //}*/
    console.log(rndm);
    display.value += rndm;
}
function getFullDate(){
    const days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ]
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
    const now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var dayNumber = now.getDate();
    var dayName = days[now.getDay()];
    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    var date = String(month) + "/" + String(dayNumber) + "/" + String(year) + " " + dayName + " " + time;
    return date;
}
function printDate(){
    console.log(getFullDate());
    display.value = getFullDate();
}