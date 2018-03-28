var correctLetter = 0;

var victory = 0;

function Word(guesses) {
    this.counter = guesses.counter;
    this.wordComplete = guesses.wordComplete.split('');
    this.letters = guesses.letters;

    this.wrongGuess = function () {
        this.counter--;
        console.log("You have " + this.counter + " guesses left.");
    }

    this.winGame = function () {
        if (victory == 1){
            console.log("You finally won!");
            victory = 0
        }else if (this.counter == 0){
            console.log("You lost, restart game!");
        }
    }

    this.checkLetter = function(check){
        console.log("You have chosen: " + check);
        
        for(var i = 0; i< this.wordComplete.length; i++ ){
            if (check == this.wordComplete[i]){
                console.log("Correct letter!")
                this.letters.dashes[i] = check;
                correctLetter = 1;
                console.log(this.letters);
            }
        }
        if (correctLetter == 1){
            correctLetter = 0
        }else {
            this.wrongGuess();
            console.log(this.letters);
        }
    }
}

module.exports = Word;