// src/components/ParallaxComponent.js
import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './ParallaxComponent.css'
import { schoolmonitor4 } from '../../assets';

const ParallaxComponent = () => {
  return (
    // <ParallaxProvider>
      <div className="parallax-container">
        <h2 className='text-4xl text-blue-500 text-center'> Why Choose Us </h2>
        {/* <Parallax y={[30, -30]} tagOuter="figure" className='flex justify-center'> */}
            <video loop muted autoplay="autoplay" src={schoolmonitor4} alt="" className='lg:w-1/2 m-auto' />
        {/* </Parallax> */}
      </div>
    // </ParallaxProvider>
  );
};

export default ParallaxComponent;
