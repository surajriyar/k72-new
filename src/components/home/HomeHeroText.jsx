import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
  <div className='font-[font1]pt-5  mt-80 lg:mt-0  w-full text-center '>
      <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[8vw]'>
        L'étincelle
      </div>
      <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[8vw]'>
        qui
        <div className='h-[7vw] w-[16vw] rounded-full mt-1.5 overflow-hidden'>
          <Video/>
        </div>
        géneré
      </div>
      <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center  uppercase lg:leading-[8vw] leading-[8vw]'>
        la créativité
      </div>
    </div>
  )
}

export default HomeHeroText;
