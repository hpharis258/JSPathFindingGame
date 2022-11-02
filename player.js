canvas = document.getElementById("gameScreen");
context = canvas.getContext("2d");

let player
        
        this.playerX = x;
        this.playerY = y;
        this.width = w;
        this.height = h;
    
    // Draw new player
    draw() 
    {
        context.fillRect(playerX, playerY, width, height);
        requestAnimationFrame(draw);
    }

