import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full mt-16 lgl:w-[35%] h-full bg-violet-100 p-4 lgl:p-8 rounded-2xl flex flex-col gap-8 text-justify justify-center">
     <p className='text-lg'>
     Thank you for your interest in PiSence, your trusted partner in IoT monitoring services. We are excited to hear from you and discuss how our solutions can help your business thrive in the digital age. Whether you have questions, require further information, or want to explore a potential partnership, our dedicated team is ready to assist you.
     </p>
      
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-blue-500">Team Pisence</h3>
        <p className="text-lg font-normal">
          PiSence Technologies
        </p>
        {/* <p className="text-base text-blue-400 tracking-wide">
          
        </p> */}
        <p className="text-base text-lg flex items-center gap-2">
          Phone: <span className="text-lightText">+91 &nbsp; 90805 75392</span>
        </p>
        <p className="text-base text-lg flex items-center gap-2">
          Email: <span className="text-lightText">info.pisence@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-blue-500 font-bold text-2xl font-titleFont">Find Us In</h1>
        <div className="flex gap-4 text-2xl text-blue-500">
          <span className="bannerIcon hover:text-blue-700">
            <FaFacebookF />
          </span>
          <span className="bannerIcon hover:text-blue-700 text-2xl">
            <FaTwitter />
          </span>
          <a href="https://www.linkedin.com/in/abhishek-kumar-5-year-idd-chemistry-0b436a246/">
            <span className="bannerIcon hover:text-blue-700 text-2xl">
            <FaLinkedinIn />
            </span>
            </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft