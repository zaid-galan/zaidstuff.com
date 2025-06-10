const audiop = document.getElementById("audioPlayer");
function playAyah() {
    var inputValue = document.getElementById("input").value;
    var audioUrl = "https://thenoblequran.s3.amazonaws.com/recitations/khalifa/" + inputValue + ".mp3";
    if (inputValue === "777777") {
        audioUrl = "5$.mp3";
    }

    // Set the audio source and play it
    audiop.src = audioUrl;
    audiop.setAttribute('controls', 'true');
    audiop.setAttribute('autoplay', 'true');
    audiop.play();

    // Handle translations
    const translations = {
        "097001": "Verily, We sent it—(the whole Qurʾān)—down (to the lowest heaven) during the Night of Decree (for it to be revealed piecemeal thereafter)."
    };
    const translation = translations[inputValue] || "Translation not available.";
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