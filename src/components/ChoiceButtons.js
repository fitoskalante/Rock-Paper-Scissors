import React from 'react'
import { Button } from 'react-bootstrap';

export default function ChoiceButtons(props) {
    return (
        <div className='container d-flex flex-row justify-content-around pb-5 pt-5'>
            <Button className='w-25 btn btn-dark' onClick={() => props.onPlayerChoose("rock")}>Rock</Button>
            <Button className='w-25 btn btn-dark' onClick={() => props.onPlayerChoose("paper")}>Paper</Button>
            <Button className='w-25 btn btn-dark' onClick={() => props.onPlayerChoose("scissors")}>Scissors</Button>
        </div>
    )
}
