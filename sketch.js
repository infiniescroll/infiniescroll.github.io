var pos = 1;
var pos_fondo = 1;
var dato = 0;

function preload() {
    tetris = loadImage("tetris.png")
    tetris_fondo = loadImage("tetris_fondo.jpg")
}

function mouseWheel(event) {
    println(event.delta);
    pos += event.delta;
    posRev = height - 10 - pos;
}

function scrollDown() {
    textSize(18);
    textFont("Helvetica");
    fill(255);
    text("SCROLL", 22, 130);
    text("DOWN", 22, 150);
    text("↓", 22, 170);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
}


function draw() {
    noStroke();
    background(92, 81, 124);

    scrollDown();

    pos = pos + dato;
    pos_fondo = pos_fondo + dato;

    if (pos <= 25) {
        pos = 25;
        dato = 0;
    }

    if (pos <= 15) {
        dato = 0.05;
        pos += 0.05;
    }

    if (pos >= height - 200) {
        dato = -3;
        pos -= 3;
        pos_fondo--;
    }

    // solucion para el scroll ( .

    if (pos >= height - 203) {
        pos = height - 200;
        dato = -3;
        pos -= 3;
    }

    espacio_infinito();

    image(tetris, 0, height / 1.75, windowWidth, windowHeight / 2);
    //image(tetris, 0, 0, windowWidth, windowHeight);
    fill(255, 170, 0);
    rect(width / 1.96, pos - 60, 24, 200);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}