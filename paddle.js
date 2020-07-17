export default class Paddle {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.width = 150;
        this.height = 30;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10,
            // x: 0,
            // y: 0,
        };

        this.maxSpeed = 10;
        this.speed = 0;
    }

    draw(context) {
        context.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }

    update(dt) {
        if (!dt) return;
        this.position.x += this.speed;

        if (this.position.x < 0) {
            this.position.x = 0;
            this.speed = 0;
        }
        if (this.position.x > this.gameWidth - this.width) {
            this.position.x = this.gameWidth - this.width;
            this.speed = 0;
        }
    }

    stop() {
        this.speed = 0;
    }

    moveLeft() {
        // if (this.speed > 0) return (this.speed = 0);
        this.speed = -this.maxSpeed;
    }
    moveRight() {
        this.speed = this.maxSpeed;
    }
}
