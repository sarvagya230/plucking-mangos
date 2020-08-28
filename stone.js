class Stone
{
    constructor(x,y,w,h)
    {
        this.x=x
        this.y=y
        //this.radius=r;
        this.height=w;
        this.width=h;
        //this.body=Matter.Bodies.circle(this.x,this.y,this.radius,{density:1.5})
        this.body=Matter.Bodies.rectangle(this.x,this.y,this.width,this.height,{density:1.5})
        World.add(world,this.body)
    }
    display()
    {
        var pos = this.body.position;
    
        push()
        translate(pos.x,pos.y)
        //ellipseMode(CENTER)
        stroke(50,50,50)
        fill(50,50,50)
        //ellipse(0,0,this.radius, this.radius)
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop()
    }
}