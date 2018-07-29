function Input() {

}

// Holds keys that are currently pressed
var keysPressed = {};

// Key presses will be mapped to specific values
var keyMap = {
    38: 0, // Up
    39: 1, // Right
    40: 2, // Down
    37: 3, // Left
    87: 0, // W
    68: 1, // D
    83: 2, // S
    65: 3, // A
  };

Input.prototype.delegate = function(e) {
  // move right
  if(keysPressed[1]) {
    if(hero.velx < hero.maxVel) hero.velx += hero.walkAcceleration;
  }

  // move left
  if(keysPressed[3]) {
    if(hero.velx > -(hero.maxVel)) hero.velx -= hero.walkAcceleration;
  }

  // move down
  if(keysPressed[2]) {
    if(hero.vely < hero.maxVel) hero.vely += hero.walkAcceleration;
  }

  // move up
  if(keysPressed[0]) {
    if(hero.vely > -(hero.maxVel)) hero.vely -= hero.walkAcceleration;
  }
  
  if(!keysPressed[1] && !keysPressed[3]) {
    hero.velx = 0;
  }

  if(!keysPressed[2] && !keysPressed[0]) {
    hero.vely = 0;
  }

};

Input.prototype.listen = function() {
  var self =  this;
  window.addEventListener("keydown", function(e) {
    var key = keyMap[e.keyCode];
    keysPressed[key] = true;
    self.delegate(e);
  });
  window.addEventListener("keyup", function(e) {
    var key = keyMap[e.keyCode];
    keysPressed[key] = false;
    self.delegate(e);
  });
};
