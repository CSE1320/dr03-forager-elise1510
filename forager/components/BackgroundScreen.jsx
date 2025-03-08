

import React from 'react';
import '../styles/BackgroundScreen.module.css';
import '../app/nobarlayout'

const BackgroundScreen = () => {

  return (
    <div>
      <div className="overlay absolute bottom-0 left-0 w-full h-[119px] bg-black/50">
        <div className="cam_icon w-[38px] h-[38px] shrink-0 box-border absolute left-[52px] top-[35px]">  {/* PX size adds appropriate button size & placement */}
          <img
            src="/gal.svg"
            alt="Gallery Icon"
            width="38"
            height="38"
            className="w-full h-full"
          />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[73px] h-[73px] flex justify-center items-center">
          <img
            src="/button.svg"
            alt="Take Photo Button"
            className="w-full h-full"
          />
        </div>
        <div className="cam_icon w-[38px] h-[38px] shrink-0 box-border absolute right-[45px] top-[41px]">
          <img
            src="/flip.svg"
            alt="Flip Icon"
            width="36"
            height="36"
            className="w-full h-full"
          />
        </div>
        </div>
<div>
  <div className="overlay absolute top-0 left-0 w-full h-[132px] bg-black/50">
    <div className="cam_icon w-[38px] h-[38px] shrink-0 box-border absolute left-[52px] top-[35px]">
      <img
        src="/back.svg"
        alt="Back Icon"
        width="62"
        height="62"
        className="w-[150%] h-[150%]"
      />
    </div>
    <div className="cam_icon w-[38px] h-[38px] shrink-0 box-border absolute right-[45px] top-[41px]">
      <img
        src="/flash.svg"
        alt="Flash Icon"
        width="36"
        height="36"
        className="w-full h-full"
      />
    </div>
  </div>
</div>
    </div>


  );
};

export default BackgroundScreen;