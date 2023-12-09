//prompt for and store input value
let guessOnce = function guessOnce() {
console.log("\tEntering f: guessOnce");
console.log('Executing f: guessOnce');
    //prompt guess and convert string input into number
    let guess = parseInt(prompt('Please guess a number between 0 and 10.'));
    //return guess to be stored and used later
    console.log(`\t\treturning guess: ${guess}\n\t\ttypeof: ${typeof guess}\n\tExiting f: guessOnce`);
    return guess;
}

//generate target number
let generateNum = function generateNum() {
    console.log("\tEntering f: generateNum");
    console.log('Executing f: generateNum');
    //use math.random method to generate targetNum b/t 1-10
    let targetNum = (Math.floor(Math.random() * 11));
    console.log(`\t\treturning targetNum: ${targetNum}\n\t\ttypeof: ${typeof targetNum}\n\tExiting f: generateNum`);
    return targetNum;
}

/*functions guessOnce and generateNum are passed as arguments into
where their returned values of guess and targetNum will be compared
against each other, with appropriate messages being displayed if guess !== targetNum
and if guess === targetNum. If !==, call function guessOnce again for new input*/
let compare = function(fn1, fn2) {
    console.log("Entering f: compare")
    //take in guessOnce and generateNum
    console.log(`Taking in functions: guessOnce and generateNum`);
    console.log('Executing guessOnce()'); 
    let guess = guessOnce();
    console.log('Executing generateNum()'); 
    let targetNum = generateNum();
    //compare result of guessOnce to result of generateNum
    console.log(`Guess outside while loop: ${guess} | Target Number: ${targetNum}`);
    //do compare guess to num while guess !== num
    console.log("Entering do...while loop")
    while (guess !== targetNum) {
        console.log("\tExecuting do...while loop");
        //console.log(`\t\tGuess in while loop: ${guess} | Target Number: ${targetNum}`);
        //if guess < targetNum
        if (guess < targetNum) {
            //prompt "higher" and ask for input
            console.log("\t\t\tAlert: Higher(guess too low)!")
            alert("Higher (guess too low)!");
            //exit if statement to call guessOnce again for new guess
        //if guess > targetNum
        } else if (guess > targetNum) {
            //prompt "higher" and ask for input
            console.log("\t\t\tAlert: Lower(guess too high)!")
            alert("Lower (guess too high)!");
            //exit if statement to call guessOnce again for new guess
        }
        //call guessOnce again to obtain new guess
        console.log("\t\t\tCalling guessOnce for new guess")
        guess = guessOnce();
        console.log(`\t\t\tNew guess post-call in while loop: ${guess}`);
    }
    //if guess === targetNum, alert "Correct!"
    alert("Correct!");

    console.log("Exiting f: compare");
}

//compare(guessOnce, generateNum);

