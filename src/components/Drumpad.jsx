import React, { useRef } from 'react'

const DrumPad = ({keyPad, id, urlAudio}) => {
   const audio = useRef(null);

   const hitKey = () => {
     audio.current.play()
     audio.current.currentTime = 0
   };

   const playKey = () => {
     console.log("playkey");
   };

    return (
      <div
        className="drum-pad border gap p-5 cursor-pointer bg-white"
        onClick={() => hitKey()}
        id={id}
      >
        <p>{keyPad}</p>
        <audio ref={audio} className="clip" src={urlAudio} id={id}></audio>
      </div>
    );
}

export default DrumPad