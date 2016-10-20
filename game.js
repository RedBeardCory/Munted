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
    ballObject.drawBounce();
    
    //vars to control the animation below
    var xV = ballObject.speed;
    var yV = ballObject.speed;
    //must put these outside of the interval loop so that they don't reset every time
    
    //testing the particles
    var particle = new Particle(200, 200, "orange");
    
    //limit the number of particles
    var particleCount = 10;
    
    var particles = new Array(particleCount);
    
    //make the particles
    for(i = 0; i < particleCount; i++){
        particles[i] = new Particle(200, 200, "white");
        particles[i].id = i;
    }
    
    //this is responsible for making everything move around the canvas
    //it's basically the frames in a loop and the draw() functions of each object is done inside it
    setInterval(function(){
        
        //to move the ball around we want to just change the x and y values over time
        //but i don't want the ball to move past the edge of the box so i gotta set some boundaries for it
        //to do this i'll put in some "boundary" conditions with some simple if statements
        
        //but first i'll change the value of the proposed new position
        ballObject.posX += xV;
        ballObject.posY += yV;
        //the += just means increment by whatever follows
        
        //check to see if the ball hits the roof or the floor
        if(ballObject.posY <= 10 || ballObject.posY >= 390){
            //we will want to reverse the direction of movement in the y axis
            yV = yV * -1;
        }
        
        //now check to see if the ball hits the sides
        if(ballObject.posX <=10 || ballObject.posX >= 390){
            //if so then reverse the x movement
            xV = xV * -1;
        }
        
        //this is done by filling in the whole screen with black, but it is not solid, its slightly see through
        c.fillStyle = "rgba(0, 0, 0, 0.2)";
        
        //now draw that over the top of everything
        c.fillRect(0, 0, 400, 400);
        
        //now we call the drawbounce function on the ball
        ballObject.drawBounce();
        
        for(i = 0; i < particleCount; i++){
            particles[i].draw();
        }
        
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





