function displayTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var fullTime = ${hours}:${minutes}:${seconds};
    document.getElementById('time').innerHTML = fullTime;
}
window.onload = function() {
setInterval(displayTime, 1000);
}