import React from 'react'
import hero from  '../img/hero.png'
import evil from  '../img/evil.jpg'

export default function ChoiceCard(props) {
    const DEFAULT_IMG = hero;
    const won = props.title === props.previousWinner; 
    let className;

    const hasPreviousGame =
        props.previousWinner === "THE EVIL" || props.previousWinner === "YOU";
    if (hasPreviousGame) {
        className = won ? "winner" : "loser";
    }

    let prompt;
    if (won) {
        prompt = "Won";
        className = won ? "winner" : "loser";
    } else if (props.previousWinner === "Tie") {
        prompt = "Tie";
    } else if (props.previousWinner === null) {
        prompt = "Start";
    } else {
        prompt = "Lose";
    }

    return (
        <div className={`choice-card ${className}`}>
            <h1>{props.title}</h1>
            <img src={props.imgURL || (props.title === 'YOU' ? DEFAULT_IMG : evil)} alt={props.title} />
            <h2>{prompt}</h2>
        </div>
    )
}
