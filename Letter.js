function Letter(wordDash){
    this.dashes = wordDash.split('');
    for(var i = 0; i < wordDash.length; i++){
        this.dashes[i] = "_";
    }

}

module.exports = Letter;
