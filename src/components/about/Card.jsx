import React from 'react';

function Card({item:{title,des,icon}}) {
  return (
   <div className='flex flex-col gap-2' data-aos='fade-down' data-aos-delay='500'>
    <h1 className='text-6xl text-blue-500 flex justify-center'>{icon} </h1>
    <h3 className='text-2xl text-blue-500 flex justify-center '> {title}</h3>
    <p className='p-[12px] mt-[-15px] pr-[0]'>{des}</p>
   </div>
  );
}

export default Card;
