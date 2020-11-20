class Stone{
    constructor(x,y,height,width)
    {
        var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:0.2,   
        }
    
        this.body =Bodies.rectangle(x,y,height,width,options);
        this.width = width;
        this.height = height;
        this.visiblity =255;
        
        World.add(world, this.body);
      }
    display()
    {
      if(this.body.speed<3)
    {
      rectMode(CENTER);
      fill("red");
      rect(this.body.position.x,this.body.position.y, this.width, this.height);
      pop();
    }
   else{
   
    World.remove(world,this.body);
    push();
    this.visiblity =this.visiblity-5;
    tint(255,this.visiblity);
    rect(this.body.position.x,this.body.position.y, this.width, this.height);
    pop();

   }
      
 

    }
  }