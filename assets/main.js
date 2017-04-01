let game;

let _width = window.innerWidth;
let _height = window.innerHeight;

game = new Phaser.Game(_width, _height, Phaser.AUTO, '');
game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.start('Menu');

