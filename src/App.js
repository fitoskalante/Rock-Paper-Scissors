import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap';
import ChoiceCard from "./components/ChoiceCard";
import NaviBar from "./components/NaviBar";
import Footer from "./components/Footer";
import ScoreCard from "./components/ScoreCard"

const choices = {
  rock1:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  rock: "./rock.svg",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};


function App() {
  return (
    <>
      <NaviBar />
      <div className="App container-fluid d-flex flex-row justify-content-center align-items-center mt-3">
        <div className='container-fluid d-flex flex-column p-0'>
          <h1 className='display-4 font-weight-bold'>Let's Play!O □ X</h1>
          <div className='container d-flex flex-row justify-content-around'>
            <Button className='w-25 btn btn-danger'>Rock</Button>
            <Button className='w-25 btn btn-danger'>Paper</Button>
            <Button className='w-25 btn btn-danger'>Scissors</Button>
          </div>
          <div className='container-fluid d-flex flex-row justify-content-center align-items-center p-3 my-2 '>
            <ChoiceCard
              title='You'
              winner={false}
              imgURL={choices.rock}
            />
            <h2 className='display-2 font-weight-bold text-dark px-3'>VS</h2>
            <ChoiceCard
              title='The Evil'
              winner={true}
              imgURL={choices.paper}
            />
          </div>
        </div>
        <ScoreCard />
      </div>
      <Footer />
    </>
  );
}

export default App;
