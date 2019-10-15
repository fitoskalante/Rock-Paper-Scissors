import rock from '../img/rock.png';
import paper from '../img/paper.png';
import scissors from '../img/scissors.png';


export const CHOICES = {
  scissors: {
    name: "scissors",
    url: scissors
  },
  paper: {
    name: "paper",
    url: paper
  },
  rock: {
    name: "rock",
    url: rock
  }
};

export const getRoundOutcome = userChoice => {
  const computerChoice = getRandomChoice().name;
  let result;

  if (userChoice === "rock") {
    result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "paper") {
    result = computerChoice === "rock" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "scissors") {
    result = computerChoice === "paper" ? "Victory!" : "Defeat!";
  }

  if (userChoice === computerChoice) result = "Tie game!";
  return [result, computerChoice];
};

export const getRandomChoice = () => {
  var keys = Object.keys(CHOICES);
  return CHOICES[keys[(keys.length * Math.random()) << 0]];
};