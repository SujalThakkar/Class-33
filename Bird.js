class Bird extends BaseClass {
  constructor(x,y){

    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':2.0
  }
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();

    if (this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x,this.body.position.y];
      this.trajectory.push(position);
    }

   
    for (var i = 0;i <this.trajectory.length;i++){
    image(this.smokeImage, this.trajectory[i][0],this.trajectory[i][1]);

      // 00 01
      // 10 11
      // 20 21
      // arr3 = [[arra], [arrb], [arrc]]
    }
  }
}
