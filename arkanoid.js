const startBtn = document.getElementById('startGame');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
function hitter(){
    ctx.fillRect()
}
// ...existing code...

canvas.addEventListener('mousemove', function(event) {
    const rect = canvas.getBoundingClientRect(); // Get canvas position
    const mouseX = event.clientX - rect.left;    // Calculate mouse X relative to canvas
});

// ...existing code...
startBtn.addEventListener('click', function(){
    document.body.style = "background-color:black;color:white;";
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(mouseX,284,40,16)
})