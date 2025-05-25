const startBtn = document.getElementById('startGame');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')
startBtn.addEventListener('click', function(){
    document.body.style = "background-color:black;color:white;";
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
})