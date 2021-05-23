var car,wall,speed,weight;

function setup() {
  createCanvas(1000,400);

  car=createSprite(40, 200, 50, 50);
  wall=createSprite(900,200,60,200);
  wall.shapeColor=("grey");

  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX=speed;

  
}

function draw() {
  background(255,255,255);  
  deformation=0.5*weight*speed*speed/22500

    if(wall.x-car.x<wall.width/2+car.width/2){
      car.velocityX=0;
      if(deformation<100){
        car.shapeColor=("green")
      }
      else if(deformation<180&&deformation>100){
        car.shapeColor=("yellow");
      }
      else {car.shapeColor=("red")}
    }

  drawSprites();
}