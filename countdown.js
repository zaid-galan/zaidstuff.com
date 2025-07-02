function display(){
    const now = new Date();
    var day = now.getDate();
var daysUntilBeach = 11 - day;
var month = now.getMonth() + 1;
var monthsUntilBeach = 9 - month;
var hour = now.getHours();
var hoursUntilBeach = 23 - hour;
var minutes = now.getMinutes();
var minutesUntilBeach = 60 - minutes;
var seconds = now.getSeconds() + 1;
var secondsUntilBeach = 60 - seconds;
var countdownToBeach = String(monthsUntilBeach) +','+ String(daysUntilBeach) +','+ String(hoursUntilBeach) +','+ String(minutesUntilBeach) +','+ String(secondsUntilBeach);
    document.getElementById("monthdisplay").value = monthsUntilBeach;
    document.getElementById("daysplay").value = daysUntilBeach;
    document.getElementById("hourdisplay").value = hoursUntilBeach;
    document.getElementById("minutedisplay").value = minutesUntilBeach;    
    document.getElementById("secondisplay").value = secondsUntilBeach;
    console.log(countdownToBeach);
  }

setInterval(display,1000)
