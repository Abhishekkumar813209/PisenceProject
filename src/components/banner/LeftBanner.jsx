import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";


const LeftBanner = (style) => {
    const [text] = useTypewriter({
      words: ["Informed Decision Making System","End-to-End IOT Monitoring System","End-to-End School Monitoring System"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
    
   
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20" data-aos='fade-down' data-aos-delay='600'>
      <div className="flex flex-col gap-3">
        <h4 className=" text-lg text-base leading-6 tracking-wide">WELCOME TO OUR WORLD</h4>
        <h1 className="text-5xl font-bold text-blue-600">
          We Provide <span className="text-designColor capitalize">You</span>
        </h1>
        <h2 className="text-3xl  max-[667px]:h-16 font-bold text-violet-600">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="blue"
          />
        </h2>
        <p className="text-md mt-2 text-justify font-bodyFont leading-6 tracking-wide">
          
PiSence delivers top-quality, cost-effective monitoring services tailored to diverse industries worldwide. With a commitment to innovation, reliability, and customer satisfaction, we offer comprehensive solutions, including security, environmental, and infrastructure monitoring. Our skilled team ensures efficient operations, cost savings, and rapid issue resolution, making us your trusted monitoring partner.
        </p>
        <button className='bg-blue-600 text-white w-[160px] h-[50px] rounded-full hover:bg-white hover:border-blue-700 hover:border-[1px] focus:outline-violet-700 hover:text-blue-700'>
            Our Services
        </button>
      </div>
    </div>
  );
}

export default LeftBanner
