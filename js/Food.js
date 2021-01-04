class Foods{
    constructor(){
        this.image = loadImage("images/milk.png")
        this.addFood = createButton("Add Food");
        this.feedDog = createButton("Feed the dog");
        //this.foodCount = 0;
    }

    addingFood(count){
      database.ref('/').update({
      Food:count
       })
      //console.log(count)
    }

    display(){
      var x=80,y=100;
        if(foodS!=0){
            for(var i=0;i<foodS;i++){
                 if(i%10==0){
                       x=80;
                       y=y+90;
                  }
            image(this.image,x,y,90,90);
            x=x+30;
            }
        }
      this.addFood.position(400, 55);
      this.addFood.mousePressed(()=> {
        foodCount +=1
        foodObj.addingFood(foodCount)
      });
      this.addFood.size(150,50)
      this.addFood.style('font-size', '20px');
      this.addFood.style('font-color', 'white');
      this.addFood.style('border-radius', '100%')
      this.addFood.style('background-color','color(25, 23, 200, 50)')
      this.addFood.style("font-family","Comic Sans MS");

      this.feedDog.position(1150, 55);
      if(foodS != 0){
      this.feedDog.mousePressed(()=> {
        foodObj.writeStock(foodS)
        lastfed=hour();
      });
      }
      this.feedDog.size(150,50)
      this.feedDog.style('font-size', '20px');
      this.feedDog.style('border-radius', '100%');
      this.feedDog.style('background-color','color(25, 23, 200, 50)');
      this.feedDog.style("font-family","Comic Sans MS");
      //lastfed=hour();
      textSize(25)
      fill("black")
      stroke(3)
      if(lastfed>=12){
        text("Last Feed: "+lastfed%12 + " PM", 350, 80);
      }
      else if(lastfed===0){
        text("Last Feed: 12 AM", 350, 80);
      }
      else if(lastfed===undefined){
        text("Feed the dog", 380, 80)
      }
      else{
        text("Last Feed: "+lastfed + " AM", 350, 80);
      }
    }

  
  writeStock(x){
    if(x<=0){
      x = 0
    }
    else{
      x = x - 1
    }

    database.ref('/').update({
       Food:x
    })
 }


}