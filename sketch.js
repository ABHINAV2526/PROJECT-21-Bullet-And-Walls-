var bullet,thickness
var wall
var speed
var weight
var time 
var damage

function setup() {
  createCanvas(1366,657);

  boundary1 = createSprite(1360, 275, 30, 800);
  boundary1.shapeColor = "blue"

  boundary2 = createSprite(4, 275, 30, 800);
  boundary2.shapeColor = "blue"
  
  boundary3 = createSprite(660,5,1370, 30);
  boundary3.shapeColor = "blue"
  
  boundary4 = createSprite(660, 650, 1370, 30);
  boundary4.shapeColor = "blue"

  speed = Math.round(random(223,321))
  weight = Math.round(random(30,52))
  thickness = random(22,83)

  wall = createSprite(1100,328,thickness,600)
  wall.shapeColor = "white"

  bullet = createSprite(120,590,40,10)
  bullet.y = Math.round(random(80,590))
  bullet.setLifetime = 30
  bullet.shapeColor = "yellow"
  bullet.velocityX = speed

  time = 0
 
  damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

}

function draw() {

  background("black");

    
   strokeWeight(1)
    stroke("blue")
    fill("orange")
    textSize(30)
    text("Weight = " + weight, 205, 65)

    stroke("blue")
    strokeWeight(1)
    fill("orange")
    textSize(30)
    text("Speed = " + speed, 505, 65)

    if (bullet.isTouching(wall)){

    bullet.velocityX = 0
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

    if(damage<10){

      wall.shapeColor = "green"

    }
    
    if(damage>10){

      wall.shapeColor = "red"

    } 

}

if(frameCount%30 === 0){
  time = time+1
}

spawnBullet()

  drawSprites();
}

function spawnBullet(){

  if(time === 5){
    time = 0
    bullet.destroy()
    wall.destroy()
    bullet = createSprite(120,590,40,10)
    bullet.shapeColor = "yellow"
    bullet.y = Math.round(random(80,590))
    bullet.setLifetime = 30
      speed = Math.round(random(223,321))
      weight = Math.round(random(30,52))
      thickness = random(22,83)
      bullet.velocityX = speed 

      wall = createSprite(1100,328,thickness,600)
      wall.shapeColor = "white"

    }

}





