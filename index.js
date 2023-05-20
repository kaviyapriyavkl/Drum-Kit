var noofdrums=document.querySelectorAll(".drum").length;

for(var i=0 ; i<noofdrums;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
// CONSTRUCTOR FUNCTIONS USING OBJECTS //
//INSIDE THE FUNCTION

//DETECTING BUTTON PRESS
var buttoninnerhtml=this.innerHTML;
makesound(buttoninnerhtml);
buttonAnimation(buttoninnerhtml);
});

}

//DeTECTING THE KEYPRESS

document.addEventListener("keypress",function(event){
   makesound(event.key);
   buttonAnimation(event.key);
});

function makesound(key){

   switch (key) {
      case "w":
      var tom1=new Audio("sounds/tom-1.mp3")
      tom1.play()   ;
      break;
       case "a":
       var tom2=new Audio("sounds/tom-2.mp3")
       tom2.play()   ;
       break;
    case "s":
       var tom3=new Audio("sounds/tom-3.mp3")
       tom3.play()   ;
       break;
    case "d":
       var tom4=new Audio("sounds/tom-4.mp3")
       tom4.play()   ;
       break;
    case "k":
       var crash=new Audio("sounds/crash.mp3")
       crash.play()   ;
       break;
    case "l":
       var kickbass =new Audio("sounds/kick-bass.mp3")
       kickbass.play()   ;
       break;
   case "j":
       var snare=new Audio("sounds/snare.mp3")
       snare.play()   ;
       break;
   
   default:console.log(buttoninnerhtml);
         
   }
}

function buttonAnimation(currentkey){
var activebutton=document.querySelector("."+ currentkey);
activebutton.classList.add("pressed");
setTimeout(function(){  activebutton.classList.remove("pressed")},100);
}