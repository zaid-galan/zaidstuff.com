function convertTemp(degrees){
        var x = 0;
        var y = 0;
        if (degrees == "fahr") {
          x = (document.getElementById("fahr").value - 32) * 5 / 9;
          x = x.toFixed(2);
          document.getElementById("cels").value = x;
          y = (parseFloat(document.getElementById("fahr").value) + 459.67) * 5 / 9;
          y = y.toFixed(2);
          document.getElementById("kel").value = y;
          if(document.getElementById("fahr").value == ''){
            document.getElementById("cels").value = '';
            document.getElementById("kel").value = '';
          }
       else if(degrees == "cels"){
          x = document.getElementById("cels").value * 9 / 5 + 32;
          x = x.toFixed(2);
          document.getElementById("fahr").value = x;
          y = (parseFloat(document.getElementById("cels").value)) + 273.15;
          y = y.toFixed(2);
          document.getElementById("kel").value = y;
            if(document.getElementById("cels").value == ''){
            document.getElementById("fahr").value = '';
            document.getElementById("kel").value = '';
          }
        }
        else if(degrees == "kel"){
          x = (document.getElementById("kel").value - 273) * 9 / 5 + 32;
          x = x.toFixed(2);
          document.getElementById("fahr").value = x;
          y = document.getElementById("kel").value - 273;
          y = y.toFixed(2);
          document.getElementById("cels").value = y;
            if(document.getElementById("kel").value == ''){
            document.getElementById("fahr").value = '';
            document.getElementById("cels").value = '';
            }
    }
}}
function reset(){
    document.getElementById("fahr").value = '';
    document.getElementById("cels").value = '';
    document.getElementById("kel").value = '';
}