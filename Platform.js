function Platform(colour) {
    
    //Size of the Platform
    this.width = 60;
    this.height = 10;
    this.speed = 2;
    this.posx = 20;
    this.posy = 350;
    
    this.draw = function draw(x){
        this.posx += x;
        
        //Colour of the Platform
        c.fillStyle = colour;
    
        //fillRect(start x, start y, size width, size height)
        c.fillRect(this.posx, this.posy, this.width, this.height);   
    } 
}