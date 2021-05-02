class Box{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.4,
            density:0.2
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }
      display(){
       
        if(this.body.speed<1){
          var angle = this.body.angle;
        var pos= this.body.position;

        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("red")        
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }

      else{
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-10;
        tint(255,this.visibility)
        //console.log(this.visibility);
        rect(0,0,this.width, this.height);
        pop();
       
      }
        }

       score(){
         if(this.visibility<255&&this.visibility>200){
           Score++;

         }
       }





}