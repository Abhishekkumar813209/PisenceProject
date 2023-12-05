import React from 'react';
import { home4 } from '../../assets';


function LeftAbout() {
  return (
    <div className="flex justify-center items-center relative " data-aos='fade-up' data-aos-delay='600'>
      <img
        className="w-[450px] h-[250px] lgl:w-[800px] lgl:h-[550px] rounded-2xl z-10"
        src={home4}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] flex justify-center items-center"></div>
    </div>
  );
}

export default LeftAbout;
