//Create context
var canvas = document.getElementById('myCanvas');

if(canvas.getContext){
    var ctx = canvas.getContext('2d');
}
else {
    document.getElementById('noCanvas').innerHTML = 'Canvas not supported on your browser';
}

//Add event listeners for vessel movements
window.addEventListener('keydown', vesselStartMovement, true);
window.addEventListener('keyup', vesselStopMovement, true);

//Create vessel
var vessel;

//Create projectiles list
var countProjectiles = 0;
var projectiles = new Array();

//Check if the vessel starts moving
function vesselStartMovement(event) {
    let speed = 0;
    //Go right when hit D key
    if (event.keyCode === 68) {
        speed = vesselSpeed;
    }
    //Go left when hit A key
    if (event.keyCode === 65) {
        speed = -vesselSpeed;
    }
    //Fire projectile when hit Spacebar
    if (event.keyCode === 13) {
        countProjectiles += 1;
        let projectile = new Projectiles(countProjectiles);
        projectiles.push(projectile);
    }
    vessel.speed = speed;
}

//Check if the vessel stops moving
function vesselStopMovement(event) {
    let speed = 0;
    vessel.speed = speed;
    vessel.timeDelta = 0;
}

function main() {
    vessel = new Vessels(vesselInitialPos_X, vesselInitialPos_Y, vesselWidth, vesselHeight);

    setInterval(function () {
        draw();
        }
    , fps);
}
