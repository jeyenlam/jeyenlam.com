import React from 'react'
import {easeInOut, motion} from "framer-motion"

const IntroText = () => {
  return (
    <div className='items-baseline text-right border-r-8 px-4 sm:px-6 bg-indigo-400 p-4 border-2 border-zinc-900 rounded-xl'>
    <motion.h1 
      className='text-4xl sm:5xl'
      initial={{x:10, opacity:0}}
      animate={{x:1, opacity:1}}
      transition={{duration:0.5, delay: 0.3, ease:easeInOut}}
    >
      I <motion.span className='italic'>build</motion.span>
    </motion.h1>
    <motion.h1 
      className='text-5xl sm:text-6xl'
      initial={{x:10, opacity:0}}
      animate={{x:1, opacity:1}}
      transition={{duration:0.5, delay:0.4, ease:easeInOut}}
    >
      Softwares</motion.h1>
    <motion.h1 
      className='text-5xl sm:text-6xl'
      initial={{x:10, opacity:0}}
      animate={{x:1, opacity:1}}
      transition={{duration:0.5, delay:0.5, ease:easeInOut}}
    >Websites</motion.h1>
    <motion.h1 
      className='text-5xl sm:text-6xl'
      initial={{x:10, opacity:0}}
      animate={{x:1, opacity:1}}
      transition={{duration:0.7, delay:0.7, ease:easeInOut}}
    >Mobile Apps</motion.h1>

  </div>
  )
}

export default IntroText