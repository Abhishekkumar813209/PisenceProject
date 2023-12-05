import React, { useRef } from 'react';
import "./parallax.scss"
import {motion,useScroll,useTransform} from "framer-motion"

function Parallax({type}) {

  const ref=useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start","end start"]
  })

  const yBg = useTransform(scrollYProgress,[0,1],["0%","1000%"])
  const pBg = useTransform(scrollYProgress,[0,1],["0%","50%"])

  return (
    <div className="parallax" ref={ref} style={{background:"linear-gradient(180deg,blue,skyblue,blue)"}} id="offerings">
    <motion.h2 style={{y:yBg}} className='text-white text-6xl mt-[-400px]'>Services We Offer </motion.h2>
    <motion.div className="mountains"></motion.div>
    <motion.div style={{y:pBg}} className="planets"></motion.div>
    <motion.div className="stars"></motion.div>
    </div>
  );
}

export default Parallax;
