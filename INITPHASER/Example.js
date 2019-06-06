var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Example;
(function (Example) {
    var ExampleScene = /** @class */ (function (_super) {
        __extends(ExampleScene, _super);
        function ExampleScene() {
            return _super.call(this, { key: 'ExampleScene' }) || this;
        }
        ExampleScene.prototype.preload = function () {
            this.load.image('rullo', '../assets/rullo.png');
            this.load.image('symbol', '../assets/red.png');
            this.load.image('frame', '../assets/frame.png');
            this.load.image('button', '../assets/button.png');
        };
        ExampleScene.prototype.create = function () {
            this.button = this.add.image(700, 550, 'button').setScale(0.5, 0.5);
            this.rullo = this.add.image(228, 300, 'rullo');
            this.rullo = this.add.image(401, 300, 'rullo');
            this.rullo = this.add.image(574, 300, 'rullo');
            this.symbol = this.add.image(225, 300, 'symbol');
            this.frame = this.add.image(400, 300, 'frame');
            // this.frame.setScale(1, 1);// imposta scala X , Y;
        };
        ExampleScene.prototype.start = function () {
            this.button.addListener('click', function () { });
        };
        return ExampleScene;
    }(Phaser.Scene));
    Example.ExampleScene = ExampleScene;
})(Example || (Example = {}));
/// <reference path='./phaser.d.ts'/>
var Example;
(function (Example) {
    var InitPhaser = /** @class */ (function () {
        function InitPhaser() {
        }
        InitPhaser.initGame = function () {
            var config = {
                type: Phaser.AUTO,
                width: 800,
                height: 600,
                scene: Example.ExampleScene,
                banner: true,
                title: 'Example',
                url: 'https://updatestage.littlegames.app',
                version: '1.0.0'
            };
            this.gameRef = new Phaser.Game(config);
        };
        return InitPhaser;
    }());
    Example.InitPhaser = InitPhaser;
})(Example || (Example = {}));
window.onload = function () {
    Example.InitPhaser.initGame();
};
//# sourceMappingURL=Example.js.map