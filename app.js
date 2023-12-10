//prompt for and store input value
let guessOnce = function guessOnce() {
    console.log("Entering f: guessOnce");
    //console.log('\tExecuting f: guessOnce'); 
    //prompt guess and convert string input into number
    let guess = parseInt(prompt('Please guess a number between 0 and 10.'));
    //FOR LATER check if guess is number, if not then reprompt
        /*//call f: guessHistory
        //pass into f: guessHistory to be stored
        console.log(`Calling f: guessHistory | Guess passed: ${guess}`);
        guessHistory(guess);*/
        //return guess to be stored and used later
        //console.log(`\t\tReturning guess: ${guess} | typeof: ${typeof guess}\nExiting f: guessOnce`);
        return guess;
}

//generate target number
let generateNum = function generateNum() {
    console.log("Entering f: generateNum");
    //console.log('\tExecuting f: generateNum');
    //use math.random method to generate targetNum b/t 1-10
    let targetNum = (Math.floor(Math.random() * 11));
    console.log(`\t\treturning targetNum: ${targetNum}\n\t\ttypeof: ${typeof targetNum}\n\tExiting f: generateNum`);
    return targetNum;
}

//this function concates the guess returned from guessOnce to guessContainer in f: compare
let concatGuess = function concatGuess(guessed, guessContainer) {
    console.log('Entering f: concatGuess');
    console.log('Executing f: concatGuess');
    console.log(`concat current guess: ${guessed} to guessContainer: ${guessContainer}`);
    let concatingContainer = guessContainer.concat([` ${guessed}`]);
    console.log(`Current concatingContainer after concating guess: ${concatingContainer}`)
    console.log('Exiting f: concatGuess')
    return concatingContainer;
}

//call fs: guessOne and concatGuess and return guess and guess log to f: compare
let getAndconcatGuess = function getAndconcatGuess(guess, guessContainer) {
    console.log('Entering f: getAndconcatGuess');
    //console.log(`Guess: ${guess} | and guessContainer array: ${guessContainer}, Array?: ${Array.isArray(guessContainer)} from f: compare`);
    //console.log('Call f: guessOnce()'); 
    let guessed = guessOnce();
    //console.log(`In f: getAndconcatGuess, current guess: ${guessed}`)
    //console.log('Call f: concatGuess');
    console.log(`guessContainer in f: getAndconcatGuess: ${guessContainer}`);
    let concatedContainer = concatGuess(guessed, guessContainer);//concat guessed into concatedContainer
    console.log(`Returning new guess: ${guessed} and concatedContainer: ${concatedContainer} | Array?: ${Array.isArray(guessContainer)} from f: getAndconcatGuess`);
    console.log('Exiting f: getAndconcatGuess');
    return [guessed, concatedContainer];
}

/*functions guessOnce and generateNum are passed as arguments into
where their returned values of guess and targetNum will be compared
against each other, with appropriate messages being displayed if guess !== targetNum
and if guess === targetNum. If !==, call function guessOnce again for new input*/
let compare = function(fn1, fn2) {
    console.log("Entering f: compare");
    //guessContainer to pass into f: getAndconcatGuess
    let guessContainer = [];
    //console.log(`Passing in functions: guessOnce and generateNum`);
    //generate targetNum first
    console.log('Calling f: generateNum()'); 
    let targetNum = generateNum();
    let guess; //initialize guess
    console.log(`Guess outside while loop: ${guess} | Target Number: ${targetNum}`);
    //while guess !== targetNum, give appropriate message
    while (guess !== targetNum) {
        //retrieve guess input to be compared with generated targetNum
        let guessNContainerArr = getAndconcatGuess(guess, guessContainer);
        console.log(guessNContainerArr);
        guess = guessNContainerArr[0];
        guessContainer = guessNContainerArr[1];
        console.log(`Received guess: ${guess} and guessContainer: ${guessContainer} from f: getAndconcatGuess`);
        //compare result of guessOnce to result of generateNum
        console.log(`Guess: ${guess} !== targetNum: ${targetNum}. Guess again.`);
        //prompt for new guess and compare to targetNum again)
        if (guess < targetNum) {
            alert(`Higher, ${guess} is too low!`);
        } else if (guess > targetNum) {
            alert(`Lower, ${guess} is too high!`);
        }
    }
    //if guess === targetNum, alert "Correct!"
    alert(`Correct! Your previous guesses were${guessContainer}!`);
    console.log("Exiting f: compare");
}

function play() {
    console.log('Entering f: play');
    //console.log('\tExecuting f: play()');
    console.log('Calling f: compare');
    compare(getAndconcatGuess, generateNum);
    console.log('Exiting f: play');
}


