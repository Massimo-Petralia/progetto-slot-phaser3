
module Example {
 
    export class ExampleScene extends Phaser.Scene {

            rullo: Phaser.GameObjects.Image;
            frame: Phaser.GameObjects.Image;
            symbol: Phaser.GameObjects.Image;
            symbols: Phaser.GameObjects.Image[];
            button: Phaser.GameObjects.Image;
        constructor() {
            super({ key: 'ExampleScene' });
         }
 
        preload() {
            this.load.image('rullo', '../assets/rullo.png');
            this.load.image('symbol', '../assets/red.png');
            this.load.image('frame', '../assets/frame.png');
            this.load.image('button', '../assets/button.png');
        }
 
        create() {
            this.button = this.add.image(700, 550, 'button').setScale(0.5, 0.5);
            this.rullo = this.add.image(228, 300, 'rullo');
            this.rullo = this.add.image(401, 300, 'rullo');
            this.rullo = this.add.image(574, 300, 'rullo');
            this.symbol = this.add.image(225, 300, 'symbol');


            this.frame = this.add.image(400, 300, 'frame');
           // this.frame.setScale(1, 1);// imposta scala X , Y;

          
        }

        start() {
            this.button.addListener('click', () => {})
        }
    }
}