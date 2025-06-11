const audiop = document.createElement("audio");
function playAyah() {
    var inputValue = document.getElementById("input").value;
    var audioUrl = "https://thenoblequran.s3.amazonaws.com/recitations/khalifa/" + inputValue + ".mp3";
    if (inputValue === "777777") {
        audioUrl = "5$.mp3";
    }

    // Set the audio source and play it+
    if(event.keyCode === 13) { // Check if Enter key is pressed
        audiop.src = audioUrl;
        audiop.setAttribute('controls', 'true');
        audiop.setAttribute('autoplay', 'true');
        document.body.appendChild(audiop);
        audiop.play().catch(function(error) {
            console.error("Error playing audio:", error);
            alert("Audio playback failed. Please check the input or try again later.");
        });
    }

    // Handle translations
    const translations = {
        "087001": "Glorify the name of your Lord, the Most High (from that any besides Him should be called by His name).",
        "087002": "Who created (all things) and proportioned (every creature in the best of forms).",
        "087003": "And who determined (for every type of creature its abode, sustenance, and means of reproduction) and then guided (it to its instinct and behaviour).",
        "087004": "And who brings out the (various types of) pasture (upon which animals graze).",
        "087005": "And then He turns it into dark, dry stubble.",
        "087006": "We will make you recite (and memorise this Qurʾān, O Muḥammad), so that you do not forget (it) (or: so that you do not neglect acting upon it)."
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