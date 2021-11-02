import React from 'react';
import './App.css';
import Score from './component/Score';
import song from "./component/static/Tom_Ching_Cheng_Hanji.mp3";

function App() {
  const myAudio = new Audio(song);
  myAudio.play();
  myAudio.volume = 0.2;
  return (
    <div className="App">
      <h1>Social Credit Test</h1>
      <Score />

    </div>  

  );
}

export default App;
