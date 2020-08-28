class chain
{
    constructor(bodyA,bodyB)
    {
        var options=
    {
        bodyA:bodyA,
        pointB:bodyB, 
        stiffness:0.05,
        lenght:2
    }
   this. chain =  Matter.Constraint.create(options) 
   this.pointB=bodyB;
   World.add(world,this.chain)
    }
    fly()
    {
        
        this.chain.bodyA=null

    }
    display()
    {
        push()
        if(this.chain.bodyA!=null)
        {
        var pointA=this.chain.bodyA.position;
       // var pointB=this.poi
        

        line(pointA.x,pointA.y,this.pointB.x,this.pointB.y)
        }
        pop()


    }
    attach(bodyA)
    {
        this.chain.bodyA=bodyA
    }
}