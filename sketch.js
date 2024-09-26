let pocicaoVertical; 
function setup(){
  createCanvas(500,500);
  posicaoVertical = 250; 
} 
function draw() {  
  if(posicaoVertical <400){ 
    background(" #0E0D0C "); 
    posicaoVertical= posicaoVertical 
    +1; 
  }else{ 
      background("black  ") 
    }  
    fill ("orange"); 
    circle(250,posicaoVertical,300); 
    fill(" rgb(233,247,9)  "); 
  
    fill("  orange");
    rect(  50,  50 , 50  , 50); 
    fill( "darkgreen  ");
  rect (0,300,600,400 ) 
  }