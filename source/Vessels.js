class Vessels{
    pos_x;
    pos_y;
    width;
    height;
    speed;
    timeDelta;

    constructor(pos_x, pos_y, width, height){
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.width = width;
        this.height = height;
        this.speed = 0;
        this.timeDelta = 0;
    }

    setPosition (){
        this.pos_x += this.speed * (this.timeDelta / 1000);
    }
}
