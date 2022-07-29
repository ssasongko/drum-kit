import { Counter } from './features/counter/Counter';
import './App.css';
import data from './utils/data'
import DrumPad from './components/DrumPad';
import React, { useEffect } from 'react';

const App = () => {
  const handleKeyAudio = () => {
    console.log('test')
  };

  useEffect(()=>{
    document.addEventListener("keydown",handleKeyAudio)

    window.focus()
    return () => document.removeEventListener("keydown", handleKeyAudio);
  })

  return (
    // <Counter />
    <div className="container mt-10">
      <div id="drum-machine">
        <div id="display"></div>
        <div className='flex flex-wrap'>
          {data.map((d) => (
            <DrumPad keyPad={d.id} key={d.id} id={d.id} urlAudio={d.url}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
