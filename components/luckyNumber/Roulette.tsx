"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

const Roulette = () => {
  const [mute, setMute] = useState<boolean>(true);

  return (
    <div className="relative flex justify-center md:justify-start">
      <iframe
        src={
          mute
            ? "https://pickerwheel.com/emb/?choices=1,2,3,4,5,6,7,8,9,0&mute=false"
            : "https://pickerwheel.com/emb/?choices=1,2,3,4,5,6,7,8,9,0"
        }
        scrolling="no"
        frameBorder="0"
        className="rounded-full h-[380px] w-[320px]"
      ></iframe>
      <div className="absolute accent-colors rounded-md h-[65px] w-[320px] bottom-0 flex items-center justify-center select-none">
        <span className="text-inherit font-bold text-xl">Lucky Spin</span>
      </div>
      <div className="absolute bottom-[78px] left-[25px] text-black z-20">
        <button onClick={() => setMute(!mute)}>
          {mute ? <Volume2 className="w-8" /> : <VolumeX className="w-8" />}
        </button>
      </div>
    </div>
  );
};

export default Roulette;
