import React, { useState, useEffect } from 'react';
import './Stop.css';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setTime(0);
    setLaps([]);
  };

  const addLap = () => {
    setLaps(prevLaps => [...prevLaps, time]);
  };

  return (
    <div className='stopwatch-container'>
    <div className='menu-bar'>
    <h1>TIMERLY</h1>
    </div>
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time">{formatTime(time)}</div>
      <div className="buttons">
        {!isRunning ? (
          <button onClick={startStopwatch} style={{backgroundColor:"green"}}>Start</button>
        ) : (
          <button onClick={stopStopwatch} style={{backgroundColor:"red"}}>Stop</button>
        )}
        <button onClick={resetStopwatch} style={{backgroundColor:"orange"}}>Reset</button>
        {isRunning && <button onClick={addLap}>Lap</button>}
      </div>
      <div className="laps">
        <h2>Laps</h2>
        <ul>
          {laps.map((lap, index) => (
            <li>{formatTime(lap)}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function App() {
  return (
    <div className="App">
      <Stopwatch />
    </div>
  );
}

export default App;
