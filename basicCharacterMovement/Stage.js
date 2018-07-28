function Stage() {
  this.backgroundColor = "#ecf0f1"
}

Stage.prototype.drawBackground = function() {
  ctx.fillStyle = this.backgroundColor;
  ctx.fillRect(0,0,height,width);
};
