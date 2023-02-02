const canvas = document.getElementById('Bouncing_balls')
const ctx = canvas.getContext('2d')
//to set width and height
const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight
//make random function
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1) + min)
    return num;
}
/* make method that will move Balls */
class Ball {
    constructor(x, y, velX, velY, size, color) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.size = size;
        this.color = color;
    }
    draw() {
        ctx.beginPath() //to start draw
        ctx.fillStyle = this.color //to make ball color
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)  //to make ball
        ctx.fill()  //finish drawing
    }
    //to make the movement 
    move() {
        //when reach to the right
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX)
        }
        //when reach to the left
        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX)
        }
        //when reach to the bottom
        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY)
        }
        //when reach to the top
        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY)
        }
        this.x += this.velX;
        this.y += this.velY
    }
    //this code for intrrsection to change color
    col() {
        for (let j = 0; j < balls.length; j++) {
            if (!(this === balls[j])) {
            const    dx = this.x - balls[j].x
            const    dy = this.y - balls[j].y
                const distance = Math.sqrt((dx * dx) + (dy * dy))
                if(distance < this.size+balls[j].size){
                    this.color = balls[j].color ='rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')'

                }
            }
        }
    }
}
//to make objects
let balls = []
while (balls.length <= 25) {
    let size = random(10, 25)
    let ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        size,
        'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')'
    )
    balls.push(ball)
}
function display() {
    ctx.fillStyle = 'rgba(0,0,0,0.25)'
    ctx.fillRect(0, 0, width, height)
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].move();
        balls[i].col()
    }
    // to make Animation
    requestAnimationFrame(display)
}
display()