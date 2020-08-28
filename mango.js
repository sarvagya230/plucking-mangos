class mango 
{
    constructor(x,y)
    {
        //this.radius=10
        this.x=x;
        this.y=y;
        this.height=30;
        this.width=30;
        //this.body=Matter.Bodies.circle(this.x,this.y,this.radius,{isStatic:true})
        this.body=Matter.Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
        World.add(world,this.body)

    }
    display()
    {
    push()
     var pos=this.body.position
   //  translate(pos.x,pos.y)
     fill("yellow")
   //  ellipseMode(RADIUS);
    // ellipse(pos.x,pos.y,this.radius, this.radius)
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width, this.height)
    pop();
    }
}