const bar = document.getElementById('bar');
function webpageOpen(){
    var URL = bar.value;
    if (URL === "calculator" || URL === "Calculator"){
        URL = "cu.html";
    } else if (URL === "photos" || URL === "Photos" || URL === "My Photos" || URL === "my photos" || URL === "My photos"){
        URL = "photoz.html"
    } else if(URL === "tynker"){
        URL = "https://tynker.com"
    }
    if (event.keyCode === 13){
    window.open(URL,'Popup','top=0,left=0,width=1920,height=1080');}
}
function change(){
    document.getElementsByTagName("body").style = 'background:url(MonolithAttack18.gif);';
}
