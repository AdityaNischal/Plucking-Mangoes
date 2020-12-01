class Mango {
    constructor(x,y) {
      var options = {
          isStatic: true,
          restitution: 0,
          friction: 1,

     
      }
      this.body = Bodies.circle(x,y,50,options);
      this.image = loadImage("mango.png")
      World.add(world,this.body)

    
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      strokeWeight(1)
      stroke("black")
      fill("rgb(255, 35, 240)");
      image(this.image,pos.x, pos.y);
    }
  };