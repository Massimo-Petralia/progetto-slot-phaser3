/// <reference path='./phaser.d.ts'/>


module Example{
    export class InitPhaser {
 
        static gameRef:Phaser.Game;
 
        public static initGame() {
 
            let config = {
                type: Phaser.AUTO,
                width: 800,
                height: 600,
                scene: ExampleScene,
                banner: true,
                title: 'Example',
                url: 'https://updatestage.littlegames.app',
                version: '1.0.0'
            }
 
            this.gameRef = new Phaser.Game(config);
        }
    }
}
 
window.onload = () => {
    Example.InitPhaser.initGame();
};