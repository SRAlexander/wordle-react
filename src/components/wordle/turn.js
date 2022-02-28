import React, { useState } from 'react';
import WordleSquare from './square';

import Button from 'react-bootstrap/Button'

function WordleTurn(props) {

    let characterInputString = ['','','','','']

    function handleCharacterChange(event, position){
        characterInputString[position] = event.target.value.toUpperCase();
    }

    return (
        <div className='mt-2'>
            <div className="row">
                <div className="col-2">
                    <div className="d-grid">
                        <Button variant='outline-primary' disabled>{props.turnNumber}</Button>
                    </div>
                </div>
                {
                    props.turn.characters.map((character, i) => {
                        return (
                            <div className="col-2" key={'character-' + props.turnNumber.toString() + '-' + (i).toString()}>
                                <WordleSquare character={character} key={'character-' + props.turnNumber.toString() + '-' + (i).toString()} position={i} disabled={props.disabled} characterChange={handleCharacterChange}></WordleSquare>
                            </div>
                        )
                    })
                }

            </div>
            {
                props.disabled ? <div></div> : 
                <div className="row my-4">
                    <div className='col-8 d-none d-sm-block'></div>
                    <div className='col-12 col-sm-4'>
                        <div className='d-grid'>
                            <Button onClick={(e) => props.handleTurnSubmission(e,characterInputString)} key={'submit-' + props.turnNumber.toString()} className="btn-block btn-sm">Submit</Button></div>
                    </div>
                </div>
            }
        </div >
    )
}

export default WordleTurn