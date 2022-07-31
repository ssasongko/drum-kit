import data from './utils/data'
import React, { useEffect } from 'react';
import DrumPad from './components/Drumpad';

const App = () => {
  const handleKeyAudio = (e) => {
    // if(e.keyCode === )
  };

  useEffect(()=>{
    document.addEventListener("keydown",handleKeyAudio)
    window.focus()

    return () => document.removeEventListener("keydown", handleKeyAudio);
  })

  return (
    <main className="my-background">
      <div className="flex justify-center items-center h-screen">
        <div id="drum-machine">
          <div id="display"></div>
          <div className='flex flex-wrap'>
            {data.map((d) => (
              <DrumPad keyPad={d.id} key={d.id} id={d.id} urlAudio={d.url}/>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;