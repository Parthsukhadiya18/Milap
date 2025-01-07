// IF Statement
if(password>=8 && password<=15){

console.log("HELLO");

}

// IF ELSE Statement

if(age>=18){

console.log("HELLO");

}else{

console.log(" NO HELLO!");
}

// IF ELSE IF Statement

if(mark<=33){

console.log("fail");

}else if(mark>=33 && mark<50){

console.log(" pass");

}
else if(mark>=50 && mark<90){

console.log(" second");
}
else if(mark>=90 && mark<100){

console.log(" first");

}else {

console.log(" enter mark");

}


// Ternary operator 

// (condition)?true:false;

(num>0)?console.log("positive"):console.log("negative");


// Switch case:
const date = new Date();
const day = date.getDay();
// var day =1;
switch(day) {

  case 0:
   console.log("sunday");
    break;
 
 case 1:
       console.log(" Monday");
    Break;

  default:
     console.log("select option");
   Break;
}
