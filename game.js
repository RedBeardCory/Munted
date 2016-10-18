//this is the game.js file


function main(){
    
    //select the canvas
    //this is global so everything can see it
    c = document.getElementById("game").getContext("2d");
    
    //change the background colour
    c.fillStyle = "black";
    
    //fillRect(start x, start y, size width, size height)
    c.fillRect(0, 0, 400, 400);
    
    //creates a new block on a random position between 1 and 400px every 10 ms
    setInterval(blocks, 10);
}


function blocks (){
    
    //pick a random colour
    var a = Math.floor((Math.random() * 256) + 1);
    var b = Math.floor((Math.random() * 256) + 1);
    var c = Math.floor((Math.random() * 256) + 1);
    
    //make the colour string
    var colour = "rgba(" + a + ", " + b + ", " + c + ", " + 1 + ")";
    
    //gets the random x and y position
    var x = Math.floor((Math.random() * 400) + 1);
    var y = Math.floor((Math.random() * 400) + 1);
    
    //set the colour
    this.c.fillStyle = colour;
    
    //c.fillStyle = "rgba(0, 256, 0, 1)";
    //this.c.fillStyle = "white";
    this.c.fillRect(x, y, 10, 10);
}
