var canvas;
var backgroundImage;
var database;
var form, player,game;
var gameState,playerCount;


function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if(playerCount ===2){
    game.update(1);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
