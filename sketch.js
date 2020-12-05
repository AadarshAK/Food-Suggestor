var food, dinner;
var photo,ak;

function preload(){
    photo=loadImage("AK.jpg");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    console.log("width"+windowWidth);
    console.log("height"+windowHeight);
    food=Math.round(random(1,10));
    dinner=Math.round(random(1,2));
    ak=createSprite(80,80,310,250);
}

function draw(){
    background("white");

    if(food===1){
        food="Chicken Curry";
    }

    if(food===2){
        food="Dal";
    }

    if(food===3){
        food="Fish Curry";
    }

    if(food===4){
        food="Gobi Manchuri";
    }

    if(food===5){
        food="Noodles";
    }

    if(food===6){
        food="Macoroni";
    }

    if(food===7){
        food="Rasam";
    }

    if(food===8){
        food="Buttermilk Curry";
    }

    if(food===9){
        food="Paneer Curry";
    }

    if(food===10){
        food="Mutton Curry";
    }

    if(dinner===1){
        dinner=food;
    }

    if(dinner===2){
        dinner="Maggi";
    }

    fill("green");
    stroke("red");
    textSize(40);
    text("Primary Food : Rice",width-600,height-160);
    text("Lunch : "+food,width-600,height-380);
    text("Dinner : "+food,width-600,height-260);
    text("Creator : Aadarsh A.K",40,170);
    ak.addImage(photo);
    ak.scale=0.2;
    drawSprites();
}
