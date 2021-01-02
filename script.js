let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Generate random number since 0 to 9
const generateTarget = () =>{
  return Math.floor(Math.random() * 10);
}

//Get the "distance" between the user guess and
//computer guess
const getAbosuluteDistance = (value, value2) =>{
  return Math.abs(value - value2);
}

//Compare the "distance" and return the distance
//closest to the target
const compareGuesses = (humanGuess, computerGuess, secretNumber) =>{
  if (humanGuess === computerGuess){
    return true;
  } else if (getAbosuluteDistance(humanGuess,secretNumber) < getAbosuluteDistance(computerGuess,secretNumber)){
    return true;
  } else if (getAbosuluteDistance(computerGuess,secretNumber) < getAbosuluteDistance(humanGuess,secretNumber)){
    return false;
  }
}

//If user wins the round is updated the humanScore
//else the computerScore is updated
const updateScore = winner =>{
  if (winner === "human"){
    humanScore += 1;
  } else if (winner === "computer"){
    computerScore += 1;
  }
}

const advanceRound = () =>{
  currentRoundNumber += 1;
}



