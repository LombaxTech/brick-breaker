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

        // if (this.position.y == 560 - this.size) {
        //     this.speed.x = 0;
        //     this.speed.y = 0;
        // }

        if (
            this.position.x >= this.game.paddle.position.x &&
            this.position.x <=
                this.game.paddle.position.x + this.game.paddle.width &&
            this.position.y == 560 - this.size
        ) {
            // this.speed.x = 0;
            this.speed.y = -this.speed.y;
        }
        // console.log({
        //     // paddleHeight: this.game.paddle.height,
        //     paddleWidth: this.game.paddle.width,
        //     paddlePos: this.game.paddle.position.x,
        //     paddleRange: this.game.paddle.position.x + this.game.paddle.width,
        //     // paddleY: this.game.paddle.position.y,
        //     ballX: this.position.x,
        // });
    }
}
