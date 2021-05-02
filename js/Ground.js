class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(1000,390,2000,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill("brown");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,3500,20);
    }
}