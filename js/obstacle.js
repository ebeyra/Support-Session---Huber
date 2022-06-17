class Obstacle {
	constructor(image) {
		this.image = image
		this.x = width - 50
		this.y = Math.random() * height / 0.5
		this.width = 59
		this.height = 78
	}

	collision(playerInfo) {
		// console.log('colission', playerInfo)

		// get the middle of the obstacle
		const obstacleX = this.x + this.width / 2
		const obstacleY = this.y + this.height / 2
		// get the middle of the player
		const playerX = playerInfo.x + playerInfo.width / 2
		const playerY = playerInfo.y + playerInfo.height / 2

		if (dist(obstacleX, obstacleY, playerX, playerY) > 95 ) {
			
			return false
			
		} else {
			// we have a colission
			// console.log('colission') 
			score = score+1; 
			return true
		}
	}

	draw() {
		this.x -= 10
		image(this.image, this.x, this.y, this.width, this.height)
	}
}