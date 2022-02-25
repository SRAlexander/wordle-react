import React, { useState } from 'react';

import Button from 'react-bootstrap/button'

function WordleReplayButton(props) {

    if (props.runState !== 0) {
        return (
            <div className="row">
                <div className='col-8'>

                </div>
                <div className='col-4'>
                    <div className='d-grid'>
                        <Button className='btn btn-primary' onClick={props.restart}>Replay</Button>
                    </div>
                </div>
            </div>
            
        )
    } 

    return(<div></div>)
}

export default WordleReplayButton