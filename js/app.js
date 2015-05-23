
// ENEMY CLASS --> this function is acting like a javascript class to define the group of objects known as 'bugs'. This function defines which images is used,
//the x,y coordinates and randomizes the speed.
var Enemy = function(x,y) {

    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random() * 200) + 175);
};

//Enemy Position- multiplyies any movement by the dt paramater to ensure game runs at same speed for all computers.
Enemy.prototype.update = function(dt) {
    if(this.x <= 550){
        this.x += this.speed * dt;
    }else{
        this.x = -2;
}

//Enemy/Player Collision Detection
    if(player.x >= this.x - 45 && player.x <= this.x + 45){
        if(player.y >= this.y - 45 && player.y <= this.y + 45){
            player.x = 200;
            player.y = 400;
        }
    }
};

// Draws the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//PLAYER CLASS--> this function is acting like a javascript class to define the player object.
var Player = function(){
    this.sprite = 'images/char-horn-girl.png';
    this.x = 200;
    this.y = 400;
};

//Render function for the player
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Update function to handle player movements
//This ensures that the player will move left until the end of the canvas, right until the end of the canvas, up until before the water, and down until end of canvas.

Player.prototype.update = function(){
    if(this.arrowKey === 'left' && this.x > 50){
        this.x = this.x - 95;

    }else if(this.arrowKey === 'right' && this.x < 300){
        this.x = this.x + 95;

    }else if(this.arrowKey === 'up'){
        this.y = this.y - 80;

    }else if (this.arrowKey === 'down' && this.y < 400){
        this.y = this.y + 95;
    }
    this.arrowKey = null;

//Resets Player to starting point once they reach water

    if(this.y < 50){
        player.x = 200;
        player.y = 400;

    }

};

//Input handler for player movement
Player.prototype.handleInput = function(e){
    this.arrowKey = e;
};


//ENEMY INSTANCES- all enemy instances are being pushed into the array all Enemies, and their x and y starting points are set so that they start in different places.

var allEnemies = [];

    var bug1 = new Enemy(-300, 70);
        allEnemies.push(bug1);

    var bug2 = new Enemy(-400, 150);
        allEnemies.push(bug2);

    var bug3 = new Enemy(0, 20);
        allEnemies.push(bug3);

    var bug4 = new Enemy(0, 100);
        allEnemies.push(bug4);

    var bug5 = new Enemy(0, 200);
        allEnemies.push(bug5);


//PLAYER INSTANCE - the variable player is creating a new instance of the Player object
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
