import React from 'react'

export default function ScoreCard() {
    return (
        <div className='container bg-white rounded shadow p-3  pb-5 m-3'>
            <h4>Score</h4>
            <div className='d-flex flex-row justify-content-around'>
                <div>
                    <h4 className='font-weight-bold'>You</h4>
                    <h5></h5>
                </div>
                <div>
                    <h4>The Evil</h4>
                </div>
            </div>
        </div>
    )
}
