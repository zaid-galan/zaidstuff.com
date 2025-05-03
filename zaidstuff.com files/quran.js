function playAyah(){
    var inputValue = document.getElementById("input").value;
    var audio = new Audio("https://thenoblequran.s3.amazonaws.com/recitations/khalifa/" + inputValue + ".mp3");
    if (audio.src === "https://thenoblequran.s3.amazonaws.com/recitations/khalifa/777777.mp3"){
    audio.src = "5$.mp3";}
    if (event.keyCode === 13){    audio.play();}
}