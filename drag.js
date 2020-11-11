
class Sling{
	constructor(x,y,r){
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display(){
			var stonepos=this.body.position;
			var angle = this.body.angle;		
			push()
			translate(stonepos.x, stonepos.y);
			rotate(angle)
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			ellipse(0,0,this.r*2,this.r*2)
			pop()
			
	}

}