import React from 'react';
import './Card.css';

function Card({item:{img,title,desc,bg}}) {
  return (
    <div className='flex-col gap-2 px-2' data-aos='fade-down' data-aos-delay='500'>
    <div className='flex items-center justify-center minw-[700px] img'>
    <img src={img} alt="" className='serviceImg h-[350px] w-[600px] rounded-2xl' />
    </div>
    <div className='w-full flex flex-col pt-4 gap-4 rounded-2xl mt-4 px-2' style={{backgroundColor:{bg}}}>
    <h1 className='text-3xl text-blue-500 flex justify-center'>{title} </h1>
    <p className='p-[12px] text-xl mt-[-15px] pr-[0] text-justify'>{desc}</p>
    </div>
   </div>
  );
}

export default Card;
