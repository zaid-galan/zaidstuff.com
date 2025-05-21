document.addEventListener('mousemove', (event) => {
    var mouseX = event.clientX;
    document.getElementById('hitter').style.left = (mouseX - 50) + 'px';
});
