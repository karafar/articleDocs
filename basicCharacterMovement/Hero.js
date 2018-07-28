function Hero() {
  this.color = "#e74c3c";
  this.radius = 30;
  this.x = width/2;
  this.y = height/2;
  this.vely = 0;
  this.velx = 0;
  this.maxVel = 15;
  this.walkAcceleration = 1;
}

Hero.prototype.draw = function() {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, 2* Math.PI);
  ctx.fill();
};

Hero.prototype.update = function() {
  this.x += this.velx;
  this.y += this.vely;
}
