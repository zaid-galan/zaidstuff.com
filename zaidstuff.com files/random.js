function spin(){
    var optionNum = document.getElementById("numberOfOptions").value;
    var option0 = document.getElementById("option0").value;
    var option1 = document.getElementById("option1").value;
    var option2 = document.getElementById("option2").value;
    var option3 = document.getElementById("option3").value;
    var option4 = document.getElementById("option4").value;
    var option5 = document.getElementById("option5").value;
    var option6 = document.getElementById("option6").value;
    var option7 = document.getElementById("option7").value;
    var option8 = document.getElementById("option8").value;
    var option9 = document.getElementById("option9").value;
    var options = [option0, option1, option2, option3, option4, option5, option6, option7, option8, option9];
    var randomNum = Math.floor(Math.random() * optionNum);
    document.getElementById("result").innerHTML = options[randomNum];
}
function clear(){
    document.getElementById("result").innerHTML = "";
    document.getElementById("option0").value = "";
    document.getElementById("option1").value = "";
    document.getElementById("option2").value = "";
    document.getElementById("option3").value = "";
    document.getElementById("option4").value = "";
    document.getElementById("option5").value = "";
    document.getElementById("option6").value = "";
    document.getElementById("option7").value = "";
    document.getElementById("option8").value = "";
    document.getElementById("option9").value = "";
}