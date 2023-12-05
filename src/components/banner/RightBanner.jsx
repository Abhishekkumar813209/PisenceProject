import React from 'react'
import  {left}  from './../../assets';
const RightBanner = () => {
  return (
    <div className="flex max-[400px]:hidden justify-center items-center relative" data-aos='fade-up' data-aos-delay='600'>
      <img
        className="w-[350px] h-[350px] lgl:w-[600px] lgl:h-[450px] z-10 outline-none border-[16px] border-white"
        src={left}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[450px] lgl:h-[350px] flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner