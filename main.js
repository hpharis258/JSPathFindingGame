let player;
let enemies = [];
function setup(){
    createCanvas(700,700);
    player = new Player();
}

function draw(){
    background(100,100,100);
    rectMode(CENTER);
    player.draw();
    player.update();
    //
    for(let i = enemies.length - 1; i >= 0; i--)
    {
        enemies[i].draw();
        enemies[i].update();
        //
        if(player.hasShot(enemies[i]))
        {
            enemies.splice(i, 1);
        }
    }
    if(frameCount % 200 == 0){
        enemies.push(new Enemy(2));
    }
}
//
function mouseClicked()
{
    player.shoot();
}
