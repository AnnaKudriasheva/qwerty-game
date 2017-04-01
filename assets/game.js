let player;
let cursors;
let spacefield;
let spaceValue = false;
let emitter;
let rocket;

let Game = {

    preload : function() {
        game.load.image('sky', './assets/img/sky.jpg');
        game.load.spritesheet('bird', 'assets/img/pigeon.png', 211, 211);
        game.load.spritesheet('rain', 'assets/img/rain.png');
        game.load.spritesheet('rocket', 'assets/img/rocket.png', 32, 32);
    },

    create : function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        spacefield = game.add.tileSprite(0, 0, game.width, game.height, 'sky');

        player = game.add.sprite(32, game.world.height - 400, 'bird');
        player.scale.set(0.5);

        // create rain emitter
        emitter = game.add.emitter(game.world.centerX, 0, 400);
        emitter.width = game.world.width;
        emitter.makeParticles('rain');
        emitter.minParticleScale = 0.1;
        emitter.maxParticleScale = 0.3;
        emitter.setYSpeed(300, 500);
        emitter.setXSpeed(-5, 5);
        emitter.minRotation = 0;
        emitter.maxRotation = 0;
        emitter.start(false, 1600, 5, 0);

        game.physics.arcade.enable(player);
        player.animations.add('fly', [0, 1, 2, 3], 8, true);
        player.body.collideWorldBounds = true;

        cursors = game.input.keyboard.createCursorKeys();
        cursors.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    },

    update: function() {
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;

        player.animations.play('fly');
        spacefield.tilePosition.x -= 1;
        player.animations.getAnimation('fly').speed = 8;

        if (cursors.up.isDown) {
            player.body.velocity.y = -100;

        }
        if (cursors.down.isDown) {
            player.body.velocity.y = 100;
        }

        if (cursors.left.isDown) {
            player.body.velocity.x = -50;

            player.animations.getAnimation('fly').speed = 6;
        }

        if (cursors.right.isDown) {
            player.body.velocity.x = 100;

            player.animations.getAnimation('fly').speed = 12;
        }

        if (cursors.space.isDown) {
            spaceValue = true;
        }
    }
};
