class Box4{
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            restitutions : 0.7,
            friction:0.6
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.body)
        this.visibility=255

    }
    display(){
        var pos = this.body.position;
        if(this.body.speed > 4){
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility -5;
          tint(255, this.visibility);
          pop();
        } else if(this.body.speed<4){
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width,this.height);
      }
    }
    score(){
        if(this.visibility<0 && this.visibility>-105){
           score++
        }
      
    }
    }