import React, { useState } from 'react';

import Button from 'react-bootstrap/Button'

function WordleWinStatement(props) {
    return (
        <div className="container mt-4">
            <div className="row mt-2">
                <div className="col-12 d-flex justify-content-center">
                    <p className=''>
                        <strong>Weclome to Wordle AI (Any Input)</strong>
                    </p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 d-flex justify-content-center">
                    <p>
                        Wordle is a game where you have to guess a five letter word in 6 guesses!
                        After each guess you will be told if a the letter belongs in the correct space with a green block.
                        If a letter exists in the word but not in the entered space it will be colored yellow.
                        If a letter does not exist in word then it will be left gray.
                    </p>
                </div>
            </div>
            <div className="row px-4 mt-4">
                <div className="col-4">
                    <div className="d-grid">
                        <Button variant="success">A</Button>
                    </div>
                </div>
                <div className='col-8'>
                    <span>Correct Position</span>
                </div>
            </div>
            <div className="row px-4 mt-2">
                <div className="col-4">
                    <div className="d-grid">
                        <Button variant="warning">B</Button>
                    </div>
                </div>
                <div className='col-8'>
                    <span>Correct Letter Incorrect Position</span>
                </div>
            </div>
            <div className="row px-4 mt-2">
                <div className="col-4">
                    <div className="d-grid">
                        <Button variant="light">C</Button>
                    </div>
                </div>
                <div className='col-8'>
                    <span>Incorrect Letter</span>
                </div>
            </div>

            <div className='row mt-4'>
                <div className="col-8 d-none d-sm-block"></div>
                <div className="col-12 col-sm-4">
                    <div className="d-grid">
                        <Button className='btn btn-primary' onClick={props.play}>Play</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WordleWinStatement