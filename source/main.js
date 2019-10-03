//Create context
var canvas = document.getElementById('myCanvas');

if(canvas.getContext){
    var ctx = canvas.getContext('2d');
}
else {
    document.getElementById('noCanvas').innerHTML = 'Canvas not supported on your browser';
}

//Add event listeners for invader movements
window.addEventListener('keydown', keyDown, true);
window.addEventListener('keyup', keyUp, true);

//Create key_map
var keyMap = {65: false, 68: false, 13: false};

//Create invader
var invader;
var countDefenders = 0;
var defenders = new Array();

//Create invader projectiles list
var countProjectiles = 0;
var projectiles = new Array();

function keyDown(event) {
    if(event.keyCode in keyMap) {
        keyMap[event.keyCode] = true;
    }
}

function keyUp(event) {
    if(event.keyCode in keyMap) {
        keyMap[event.keyCode] = false;
    }
}

function main() {
    invader = new Invaders(invaderInitialPos_X, invaderInitialPos_Y, invaderInitialWidth, invaderInitialHeight);
    countDefenders += 1;
    defenders.push(new Defenders(countDefenders, defenderInitialPos_X, defenderInitialPos_Y, defenderInitialWidth, defenderInitialHeight));

    requestAnimationFrame(animation);

    /*
    setInterval(function () {
        invader.checkMove();
        invader.checkFire();
        draw();
        }
    , fps);
     */
}

function animation() {
    invader.checkMove();
    invader.checkFire();
    projectiles.forEach(function (projectile) {
        projectile.detectCollision();
    });
    draw();
    requestAnimationFrame(animation);
}
