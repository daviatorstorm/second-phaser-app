/// <reference path="../node_modules/phaser-ce/typescript/phaser.d.ts" />
namespace ShapeCreator {
    export class Game {
        game: Phaser.Game;

        constructor() {
            // this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'game')
            this.game = new Phaser.Game({
                height: 600,
                width: 800,
                renderer: Phaser.CANVAS,
                parent: 'game'
            });
        }
    }
}

window.onload = function () {
    var game = new ShapeCreator.Game();

    game.game.state.add('boot', ShapeCreator.States.BootState);
    game.game.state.add('game', ShapeCreator.States.GameState);

    game.game.state.start('boot', true, true);
};
