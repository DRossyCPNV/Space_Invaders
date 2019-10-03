//Display constants
//var fps = Math.ceil(1000/*in milliseconds*/ / 60/*number of frames*/);
var stopper = 10;
var bottomSpace = 10;

//Invader constants
var invaderInitialWidth = 50;
var invaderInitialHeight = 50;
var invaderInitialPos_X = Math.ceil(document.getElementById('myCanvas').width / 2) - Math.ceil(invaderInitialWidth / 2);
var invaderInitialPos_Y = document.getElementById('myCanvas').height - invaderInitialHeight - bottomSpace ;
var invaderInitialSpeed = 10;

var defenderInitialWidth = 50;
var defenderInitialHeight = 50;
var defenderInitialPos_X = Math.ceil(document.getElementById('myCanvas').width / 2) - Math.ceil(defenderInitialWidth / 2);
var defenderInitialPos_Y = defenderInitialHeight + bottomSpace ;

//Projectiles constants
var projectileInitialWidth = 5;
var projectileInitialHeight = 5;
var projectileInitialSpeed = 20;

//Key mapping constants
var key_A = 65;
var key_D = 68;
var key_Enter = 13;