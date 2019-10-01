function draw() {
    erase();
    drawVessel();
}

function erase() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawVessel() {
    vessel.setPosition();
    ctx.fillStyle = '#00f8ff';
    ctx.fillRect(vessel.pos_x, vessel.pos_y, vessel.width, vessel.height);
}
