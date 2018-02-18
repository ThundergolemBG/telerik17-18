﻿class Rect{
    constructor(x_, y_, sizex_, sizey_, color_){
        this.x = x_;
        this.y = y_;
        this.sizex = sizex_;
        this.sizey = sizey_;
        this.color = color_;
    }
    draw(){
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.sizex, this.sizey);
    }
}
class Circle{
    constructor(x_, y_, r_, color_){
        this.x = x_;
        this.y = y_;
        this.r = r_;
        this.color = color_;
    }
    draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI*2);
        context.fillStyle = this.color;
        context.fill();
    }
}

var rects = [];
var color = ['red', 'green', 'blue', 'yellow', 'purple']

for (var i=0; i<5; ++i){
    rects[i] = new Rect(Math.random()*700, Math.random()*500, 100, 100, color[Math.floor(Math.random()*2)]);
}
for (var i=5; i<10; ++i){
    rects[i] = new Circle(Math.random()*750, Math.random()*550, 50, color[Math.floor(Math.random()*2)+2]);
}

function update() {
}

function draw() {
    for (let i=0; i<10; ++i){
        rects[i].draw();
    }
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
