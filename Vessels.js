class Vessels{
    pos_x;
    pos_y;
    width;
    height;

    constructor(pos_x, pos_y, width, height){
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.width = width;
        this.height = height;
    }

    moveRight(){
        this.pos_x += 1;
    }

    moveLeft(){
        this.pos_x -= 1;
    }
}