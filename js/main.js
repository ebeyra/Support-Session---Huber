const game = new Game()

// all these functions will be called by the P5 library
function preload() {
	game.preload()
}

function setup() {
	createCanvas(704, 513)
	// createCanvas(windowWidth / 2, 700)
}

function draw() {
	game.draw()
}

function keyPressed() {
	if (keyCode === 32) {
		game.player.jump()
	}
}
