//add all overlay effects here

//start off by selecting the canvas on top and putting it all into it's own object

//we'll also make a global variable which is of type overlay so we van call whenever
overlay = new Overlay();

function Overlay() {
    
    //now set up a few different "states" that the overlay can be in
    //the states will just be functions that can be run to produce an effect
    
    
    
    this.name = "overlay";
    
    //the clear Overlay will put the overlay back to a clear panel which an effect can be applied to
    this.clearOverlay = function clearOverlay() {
        
        o.fillStyle = "rgba(0, 0, 0, 0)";
        o.fillRect(0, 0, 400, 400);
        
    }
    
    this.test = function test() {
        
        o.fillStyle = "rgba(0, 256, 0, 0.4)";
        o.fillRect(0, 0, 400, 400);
    }
    
    //function to add a frosted effect to the screen
    this.frost = function frost() {
        
    }
    
    //add "too bright" effect on the screen (kinda like a flash)
    this.bright = function bright() {
        
    }
    
    //add night effect
    this.night = function night() {
        
    }
}