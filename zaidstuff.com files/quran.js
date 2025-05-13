var audiop = document.createElement("audio");
function playAyah(){
    var inputValue = document.getElementById("input").value;
    var audio = new Audio("https://thenoblequran.s3.amazonaws.com/recitations/khalifa/" + inputValue + ".mp3");
    if (audio.src === "https://thenoblequran.s3.amazonaws.com/recitations/khalifa/777777.mp3"){
    audio.src = "5$.mp3";}
    if (event.keyCode === 13){    audiop.src = audio.src;
        audiop.setAttribute('controls', 'true');
        audiop.setAttribute('autoplay', 'true');
    }
}
function toggleLoop() {
    if (audiop.loop) {
        audiop.loop = false;
        document.getElementById("loopButton").innerText = "Enable Loop";
    } else {
        audiop.loop = true;
        document.getElementById("loopButton").innerText = "Disable Loop";
    }
}