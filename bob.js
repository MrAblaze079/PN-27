class Bob {
    constructor(x, y, radius) {
      var options = {
          'isStatic': false,
          'restitution': 1,
          'friction': 0,    
          'density': 0.8
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
  
      World.add(world, this.body);
    }
    display(){
      var bobpos = this.body.position;
      push();
      ellipseMode(RADIUS);
      fill("purple");
      ellipse(bobpos.x, bobpos.y, this.radius, this.radius);
      pop();
    }
  }