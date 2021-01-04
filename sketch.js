var  dog, happyDog, database, foodS, foodStock, dogImg, happyDogImg, milk, milkImg, bgImg;
var addFood, feedDog, foodObj, lastfed;
var foodCount = 0;

function preload(){
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
  milkImg = loadImage("images/milk.png");
  bgImg = loadImage("images/bg.png")
}

function setup() {
  foodObj = new Foods();
  createCanvas(1000, 500);

  database = firebase.database();
  
  dog = createSprite(700, 350);
  dog.addImage(dogImg);
  dog.scale = 0.6;

  milk = createSprite(600, 375);
  milk.addImage(milkImg);
  milk.scale = 0.017

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(bgImg);
  
  if(foodS !== 0){
    dog.addImage(happyDogImg)
    dog.scale = 0.3;
    milk.visible = true;
  }
  else{
    dog.addImage(dogImg);
    dog.scale = 0.6;
    milk.visible = false;
  }

  if(foodS === undefined){
    foodS = 0
  }

  drawSprites();
  foodObj.display();
  foodCount = foodS
  textSize(25)
  fill("black")
  stroke(3)
  text("Food Remaining: "+foodS, 350, 50);
  //fedTime = database.ref('LastFed');
  //fedTime.on("value",function(data){
   // lastFed = data.val();
  //})
}


function readStock(data){
  foodS = data.val();
}




