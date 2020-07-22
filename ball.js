import { detectCollision } from "./detectCollision.js";

export default class Ball {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.image = document.getElementById("ballImage");
        this.game = game;

        this.position = {
            x: 10,
            y: 10,
        };

        this.speed = {
            x: 3,
            y: 3,
        };

        this.size = 26;
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

        // * CHECK IF BALL IS HITTING LEFT OR RIGHT
        if (
            this.position.x < 0 ||
            this.position.x > this.gameWidth - this.size
        ) {
            this.speed.x = -this.speed.x;
        }

        // * CHECK IF BALL IS HITTING TOP OR BOTTOM
        if (
            this.position.y < 0 ||
            this.position.y > this.gameHeight - this.size
        ) {
            this.speed.y = -this.speed.y;
        }

        // // if (this.position.y == 560 - this.size) {
        // //     this.speed.x = 0;
        // //     this.speed.y = 0;
        // // }

        // let ballLeftEnd = this.position.x;
        // let ballRightEnd = this.position.x + this.size;
        // let paddleStart = this.game.paddle.position.x;
        // let paddleEnd = this.game.paddle.position.x + this.game.paddle.width;
        // let ballBottom = this.position.y + this.size;
        // let paddleTop = this.game.paddle.position.y;

        // if (
        //     ballRightEnd >= paddleStart &&
        //     ballLeftEnd <= paddleEnd &&
        //     ballBottom >= paddleTop
        // ) {
        //     // this.speed.x = 0;
        //     // this.speed.y = 0;
        //     this.speed.y = -this.speed.y;
        // }
        if (detectCollision(this, this.game.paddle)) {
            this.speed.y = -this.speed.y;
        }
    }
}
