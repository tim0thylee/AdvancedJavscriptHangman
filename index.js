var inquirer = require('inquirer');
var Letter = require('./Letter');
var words = require('./words');
var Word = require('./Word');


var characters = new Letter(words.randomWord);
var word = new Word ({counter: 12, wordComplete: words.randomWord, letters: characters});



function runGame() {  
  inquirer.prompt([
     {
      type: "input",
      name: "guess",
      message: "Go ahead and guess a letter!:",
       
    }
    ]).then(function (game) {
       word.checkLetter(game.guess);
       word.winGame();
       runGame();
     
  }); 
}

runGame();