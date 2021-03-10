var canvas;

var gameState = 0;
var contestantCount;
var allContestants;
var answer = 0;
var database;
var form, player, game;

function setup(){
  canvas = createCanvas(750,600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
}
