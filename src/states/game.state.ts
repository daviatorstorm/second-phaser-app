namespace ShapeCreator.States {
    export class GameState extends Phaser.State {
        create() {
            this.drawWorkPlace();

            var test = ShapeCreator.Models.Shape.createRectangle(this.game, 0, 0);

            var test1 = ShapeCreator.Models.Shape.createEllipse(this.game, 100, 200);
        }

        preload() {
        }

        drawWorkPlace() {
            var creationField = this.game.add.graphics(25, 50);

            creationField.lineStyle(8, 0x000000);

            creationField.drawRect(0, 0, this.game.world.width - 50, this.game.world.height - 75);
        }
    }
}