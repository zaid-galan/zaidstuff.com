function displayTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var fullTime = `${hours.toString()}:${minutes.toString()}:${seconds.toString()}`;
    document.getElementById('time').innerHTML = fullTime;
}

setInterval(displayTime, 1000);
