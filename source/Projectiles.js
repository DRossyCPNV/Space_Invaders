class Projectiles {
    id;
    pos_x;
    pos_y;
    width;
    height;
    speed;

    constructor(id) {
        this.id = id;
        this.pos_x = vessel.pos_x + Math.floor(vessel.width / 2);
        this.pos_y = vessel.pos_y - projectileHeight;
        this.width = projectileWidth;
        this.height = projectileHeight;
        this.speed = projectileSpeed;
    }
}

class Bullets extends Projectiles {

}
