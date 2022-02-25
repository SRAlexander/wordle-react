import React, { useState } from 'react';

import Button from 'react-bootstrap/button'

function WordleSquare(props) {

    let variant = 'light';

    switch (props.character.state) {
        case 1: variant = 'success'; break;
        case 2: variant = 'warning'; break;
        default: break;
    }

    if (props.disabled) {
        return (
            <div className='d-grid'>
                <Button variant={variant} disabled={props.disabled}>{props.character.value}</Button>
            </div>
        )
    } else {
        return (
            <input onChange={(e) => props.characterChange(e, props.position)} maxLength="1" className='form-control' />
        )
    }
}

export default WordleSquare