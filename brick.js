import { detectCollision } from "./detectCollision.js";

export default class Brick {
    constructor(game, position) {
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.image = document.getElementById("brickImage");
        this.position = position;
        this.width = 80;
        this.height = 30;

        this.hit = false;
    }

    update() {
        if (detectCollision(this.game.ball, this)) {
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.hit = true;
        }
    }

    draw(context) {
        context.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }
}
