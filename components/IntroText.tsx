import React from 'react'
import {easeInOut, motion} from "framer-motion"

const IntroText = () => {
  return (
    <div className='items-baseline text-right border-r-4 border-black px-6'>
    <motion.h1 
      className='text-5xl'
      initial={{y:-10, opacity:0}}
      animate={{y:1, opacity:1}}
      transition={{duration:.7, delay:.5, ease:easeInOut}}
    >
      I <motion.span className='italic'>build</motion.span>
    </motion.h1>
    <motion.h1 
      className='text-6xl'
      initial={{y:-10, opacity:0}}
      animate={{y:1, opacity:1}}
      transition={{duration:.7, delay:.7, ease:easeInOut}}
    >
      Softwares</motion.h1>
    <motion.h1 
      className='text-6xl'
      initial={{y:-10, opacity:0}}
      animate={{y:1, opacity:1}}
      transition={{duration:.7, delay:.9, ease:easeInOut}}
    >Websites</motion.h1>
    <motion.h1 
      className='text-6xl'
      initial={{y:-10, opacity:0}}
      animate={{y:1, opacity:1}}
      transition={{duration:.7, delay:1.1, ease:easeInOut}}
    >Mobile Apps</motion.h1>

  </div>
  )
}

export default IntroText