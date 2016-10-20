//file to hold all things particle related

//particle object
function Particle(x, y, colour) {
    
    //sets the position of the particles to explode from
    this.posX = x;
    this.posY = y;
    
    //set the size of the particle
    this.size = 15;
    
    //set the colour
    this.colour = colour;
    
    //want to get a random velocity for the particle to move 
    //one for horizontal and the other for verticalc velocity
    this.hV = (Math.random() * 10) - 5;
    this.vV = (Math.random() * 10) - 5;
    
    //gunna put gravity because why not
    this.g = 0.1;
    
    //to have the particle dissapear after a certain amount of draws
    this.draws = 0;
    this.life = 1;
    
    //give it an id
    this.id;
    
    //want to make a bunch of particles at one time
    //so made an array of them to be used
    
    //function to draw the particle
    this.draw = function draw() {
        
        //increment the draw count
        this.draws++;
        
        //check to see if the particle is still alive
        /*
        if(this.draws >= this.life){
            //if it should be dead then delete it
            delete this.particles[this.id];
        }
        */
        //otherwise we can redraw the particle
        //select the colour
        c.fillStyle = colour;
        
        //draw the particle on the screen
        //remember the parameters are 
        //(x, y, sizewidth, sizeheight)
        c.fillRect(this.posX, this.posY, this.size, this.size);
        
        //now update the position for next time
        this.posX += this.hV;
        this.posY += this.vV;
        
        //also modify the posY by gravity
        this.vV += this.g;
        
        //add collission with the walls just like the ball
        
    }
    
}