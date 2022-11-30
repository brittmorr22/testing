// You can create custom variables here

/* 
EVERYTHING in the SETUP() function only happens once when the page is first loaded.
This is also an example of a multiline comment. Single Line comments start with //
*/
function setup() {
  createCanvas(500,600); //set to 500px by 600px
  //below is anther example that creates a canvas the heigth and width of the browser window
  //createCanvas(windowWidth, windowHeight);

  //setting the ba
  background('lightblue');
}

/*
All of the code inside of the DRAW() function runs multiple times per second (usually 60 times per second on most computers).
*/
function draw() {
  //putting the backround function here means there is a fresh screen drawn each time. This is needed if you want to make things look like they're moving across the screen
  background('lightblue'); 
fill('#0EC106');
  rect(50,190,100,30); //(xPos, yPos, width, height)

  fill('blue');
  ellipse(50,50, 40, 30); //(xPos, yPos, width, height)

  fill('#E1253F');
  quad(40, 350, 90, 361, 90, 390, 49, 368); //(x1, y1, x2, y2, x3, y3, x4, y4)
  //with the x,y pairs start at top left and move around clockwise
  
  fill('red');
  // this draws a circle 25 pixels across at the location of the mouse.
  circle(mouseX, mouseY, 25);

}