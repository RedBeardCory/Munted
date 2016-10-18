//this is the game.js file

//richard
function main(){
    
    //select the canvas
    //this is global so everything can see it
    c = document.getElementById("game").getContext("2d");
    
    //change the background colour
    c.fillStyle = "black";
    
    //fillRect(start x, start y, size width, size height)
    c.fillRect(0, 0, 400, 400);
    
    //creates a new block on a random position between 1 and 400px every 10 ms
    setInterval(blocks, 1);
}


function blocks (){
        console.log("this was called")
        var bitch = Math.floor((Math.random() * 400) + 1);
        var butt = Math.floor((Math.random() * 400) + 1);
        c.fillStyle = "white";
        c.fillRect(bitch, butt, 10, 10);
    }
