import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert'

function WordleWinStatement(props) {

    if (props.runState === 1) {
        return (
            <Alert variant='success'>You have correctly guessed the Wordle!</Alert>
        )
    } 
    if (props.runState === 2) {
        return (
            <Alert variant='danger'>You have failed to guess the Wordle :(</Alert>
        )
    } 

    return( <div></div>)
}

export default WordleWinStatement