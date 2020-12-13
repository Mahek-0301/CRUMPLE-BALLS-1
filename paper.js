class Paper{
    constructor(x,y,r){
     var options = {
         isStatic : false,
         restitution : 0.3,
         friction : 0.5,
         density :3.6
     }

     this.r = r;
     this.body = Bodies.circle(x,y,this.r/2,options);
     World.add(world,this.body);
    }

    display(){

        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill(255,0,255)
        ellipse(0,0,this.r,this.r)
        pop();
    }
}