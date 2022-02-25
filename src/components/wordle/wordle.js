import React, { useState, useEffect } from 'react';

import WordleTurn from './turn';
import WordleWinStatement from './winStatement';
import WordleReplayButton from './replayButton';

import WordData from '../../jsonData/words.json';

function WordleApp() {

    function createGameModel() {
        return {
            word: [...(WordData.words[Math.round(Math.random() * WordData.words.length)]).toUpperCase()],
            turns: [
                { characters: [{ value: '', state: 0 }, { value: '', state: 0 }, { value: '', state: 0 }, { value: '', state: 0 }, { value: '', state: 0 }], submitted: false },
                { characters: [{ value: '', state: 0 }, { value: '', state: 0 }, { value: '', state: 0 }, { value: '', state: 0 }, { value: '', state: 0 }], submitted: false },
                { characters: [{ value: '', state: 0 }, { value: '', state: 0 }, { value: '', state: 0 }, { value: '', state: 0 }, { value: '', state: 0 }], submitted: false },
                { characters: [{ value: '', state: 0 }, { value: '', state: 0 }, { value: '', state: 0 }, { value: '', state: 0 }, { value: '', state: 0 }], submitted: false },
                { characters: [{ value: '', state: 0 }, { value: '', state: 0 }, { value: '', state: 0 }, { value: '', state: 0 }, { value: '', state: 0 }], submitted: false },
                { characters: [{ value: '', state: 0 }, { value: '', state: 0 }, { value: '', state: 0 }, { value: '', state: 0 }, { value: '', state: 0 }], submitted: false },
            ],
            turn: 0,
            runState: 0,
            correctCount: 0
        };
    }

    const [game, setGame] = useState(createGameModel());

    const onHandleTurnSubmission = (turnResponseEvent, characterArray) => {
        let currentGame = { ...game };
        console.log(currentGame)

        currentGame.correctCount = 0;

        characterArray.forEach((element, i) => {
            currentGame.turns[currentGame.turn].characters[i].value = element;

            if (element.toUpperCase() === currentGame.word[i]) {
                currentGame.turns[currentGame.turn].characters[i].state = 1;
                currentGame.correctCount += 1;
            } else {

                if (currentGame.word.indexOf(element.toUpperCase()) !== -1) {
                    currentGame.turns[currentGame.turn].characters[i].state = 2;
                }
            }
        });

        currentGame.turn += 1;

        currentGame = checkWinCondition(currentGame)
        setGame(currentGame);
    }


    const checkWinCondition = (currentGame) => {

        if (currentGame.correctCount === 5) {
            currentGame.turn = 6;
            currentGame.runState = 1;
            return currentGame;
        }

        if (currentGame.turn === 6) {
            currentGame.runState = 2;
        }

        return currentGame;
    }

    const restartGame = () => {
        setGame(createGameModel());
    }

    return (
        <div className="container mt-4">
            {
                game.turns.map((turn, i) => {
                    // Return the element. Also pass key     
                    return (
                        <WordleTurn className='' key={'turn-' + (i + 1).toString()} turnNumber={i + 1} turn={turn} disabled={i !== game.turn} handleTurnSubmission={onHandleTurnSubmission}></WordleTurn>
                    )
                })
            }

            <div className="row mt-3">
                <div className="col-12">
                    <WordleWinStatement className="mt-3" runState={game.runState}></WordleWinStatement>
                </div>
            </div>

            <WordleReplayButton runState={game.runState} restart={restartGame}></WordleReplayButton>

        </div>
    )
}

export default WordleApp