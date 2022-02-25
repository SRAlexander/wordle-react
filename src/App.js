import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';

import ApplicationNavbar from '../src/components/navbar'
import WordleApp from './components/wordle/wordle';
import WordleInstructions from './components/wordle/instructions';


function App() {

  const [showWordleInstructions, setShowWordleInstructions] = useState(true);

  const startGame = () => {
    console.log(showWordleInstructions);
    setShowWordleInstructions(false);
    console.log('here');
  }

  return (
    
    <div className="">

      <ApplicationNavbar></ApplicationNavbar>
      
      { showWordleInstructions === true ?
        (<WordleInstructions key={'game-instructions'} play={startGame}></WordleInstructions>) :
        (<WordleApp key={'game'}></WordleApp>)
      }
    </div>
  );

}

export default App;
