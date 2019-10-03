//Create context
var canvas = document.getElementById('myCanvas');

if(canvas.getContext){
    var ctx = canvas.getContext('2d');
}
else {
    document.getElementById('noCanvas').innerHTML = 'Canvas not supported on your browser';
}

//Add event listeners for vessel movements
window.addEventListener('keydown', keyDown, true);
window.addEventListener('keyup', keyUp, true);

//Create key_map
var keyMap = {65: false, 68: false, 13: false};

//Create vessel
var vessel;

//Create projectiles list
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
    vessel = new Vessels(vesselInitialPos_X, vesselInitialPos_Y, vesselInitialWidth, vesselInitialHeight);

    requestAnimationFrame(animation);

    /*
    setInterval(function () {
        vessel.checkMove();
        vessel.checkFire();
        draw();
        }
    , fps);
     */
}

function animation() {
    vessel.checkMove();
    vessel.checkFire();
    draw();
    requestAnimationFrame(animation);
}
