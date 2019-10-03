class Vessels {
    pos_x;
    pos_y;
    width;
    height;
    speed;
    health;

    constructor(pos_x, pos_y, width, height) {
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.width = width;
        this.height = height;
        this.speed = 0;
        this.health = 100;
    }

    //Compute the position with linear motion
    setPosition() {
        let checkPos_x = this.pos_x + (this.speed /* *(this.timeDelta / 1000)*/);

        //Check that the computed position in within the canvas' boundaries
        if(checkPos_x < stopper) {
            this.pos_x = stopper;
        }
        else if(checkPos_x > canvas.width - stopper - invader.width) {
            this.pos_x = canvas.width - stopper - invader.width;
        }
        else {
            this.pos_x = checkPos_x;
        }
    }

    checkFire() {
        //Vessel fires projectiles
        if(keyMap[key_Enter]) {
            countProjectiles += 1;
            let projectile = new Projectiles(countProjectiles);
            projectiles.push(projectile);
        }
    }
}

class Invaders extends Vessels {

    checkMove() {
        let invaderSpeed = invader.speed;

        if(keyMap[key_A] || keyMap[key_D]) {
            if(keyMap[key_A]) {
                invaderSpeed = -invaderInitialSpeed;
            }
            else {
                invaderSpeed = invaderInitialSpeed;
            }
        }
        else {
            invaderSpeed = 0;
        }

        invader.speed = invaderSpeed;
    }
}

class Defenders extends Vessels {
    id;

    constructor(id, pos_x, pos_y, width, height) {
        super(pos_x, pos_y, width, height);
        this.id = id;
    }
}
