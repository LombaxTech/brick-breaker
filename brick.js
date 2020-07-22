export default class Brick {
    constructor(game, position) {
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.image = document.getElementById("brickImage");
        this.position = position;
        this.width = 80;
        this.height = 30;
    }

    update() {}

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
