import React, { useRef } from 'react'

interface Props {
  keyPad: string;
  id: string;
  urlAudio: string;
}

const DrumPad = ({keyPad, id, urlAudio}:Props) => {
   const audio = useRef<HTMLAudioElement>(null);

   const hitKey = () => {
     audio?.current?.play()
     audio!.current!.currentTime = 0
   };

   const playKey = () => {
     console.log("playkey");
   };

    return (
      <div
        className="drum-pad border p-5 cursor-pointer"
        onClick={() => hitKey()}
        id={id}
      >
        <p>{keyPad}</p>
        <audio ref={audio} className="clip" src={urlAudio} id={id}></audio>
      </div>
    );
}

export default DrumPad