/// <reference path="../node_modules/phaser-ce/typescript/phaser.d.ts" />

class Game {
    game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { create: this.create, preload: this.preload })
    }

    preload() {
        console.log('In preload');
        this.game.load.image('logo', 'assets/logo.png');
    }

    create() {
        console.log('In create');
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }
}

window.onload = function () {
    var game = new Game();
};
