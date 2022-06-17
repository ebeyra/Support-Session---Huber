class Player {
  constructor() {
    this.velocity = 0;
    this.gravity = 0.5;
    this.width = 152;
    this.height = 248;
    this.x = 97;
    this.y = 200;
  }
  draw() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    // this prevents the player from moving down throught the bottom of the screen
    if (this.y >= height - this.height) {
      // reset him to the starting position
      this.y = height - this.height;
    }
    image(game.playerImage, this.x, this.y, this.width, this.height);
  }
  jump() {
    // console.log('jump')
    // this.y -= 40
    this.velocity = -13;
  }
}