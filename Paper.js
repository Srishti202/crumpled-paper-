class Paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false	,
			density: 1.5 ,
            restitution : 0.6		
			}
            this.image = loadImage("paper.png")
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
	//		translate(paperPos.x, paperPos.y);
			imageMode(CENTER)
		image(this.image,paperPos.x,paperPos.y,this.w , this.h )
    
			pop()
			
	}

}