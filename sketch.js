// creating some variables for our rectangles
let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;


let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;


function setup() {
   createCanvas(500, 500);
   noStroke();


   rectMode(CENTER);
}


function draw() {
   background(0);

    // bluce square (enemy)
   fill(0, 0, 255);
   rect(enemyXPos, enemyYPos, 50, 50);

// red square (character)
   fill(255, 0, 0);
   rect(myXPos, myYPos, 50, 50);

// moving the character (red square) with our keyboard
   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 3;
   }


   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 3;
   }


   if (keyIsDown(UP_ARROW)) {
       myYPos -= 3;
   }


   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 3;
   }

   // creating variables to help us detect the boundaries of  each box
   myLeft = myXPos - 25;
   myRight = myXPos + 25;
   myTop = myYPos - 25;
   myBottom = myYPos + 25;


   enemyLeft = enemyXPos - 25;
   enemyRight = enemyXPos + 25;
   enemyTop = enemyYPos - 25;
   enemyBottom = enemyYPos + 25;

   // are the boxes colliding? touching?
   if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {

// are they NOT touching
   }


   else {
    // touching!!!!!!!
       fill(random(255), random(255), random(255));
        enemyXPos = random(500);
        enemyYPos = random(500);
       textSize(22);
       text("I'm colliding with my enemy. Ouch!", 140, 480);
   }
}
