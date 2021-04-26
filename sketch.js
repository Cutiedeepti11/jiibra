var a;
var b;


function setup() {
  createCanvas(1600, 400);
a=createSprite(200,200,50,50);
b=createSprite(300,200,20,20);

}


function draw() {
  background(0);  
b.x=mouseX;
b.y=mouseY;
console.log(b.x-a.x);
console.log(b.width/2+a.width/2)
if(b.x-a.x<=b.width/2+a.width/2&&){
   a.shapeColor="red"
   b.shapeColor="red"
}
else{
	a.shapeColor="green"
	b.shapeColor="green"
}
  drawSprites();
 
}
