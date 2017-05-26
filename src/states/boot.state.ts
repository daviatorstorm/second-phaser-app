namespace ShapeCreator.States {
    export class BootState extends Phaser.State {
        preload () {
            this.game.stage.backgroundColor = 0x000000;
        }
        update() {
            if (this.game.stage.backgroundColor >= 0xffffff) {
                this.state.start('game', true, true);
            } else {
                this.game.stage.backgroundColor += 328965;
            }
        }
    }
}