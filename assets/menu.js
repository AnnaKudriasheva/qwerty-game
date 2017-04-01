let background;

let Menu = {
    preload : function() {

        game.load.image('back', './assets/img/sky.jpg');
        game.load.image('logo', './assets/img/game-logo.png');
        game.load.image('play', './assets/img/play-btn.png');
        game.load.image('play', './assets/img/play-btn.png');
        game.load.image('info', './assets/img/info-btn.png');
        game.load.image('score', './assets/img/score-btn.png');
        game.load.spritesheet('bird', 'assets/img/pigeon.png', 211, 211);
    },

    create: function () {
        background = game.add.sprite(0, 0, 'back');
        background.width = game.width;
        background.height = game.height;

        game.add.sprite(game.world.centerX - 305, game.height - 500 , 'logo');

        // create game buttons
        game.add.button(game.world.centerX - 200, game.height - 280, 'score',
            this.startGame, this);
        game.add.button(game.world.centerX - 60, game.height - 300, 'play',
            this.startGame, this);
        game.add.button(game.world.centerX + 115 , game.height - 280, 'info',
            this.startGame, this);
    },

    startGame: function () {
        this.state.start('Game');
    }

};