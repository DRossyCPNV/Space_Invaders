class Projectiles {
    id;
    pos_x;
    pos_y;
    width;
    height;
    speed;

    constructor(id) {
        this.id = id;
        this.pos_x = invader.pos_x + Math.ceil(invader.width / 2) - Math.ceil(projectileInitialWidth / 2);
        this.pos_y = invader.pos_y - projectileInitialHeight;
        this.width = projectileInitialWidth;
        this.height = projectileInitialHeight;
        this.speed = projectileInitialSpeed;
    }

    setPosition() {
        let checkPos_Y = this.pos_y - this.speed;
        this.pos_y = checkPos_Y;
    }

    detectCollision() {
        let self = this;
        defenders.forEach( function (defender) {
            if (self.pos_x < defender.pos_x + defender.width &&
                self.pos_x + self.width > defender.pos_x &&
                self.pos_y < defender.pos_y + defender.height &&
                self.pos_y + self.height > defender.pos_y) {
                return true;
            }
            else {
                return false;
            }
        });
    }
}

class Bullets extends Projectiles {
}
