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

//Draw invader
function drawVessel() {
    invader.setPosition();
    ctx.fillStyle = '#00f8ff';
    ctx.fillRect(invader.pos_x, invader.pos_y, invader.width, invader.height);

    ctx.fillStyle = '#c4ff00';
    defenders.forEach(function (defender) {
        defender.setPosition();
        ctx.fillRect(defender.pos_x, defender.pos_y, defender.width, defender.height);
    });
}

//Draw projectile
function drawProjectiles() {
    ctx.fillStyle = '#ff9c00';
    projectiles.forEach(function (projectile) {
        projectile.setPosition();
        ctx.fillRect(projectile.pos_x, projectile.pos_y, projectile.width, projectile.height);
    });
}