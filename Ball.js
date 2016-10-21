//holds all stuff for the ball 

//creating a ball object
//can specify colour in the parameters
function Ball(colour) {
    
    //all the "this.blah" things are specific properties of the object
    //give it a way to store it's position
    this.posX = 200;
    this.posY = 11;
    
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
        c.arc(this.posX, this.posY, 10, 0, Math.PI* 2, false);
        
        //then specify the colour of the fill
        c.fillStyle = this.colour;
        
        //and finally colour in the stroked line
        c.fill();
        
    }
    
    //make the ball bounce around the box
    this.drawBounce = function drawBounce() {
        
        //there was more stuff here but it was causing this weird thing 
        //so i moved the clearing of the screen to the main method
        
        
        //now we draw the next position of the ball on top of everything 
        //to save on code i'm just going to call the draw function i've already written
        this.draw(this.posX, this.posY);
        
    }
    
}
 

