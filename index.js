//  sound by click on img

var noOfDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function onclick() {
        var buttonNum = this.innerHTML;
        makeSound(buttonNum);
        animation(buttonNum);
        

    });

}

// sound by keyboard

document.addEventListener('keydown',function music(event){
  makeSound(event.key);
  animation(event.key);

});

// function for sound

function makeSound(key){
    switch (key) {
        case "w": {
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        }

        case "a": {
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        }

        case "s": {
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        }

        case "d": {
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        }

        case "j": {
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        }

        case "k": {
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        }

        case "l": {
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        }


        default: console.log(buttonNum)
            break;
    }

}

function animation(currentkey){

    var activeKey = document.querySelector("."+currentkey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
    activeKey.classList.remove("pressed");},100);

    }