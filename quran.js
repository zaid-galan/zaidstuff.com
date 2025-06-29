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
        "087006": "We will make you recite (and memorise this Qurʾān, O Muḥammad), so that you do not forget (it) (or: so that you do not neglect acting upon it).",
        "087007": "Except what Allāh may will (to abrogate from it). Indeed, He knows what is apparent (of speech and action) and what is hidden. (Or: Indeed, He knows what you, O Muḥammad, know of the Qurʾān already, and what is yet to be taught to you).",
        "087008": "And We will make easy for you (O Muḥammad), the easy path (to doing good deeds and entering Paradise).",
        "087009": "So remind (the people with this Qurʾān), where reminder (will) benefit (them).",
        "087010": "(For) he will receive reminder (and take admonition) who fears Allāh.",
        "087011": " But the one who is (decreed to be) wretched (in Allāh’s prior knowledge) will avoid it (by choosing disbelief) (and thus become wretched).",
        "087012": "(He is the one) who will burn in the greatest (and most intense part of the) Fire.",
        "087013": " Thereafter, he will neither die therein (such that he is relieved) nor live (with a life that is of any benefit to him). ",
        "087014": "He shall achieve success who purifies himself (from polytheism, disbelief and sin). ",
        "087015": "And mentions (only) the name of his Lord (in his invocation) and then prays (the five daily prayers).",
        "087016": "But you (O Mankind) give preference to the life of the world.",
        "087017": "Though the hereafter is better (for the believer) and is more lasting. ",
        "087018": "Verily, this—(what has been mentioned in the previous four verses)—is in the former scriptures. ",
        "087019": "The scriptures of Ibrāhīm and Mūsā.",
        "092001": "By the (phenomenon of) the night, when it covers (the day and all creatures therein with its darkness).",
        "092002": "And (by) the day, when it appears (and reveals what was hidden by the night).",
        "092003": "And (by) Him Who created the male (Ādam) and the female (Eve). "
    };
    let translation = translations[inputValue] || "Translation not available.";
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