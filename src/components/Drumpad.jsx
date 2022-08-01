import React, { useEffect, useRef } from 'react'

const DrumPad = (props) => {
  const audio = useRef(null);
  const check = useRef(null);

  useEffect(()=>{
    document.addEventListener("keydown",handleKeyAudio)
    window.focus()

    return () => document.removeEventListener("keydown", handleKeyAudio);
  })

  const handleKeyAudio = (e) => {if(e.keyCode === props.id.charCodeAt ()) hitKey()};

  const hitKey = () => {
    
    let playPromise = audio.current.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
          audio.current.play()
          audio.current.currentTime = 0

          props.onClick()
        }).catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
  };
  
  return (
    <div
      className="drum-pad border basis-1/3 md:basis-1 grow p-3 md:p-7 cursor-pointer bg-[#A66CFF] text-white hover:bg-[#9C9EFE] hover:shadow-lg focus:outline-none focus:ring-0 duration-150 ease-in-out"
        onClick={() => hitKey()}
        id={props.id}
        ref={check}
      >
        <p className='text-center font-bold'>{props.id}</p>
        <audio ref={audio} className="clip" src={props.urlAudio} id={props.id}></audio>
    </div>
  );
}

export default DrumPad