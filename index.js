

var carsh = new Audio("sounds/crash.mp3");
var kickBass = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");


// click press
var drumLength = document.querySelectorAll(".drum").length
console.log(drumLength)

for (i = 0; i < drumLength; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    makeSound(this.innerHTML);
    changeColor(this.innerHTML);
  })
}

// keybord press
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  changeColor(event.key);
  
})

// make sound switch button func
function makeSound(key) {

  switch (key) {
    case "w":
      carsh.play();
      break;

    case "a":
      kickBass.play();
      break;

    case "s":
      snare.play();
      break;

    case "d":
      tom1.play();
      break;

    case "j":
      tom2.play();
      break;

    case "k":
      tom3.play();
      break;

    case "l":
      tom4.play();
      break;
  
    default: alert("this is not a valid button")
      break;
  }
}

// change the color of the button when clicked
function changeColor(key){
  document.querySelector("." + key).classList.add("pressed")
  setTimeout(function() {
    document.querySelector("." + key).classList.remove("pressed")
  }, 100)
}
