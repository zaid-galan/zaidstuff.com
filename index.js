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
    document.body.setAttribute('style','background:url(MonolithAttack18.gif);background-repeat:repeat;background-size:50%;');
    document.getElementById('bar').setAttribute('style','background-color:rgba(0,0,0,0.5);color:white;');
    document.getElementById('bar').setAttribute('placeholder','Enter URL or Command');
    document.getElementsByTagName('iframe')[0].setAttribute('style','background-color:rgba(0,0,0,0.5) !important;color:white;');
}
function change2(){
    document.body.setAttribute('style','background:url(texture6.jpg);background-repeat:repeat;background-size:100%;');
    document.getElementById('bar').setAttribute('style','background-color:rgba(0,0,0,0.5);color:white;');
    document.getElementById('bar').setAttribute('placeholder','Enter URL or Command');
    document.getElementsByTagName('iframe')[0].setAttribute('style','background-color:rgba(0,0,0,0.5) !important;color:white;');
}
function change3(){
    document.body.setAttribute('style','background:url(untitled.svg);background-repeat:repeat;background-size:25%;');
    document.getElementById('bar').setAttribute('style','background-color:rgba(0,0,0,0.5);color:white;');
    document.getElementById('bar').setAttribute('placeholder','Enter URL or Command');
    document.getElementsByTagName('iframe')[0].setAttribute('style','background-color:rgba(0,0,0,0.5) !important;color:white;');
}
function change4(){
    document.body.setAttribute('style','background:url(designer(7).jpeg);background-repeat:repeat;background-size:25%;');
    document.getElementById('bar').setAttribute('style','background-color:rgba(0,0,0,0.5);color:white;');
    document.getElementById('bar').setAttribute('placeholder','Enter URL or Command');
    document.getElementsByTagName('iframe')[0].setAttribute('style','background-color:rgba(0,0,0,0.5) !important;color:white;');
}
console.log(wordBank.length);