//Display constants
var fps = Math.ceil(1000/*in milliseconds*/ / 60/*number of frames*/);

//Vessel constants
var vesselInitialWidth = 50;
var vesselInitialHeight = 50;
var vesselInitialPos_X = Math.ceil(document.getElementById('myCanvas').width / 2) - Math.ceil(vesselInitialWidth / 2);
var vesselInitialPos_Y = 400; //Take vessel height into consideration
var vesselInitialSpeed = 5;

//Projectiles constants
var projectileInitialWidth = 5;
var projectileInitialHeight = 5;
var projectileInitialSpeed = 10;

//Key mapping constants
var key_A = 65;
var key_D = 68;
var key_Enter = 13;