class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //added a visiblity property
    this.visiblity=255;
  }
  display(){
  //  console.log(this.body.speed);
    //to display pig only when speed of the pig is less than threshold
    if (this.body.speed < 3){
      //called display from the base class
      super.display();
    }
   else {
     //removed the pig from the main World
     World.remove(world,this.body);
     //so that the changes don't leak outside
     push();
     //reducing the visiblity by 5 for every frame
     this.visiblity = this.visiblity - 5 ;
     //transparency
     tint(255,this.visiblity);
     //displayed the image
     image(this.image,this.body.position.x,this.body.position.y,50,50);
     pop();
   }
  }

    score(){
      if (this.visiblity<0 && this.visiblity > -1005){
        score++
      }
    }

};

