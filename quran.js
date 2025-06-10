var audiop = document.getElementById("audioPlayer");
function playAyah(){
    var inputValue = document.getElementById("input").value;
    var audio = new Audio("https://thenoblequran.s3.amazonaws.com/recitations/khalifa/" + inputValue + ".mp3");
    if (audio.src === "https://thenoblequran.s3.amazonaws.com/recitations/khalifa/777777.mp3"){
    audio.src = "5$.mp3";}
    if (event.keyCode === 13){    audiop.src = audio.src;
        audiop.setAttribute('controls', 'true');
        audiop.setAttribute('autoplay', 'true');
    }
    const translations = {
        "097001": "Verily, We sent it—(the whole Qurʾān)—down (to the lowest heaven) during the Night of Decree (for it to be revealed piecemeal thereafter)."
    }
    const translation = translations[inputValue];
    document.getElementById("trans").innerHTML = translation;
}
function toggleLoop() {
    if (audiop.loop) {
        audiop.loop = false;
        document.getElementById("loopButton").innerHTML = "Enable Loop";
    } else {
        audiop.loop = true;
        document.getElementById("loopButton").innerHTML = "Disable Loop";
    }
}