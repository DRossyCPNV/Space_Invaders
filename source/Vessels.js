class Vessels {
    pos_x;
    pos_y;
    width;
    height;
    speed;
    healthPoints;
    //timeDelta;

    constructor(pos_x, pos_y, width, height) {
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.width = width;
        this.height = height;
        this.speed = 0;
        this.healthPoints = 100;
        //this.timeDelta = 0;
    }

    //Compute the position with linear motion
    setPosition() {
        let checkPos_x = this.pos_x + (this.speed /* *(this.timeDelta / 1000)*/);

        //Check that the computed position in within the canvas' boundaries
        if(checkPos_x < 0) {
            this.pos_x = 0;
        }
        else if(checkPos_x > canvas.width - vessel.width) {
            this.pos_x = canvas.width - vessel.width;
        }
        else {
            this.pos_x = checkPos_x;
        }
    }
}
