//this is for the cool randomised drawing effect

//colours in the canvas with coloured blocks
function blocks(){
    
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
