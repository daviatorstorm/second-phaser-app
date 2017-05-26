namespace ShapeCreator.Models {
    export class Shape {

        static createRectangle(game: Phaser.Game, x: number, y: number) {
            let poly = new Phaser.Polygon();

            poly.setTo([new Point(0, 0), new Point(0, 100), new Point(100, 100), new Point(100, 0)]);

            let graphics = game.add.graphics(x, y);

            graphics.beginFill(Phaser.Color.getRandomColor());
            graphics.drawPolygon(poly.points);
            graphics.endFill();
        }

        static createEllipse(game: Phaser.Game, x: number, y: number) {
            let graphics = game.add.graphics(x, y)

            graphics.beginFill(Phaser.Color.getRandomColor());
            graphics.endFill();

            graphics.lineStyle(1, 0xdd90a1);

            graphics.drawEllipse(0, 0, 100, 50);
        }
    }

    class Point extends Phaser.Point { }
}