const game = new Game()

// all these functions will be called by the P5 library
function preload() {
	game.preload()
}
var score=0;
function setup() {
	createCanvas(704, 513)
	// createCanvas(windowWidth / 2, 700)
}

function draw() {
	game.draw()
	fill(255);
	textSize(55);
	text('Score:',30,70);
	text(score, 215,110,)
}

function keyPressed() {
	if (keyCode === 32) {
		game.player.jump()
	}
}
