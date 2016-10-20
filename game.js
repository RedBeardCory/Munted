//this is the game.js file

function initCanvas() {

    //select the canvas
    //this is global so everything can see it
    c = document.getElementById("game").getContext("2d");
    
    //change the background colour
    c.fillStyle = "black";
    
    //fillRect(start x, start y, size width, size height)
    //this one just makes the background black
    c.fillRect(0, 0, 400, 400);
}

function main(){
    
    
    
    //creates a new block on a random position between 1 and 400px every 10 ms
    //setInterval(blocks, 10);
    
    //create a ball that bounces around the canvas
    //first, create an object of type ball
    var ballObject = new Ball("white");
    
    //call the draw function on the ball
    //ballObject.draw(100, 100);
    
    //vars to control the animation below
    var xV = ballObject.speed;
    var yV = ballObject.speed;
    //must put these outside of the interval loop so that they don't reset every time
    
    //this is responsible for making the ball move around the canvas
    setInterval(function(){
        
        //to move the ball around we want to just change the x and y values over time
        //but i don't want the ball to move past the edge of the box so i gotta set some boundaries for it
        //to do this i'll put in some "boundary" conditions with some simple if statements
        
        //but first i'll change the value of the proposed new position
        ballObject.posX += xV;
        ballObject.posY += yV;
        //the += just means increment by whatever follows
        
        //check to see if the ball hits the roof or the floor
        if(ballObject.posY <= 0 || ballObject.posY >= 400){
        if(ballObject.posY <= 12 || ballObject.posY >= 388){
            //we will want to reverse the direction of movement in the y axis
            yV = yV * -1;
        }
        
        //now check to see if the ball hits the sides
        if(ballObject.posX <= 12 || ballObject.posX >= 388){
            //if so then reverse the x movement
            xV = xV * -1;
        }
        
        //now we call the drawbounce function on the ball
        ballObject.drawBounce();
        
    }, 15);

    
    /* demo of the keydown function
    $("body").keydown(function(event) {
        if(event.which == 38){
            alert("pressed up, increase up velocity");
        }
        
        if(event.which == 39){
            alert("pressed right, increase right velocity");
        }
        
        if(event.which == 40){
            alert("pressed down, increase down velocity");
        }
        
        if(event.which == 37){
            alert("pressed left, increase left velocity");
        }
        
    });
    
    */
}

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

//creating a ball object
//can specify colour in the parameters
function Ball(colour) {
    
    //all the "this.blah" things are specific properties of the object
    //give it a way to store it's position
    this.posX = 200;
    this.posY = 12;
    
    //specify the size of the ball
    this.radius = 10;
    
    //give it a speed
    this.speed = 2;
    
    //set the colour given in the parameters
    this.colour = colour;
    
    
    //defining a function that is specific to the ball object
    this.draw = function draw(x, y) {
        
        //setting the x and y values of the ball through the parameters of the function draw
        this.posX = x;
        this.posY = y;
        
        //begin path means you start drawing an invisible line
        c.beginPath();
        
        //this is the line that is drawn invisibly
        c.arc(this.posX, this.posY, 20, 0, Math.PI* 2, false);
        
        //then specify the colour of the fill
        c.fillStyle = this.colour;
        
        //and finally colour in the stroked line
        c.fill();
        
    }
    
    //make the ball bounce around the box
    this.drawBounce = function drawBounce() {
        
        //add bluring of the ball as it moves
        //this is done by filling in the whole screen with black, but it is not solid, its slightly see through
        c.fillStyle = "rgba(0, 0, 0, 0.2)";
        
        //now draw that over the top of everything
        c.fillRect(0, 0, 400, 400);
        
        //now we draw the next position of the ball on top of everything 
        //to save on code i'm just going to call the draw function i've already written
        this.draw(this.posX, this.posY);
        
    }
    
}