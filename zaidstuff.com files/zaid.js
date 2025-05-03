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
// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
