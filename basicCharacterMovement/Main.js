// Document setup
var canvas = document.getElementById("canvas");
var height = canvas.height;
var width = canvas.width;
var ctx = canvas.getContext("2d");

var stage = new Stage();
var input = new Input();
var hero = new Hero();

function loop() {
  input.listen();
  stage.drawBackground();
  hero.update();
  hero.draw();
  requestAnimationFrame(loop);
}

loop();
