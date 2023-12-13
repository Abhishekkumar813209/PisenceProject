import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from '../../constants';
import {logo} from "../../assets/index"
import "./Navbar.css"

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  return(
    <div className="w-full h-24 sticky top-0 z-50 bg-white mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className='flex items-center gap-2 text-blue-700'>
        <img src={logo} alt="logo" className='h-[50px] w-[50px] rounded-full' />
        <p className='text-xl'> Pisence Technologies</p>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
         <h4>
               <li
              className="text-base font-medium  text-blue-700 tracking-wide cursor-pointer hover:text-designColor duration-300 hover:border-bottom-blue-400"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
         </h4>

          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[60%] h-screen overflow-scroll absolute  top-0 left-0 bg-violet-600 opacity-1000 p-4 scrollbar-hide ml-[-8px]">
            <div className="flex flex-col gap-16 py-2 relative">
              <div>
                <img src={logo} className="w-32 rounded-full h-[50px] w-[50px]" alt="logo" />
                <p className="text-lg text-white mt-2">
                  PiSence Technologies
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-white tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-white uppercase font-titleFont">
                  Find  us in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon text-white">
                    <FaFacebookF />
                  </span>
                  <span className="bannerIcon text-white">
                    <FaTwitter />
                  </span>
                  <span className="bannerIcon text-white">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar