window.onload = function () {

    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h",
          "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
          "t", "u", "v", "w", "x", "y", "z"];
    
    var word ;
    var newWord ;              
    var guess ;             
    var guesses = [ ];      
    var lives ;             
    var counter ;
    var space ;

  
    var showLives = document.getElementById("lives");
    var getHint = document.getElementById("hint");
    var showHint = document.getElementById("showHint");

  
    var buttons = function () {
      myButtons = document.getElementById("buttons");
      letters = document.createElement("ul");
      for (var i = 0; i < alphabet.length; i++) {
        letters.id = "alphabet";
        list = document.createElement("li");
        list.setAttribute("class", "btn btn-danger");
        list.innerHTML = alphabet[i];
        gameLetters();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }    
 
    var hiddenWord = function () {
      wordHolder = document.getElementById("wordHolder");
      correctLetter = document.createElement("ul");
      for (var i = 0; i < newWord.length; i++) {
        correctLetter.setAttribute("id", "pickedWord");
        guess = document.createElement("li");
        guess.setAttribute("class", "guess");

        if (newWord[i] === " ") {
          guess.innerHTML = " ";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }

        guesses.push(guess);
        wordHolder.appendChild(correctLetter);
        correctLetter.appendChild(guess);
      }
    }
    
    var scoreChecker = function () {
      showLives.innerHTML = "You have " + lives + " lives";
      if (lives < 1) {
        var loser = document.createElement("audio");
        loser.setAttribute("src", "assets/sounds/smb_mariodie.wav");
        loser.play();
        showLives.innerHTML = "Game Over";
        gameReset();
      }
      for (var i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
          var winner = document.createElement("audio");
          winner.setAttribute("src", "assets/sounds/smb_stage_clear.wav");
          winner.play();
          showLives.innerHTML = "You Win!";

        }
      }
    }
  
    var gameLetters = function () {
      list.onclick = function () {
        var guess = (this.innerHTML);
        this.setAttribute("class", "btn btn-light");
        this.onclick = null;
        for (var i = 0; i < newWord.length; i++) {
          if (newWord[i] === guess) {
            guesses[i].innerHTML = guess;
            counter++;
          } 
        }
        var j = (newWord.indexOf(guess));
        if (j === -1) {
          var badGuess = document.createElement("audio");
          badGuess.setAttribute("src", "assets/sounds/smb_pipe.wav");
          badGuess.play()
          lives--;
          scoreChecker();
        } else {
          var goodGuess = document.createElement("audio");
          goodGuess.setAttribute("src", "assets/sounds/smb_coin.wav");
          goodGuess.play();
          scoreChecker();
        }
      }
    }
    
      
    // Begin a new game
    newGame = function () {
      word = ["super mario","luigi","toad","peach","wario","bowser","koopa troopa","goomba",
      "donkey kong","samus","starfox","waluigi","link","zelda","ganondorf","kirby","yoshi"
    ];
  
      newWord = word[Math.floor(Math.random() * word.length)];
      console.log(newWord);
      buttons();
  
      guesses = [ ];
      lives = 10;
      counter = 0;
      space = 0;
      hiddenWord();
      scoreChecker();
    }
  
    newGame();
      
      hint.onclick = function() {
  
        var hints = ["The Original Plumber", "The plumber's brother", "A Princess' servant", "The original princess", 
          "Mario's rival", "The original villain", "turtle henchman","evil shiitake mushroom", "monkey business",
          "first female video game character","spaceship animal","Luigi's rival","an elf from the woods",
          "princess of hyrule","villain of hyrule","all puffed up","green dinosaur"
        ];
  
      var hintIndex = word.indexOf(newWord);
      showHint.innerHTML = "Hint: - " +  hints [hintIndex];
    };
  
     // clear everything and start a new game
     var gameReset = function() {
        correctLetter.parentNode.removeChild(correctLetter);
        letters.parentNode.removeChild(letters);
        showHint.innerHTML = "";
        newGame();
     }
  
    document.getElementById("reset").onclick = function() {
        gameReset();
    }
  }
  
  
  