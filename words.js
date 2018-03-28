var players = {
    names: ["kobe", "jordan", "lebron", "harden"]
  }
  
  var randomWord= players.names[Math.floor(Math.random()*players.names.length)];
  
  
  module.exports.randomWord = randomWord;