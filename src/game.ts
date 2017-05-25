/// <reference path="../node_modules/phaser-ce/typescript/phaser.d.ts" />
namespace ShapeCreator {
    export class Game {
        game: Phaser.Game;

        constructor() {
            this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { create: this.create, preload: this.preload })
        }

        preload() {
            this.game.load.image('logo', 'assets/logo.png');
        }

        create() {
            // var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
            // logo.anchor.setTo(0.5, 0.5);

            this.game.stage.backgroundColor = 0xffffff;

            var test = ShapeCreator.Models.Shape.createRectangle(this.game, 0, 0);
            var test = ShapeCreator.Models.Shape.createRectangle(this.game, 100, 100);

            var test1 = ShapeCreator.Models.Shape.createEllipse(this.game, 100, 200);
        }
    }
}

window.onload = function () {
    var game = new ShapeCreator.Game();

    game.game.state.add();
};
