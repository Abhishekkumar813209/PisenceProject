import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
const Banner = () => {

  

  return (
    <section
      id="home"
      className="w-full pt-10 pb-12 flex flex-col gap-10 lgl:gap-16 lgl:h-[88vh] lgl:flex-row items-center font-titleFont"
    >
      <LeftBanner />
     <RightBanner />
    </section>
  );
}

export default Banner