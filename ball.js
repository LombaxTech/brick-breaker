export default class Ball {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.image = document.getElementById("ballImage");

        this.position = {
            x: 10,
            y: 10,
        };

        this.speed = {
            x: 2,
            y: 2,
        };

        this.size = 16;
    }

    draw(context) {
        context.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.size,
            this.size
        );
    }

    update(dt) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (
            this.position.x < 0 ||
            this.position.x > this.gameWidth - this.size
        ) {
            this.speed.x = -this.speed.x;
        }
        if (
            this.position.y < 0 ||
            this.position.y > this.gameHeight - this.size
        ) {
            this.speed.y = -this.speed.y;
        }
    }
}
