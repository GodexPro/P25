class Dustbin{
    constructor(x,y,width,height){
        var opt = {
            restitution : 0.5,
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,opt);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("blue");
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}