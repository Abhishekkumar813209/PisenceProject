import React from 'react';
import LeftAbout from './LeftAbout';
import RightAbout from './RightAbout';
import Features from './Features';

function About() {
  return (
    <>
   
    <section
    id="about"
    className="w-full pt-20 pb-12 flex flex-col gap-10 lgl:gap-16 lgl:h-[88vh] lgl:flex-row items-center font-titleFont">
  <LeftAbout />
  <RightAbout />
    </section>
    <Features />
    </>
  );
}

export default About;
