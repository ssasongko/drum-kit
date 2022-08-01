import data from './utils/data'
import React, { useState } from 'react';
import DrumPad from './components/Drumpad';

const App = () => {
  const [title, setTitle] = useState("")

  const displayHandleClick = title =>{
    setTitle(title)
  }

  return (
    <main className="my-background">
      <div className="flex justify-center items-center h-screen mx-5">
        <div id="drum-machine" className='bg-white p-7'>
          <h1 className='leading-tight text-center text-5xl mt-0 mb-3 text-[#A66CFF] font-bold'>Drum Kit</h1>
          <div id="display" className={`${(title==="") ? "p-0" : "py-1 text-[#A66CFF]"}`}>
            { (title==="") ? "" : (<p>{title}</p>) }
          </div>
          <div className='flex flex-row flex-wrap mt-5'>
            {data.map((d) => (
              <DrumPad
                key={d.id} 
                id={d.id} 
                urlAudio={d.url} 
                onClick={()=>displayHandleClick(d.text)}/>
            ))}
          </div>
          <div className='mt-12 text-center'>
              <span className='text-sm hover:text-base'>Made with Love in Bandung, Indonesia</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;