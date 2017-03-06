function Sprite(img, w, h, x, y, vx, vy, g, wt) {
  this.sprite = new Image();
  this.sprite.src = img;
  this.width = w;
  this.height = h;
  this.X = x;
  this.Y = y;
  this.velocity = [vx, vy];
  this.gravity = g;
  this.weight = wt;
}
