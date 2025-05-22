const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');
var color;
const fileNaym = document.getElementById("filenaym").value;
function changeColor(){
    color = document.getElementById('color').value;
}
setInterval(changeColor,1)
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color; // Set line color
    ctx.lineWidth = 2; // Set line width
    ctx.stroke();
}
let drawing = false;
let lastX, lastY; // Store last mouse position

canvas.addEventListener('mousedown', (event) => {
    drawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
});

canvas.addEventListener('mousemove', (event) => {
    if (drawing) {
        drawLine(lastX, lastY, event.offsetX, event.offsetY); // Call your drawLine function
        lastX = event.offsetX;
        lastY = event.offsetY;
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
});
function downloadImage() {
    const imageDataURL = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = imageDataURL;
    downloadLink.download = 'canvas.png'; // Set the filename
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink); // Clean up
}