import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ChoiceCard from "./components/ChoiceCard";
import NaviBar from "./components/NaviBar";
import Footer from "./components/Footer";
import { CHOICES, getRoundOutcome } from './utils';
import ChoiceButtons from './components/ChoiceButtons';
import { Button } from 'react-bootstrap';


function App() {

  const [showGame, setShowGame] = useState(false);
  const [prompt, setGamePrompt] = useState("Start");
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [previousWinner, setPreviousWinner] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);


  const onPlayerChoose = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);
    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];
    if (result === "Victory!") {
      setPreviousWinner("YOU");
    } else if (result === "Defeat!") {
      setPreviousWinner("THE EVIL");
    } else {
      setPreviousWinner("Tie");
    }

    gameHistory.push(result);
    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
    setGamePrompt(result);
    setGameHistory(gameHistory);

    console.log('hi', result, compChoice)
  };
  console.log(playerChoice, computerChoice, previousWinner)
  return (
    <>
      <NaviBar />
      {!showGame &&  <div className='container d-flex flex-column align-items-center pt-5'>
        <Button className='btn btn-dark w-25' onClick={() => setShowGame(!showGame)}>Let's Play</Button>
      </div>
      }
      <div className="App container-fluid d-flex flex-row justify-content-center align-items-top pt-3">


        {showGame && <div className='container-fluid d-flex flex-column p-0 col-8'>
          <h1><strong>{prompt}</strong></h1>
          <div className='container-fluid d-flex flex-row justify-content-center align-items-center p-3 my-2 '>
            <ChoiceCard
              title='YOU'
              previousWinner={previousWinner}
              imgURL={playerChoice && playerChoice.url}
            />
            <h5 className='display-4 font-weight-bold text-dark px-3'>VS</h5>
            <ChoiceCard
              title='THE EVIL'
              previousWinner={previousWinner}
              imgURL={computerChoice && computerChoice.url}
            />
          </div>
          <ChoiceButtons
            onPlayerChoose={onPlayerChoose}
          />
        </div>
        }
      </div>
      {showGame && <div className='history-card container d-flex flex-column align-items-center justify-content-start'>
          <h3 className='mb-3'><u>History</u></h3>
          <ul className='list-unstyled'>
            {gameHistory.map(result => {
              return <li>{result}</li>;
            })}
          </ul>
        </div>
        }

      <Footer />

    </>
  );
}

export default App;
