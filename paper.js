class Paper{
constructor(x,y,radius){
    
    var option={
    isStactic:true,
    'restitution':1.0,
    'friction':0.5,
    'density':1.2
  
  }
this.body=Bodies.circle(x,y,radius,option)
this.radius=radius
this.image=loadImage("sprites/paper.png")
World.add(world,this.body)

}
display(){
var pos=this.body.position
push();

fill("pink")
circle(200,455,this.radius)
pop();
}
}


