'use strict';

//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (hunger, status, color) {
  this.hungry = hunger;
  this.status = status;
  this.color = color;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus


let sadie = new Dog(false, "normal", "black");

let moonshine = new Dog(true);

let atticus = new Dog();



//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  this.cool = cool;
}

// Instances of Human
// Needed: mason, julia

let mason = new Human(false);

let julia = new Human(true);

Human.prototype.pet = function(dog) {
  return dog.status = "happy";
}

Human.prototype.feed = function(dog) {
  return dog.hungry = false;
}
