//Manage all drawings
function draw() {
    erase();
    drawVessel();
    drawProjectiles();
}

//Clean up canvas
function erase() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//Draw vessel
function drawVessel() {
    vessel.setPosition();
    ctx.fillStyle = '#00f8ff';
    ctx.fillRect(vessel.pos_x, vessel.pos_y, vessel.width, vessel.height);
}

//Draw projectile
function drawProjectiles() {
    ctx.fillStyle = '#ff9c00';
    projectiles.forEach(function (projectile) {
        ctx.fillRect(projectile.pos_x, projectile.pos_y, projectile.width, projectile.height);
    });
}