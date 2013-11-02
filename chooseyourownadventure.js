    confirm("Would you like to begin your adventure?");
    var ageToplay = 18;
    var ageUser = prompt("What's your age?");
    console.log(ageUser);
    if (ageUser > ageToplay) {
        console.log("Welcome! You're going to have a blast!");
    }
    else {
        console.log("You are all set to play, but just know we take zero responsibility for what you may encounter ahead. Carry on...");
    }
    console.log("");
    console.log("Snow White and Batman were hanging out at the bus stop, waiting to go to the shops. There was a sale on and both needed some new threads. You've never really liked Batman. You walk up to him.");
    console.log("");
    console.log("Batman glares at you.");
    console.log("");
    var userAnswer = prompt("Are you feeling lucky, punk?");
    if (userAnswer === "yes") {
        console.log("Batman hits you very hard. It's Batman and you're you! Of course Batman wins!");
    }
    else {
        console.log("You did not say yes to feeling lucky. Good choice! You are a winner in the game of not getting beaten up by Batman.");
    }
    console.log("");
    var feedback = prompt("What an adventure! Before you go, please rate your experience from 1 to 10, where 10 = this adventure blew your mind!");
    console.log(feedback);
    console.log("");
    if (feedback > 8) {
        console.log("This is just the beginning of my game empire. Stay tuned for more!");
    }
    else {
        console.log("I slaved away at this game and you gave me that score?! The nerve! Just you wait!");
    }
    console.log("");