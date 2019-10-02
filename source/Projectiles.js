class Projectiles {
    id;
    pos_x;
    pos_y;
    width;
    height;
    speed;

    constructor(id) {
        this.id = id;
        this.pos_x = vessel.pos_x + Math.ceil(vessel.width / 2) - Math.ceil(projectileInitialWidth / 2);
        this.pos_y = vessel.pos_y - projectileInitialHeight;
        this.width = projectileInitialWidth;
        this.height = projectileInitialHeight;
        this.speed = projectileInitialSpeed;
    }

    setPosition() {
        let checkPos_Y = this.pos_y - this.speed;
        this.pos_y = checkPos_Y;
    }
}

class Bullets extends Projectiles {
}
