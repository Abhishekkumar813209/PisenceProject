import React from 'react'
import './Footer.css'
import { FaLinkedinIn,FaTwitter,FaBlogger } from 'react-icons/fa';
import { logo } from '../../assets';

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto flex justify-between">
      <div className='w-1/3 pb-8 flex-col'>
      <img className="w-32 rounded-full" src={logo} alt="logo" />
        <div className="flex gap-4 mt-4 ml-2 text-2xl">
          <span className="bannerIcon text-blue-500 hover:text-blue-700">
            <FaBlogger />
          </span>
          <span className="bannerIcon text-blue-500 hover:text-blue-700">
            <FaTwitter />
          </span>
          <span className="bannerIcon text-blue-500 hover:text-blue-700">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
      <div className='justify-end w-1/2.5'>
        <div className='flex-col justify-center'>
        <ul className='flex-col gap-4 text-blue-500'>
          <li><h1 className='text-2xl text-blue-500 flex-col '>Quick Links</h1>
</li>
          <li><span>About Us</span></li>
          <li><span>Offerings</span></li>
          <li><span>Contact Us</span></li>
        </ul>
        </div>
      </div>
    </div> 
  );
}

export default Footer