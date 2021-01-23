//Example of diff data types in a variables

// //string
// var a = "hello";
// console.log(a);

// //number
// var b = 100;
// console.log(b);

// //boolean values
// var c = true;
// console.log(c);

// //undefined
// var d;
// console.log(d);

// //null
// d = null;
// console.log(d);

// //example of an array

// var arr1 = [1,2,3,4,5]
// console.log(arr1);

// var arr2 = ["name",12,true];
// console.log(arr2);

// var arr3 =[ [1,2],[2,3],[3,4]];
// console.log(arr3);

// //access the first element of the array
// console.log(arr3[0]);

// //access the second element from the first  array inside array 3
// console.log(arr3[0][1]);

// arr3.push("sujal");
// console.log(arr3);

// arr3.pop();
// console.log(arr3);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var GameState = "onsling";


var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
   
    getbackgroundimg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,55);

    score = 0;

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:55});
}

function draw(){
    if (backgroundImg)
    background(backgroundImg);

    noStroke();
    textSize(35)
    fill("white")
    text("Score:" + score ,width-300,50);
    
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig1.score()


    box3.display();
    box4.display();
    pig3.display();
    log3.display();
    pig3.score();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    

    getbackgroundimg();
}

function mouseDragged(){
   // if (GameState !== "launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
   // }
}


function mouseReleased(){
    slingshot.fly();
    GameState="launched";
}

//to reset the bird on sling when space(32) is pressed 
function keyPressed(){
    if (keyCode === 32 && bird.body.speed < 1){
      slingshot.attach(bird.body)
      bird.trajectory = []
    Matter.Body.setPosition(bird.body,{x:200,y:55})    

    }
}


async function getbackgroundimg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    console.log(datetime);
    //2021-01-09T18:06:53.219908+09:00
    var hour = datetime.slice(11,13);

    if(hour>=06 && hour<=19){
        bg = "sprites/bg.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }
     backgroundImg = loadImage(bg);
     console.log(backgroundImg);
    
}