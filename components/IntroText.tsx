import React from 'react'
import {easeInOut, motion} from "framer-motion"

const IntroText = () => {
  return (
    <div className='w-full items-baseline text-right px-2 md:px-4 sm:px-6 bg-indigo-400 p-1 sm:p-4 border md:border-2 md:border-r-4 sm:border-r-8 border-zinc-900 rounded-xl text-zinc-900'>
    <motion.h1 
      className='text-xl sm:text-4xl'
      initial={{x:10, opacity:0}}
      animate={{x:1, opacity:1}}
      transition={{duration:0.5, delay: 0.3, ease:easeInOut}}
    >
      I <motion.span className='italic'>build</motion.span>
    </motion.h1>
    <motion.h1 
      className='text-2xl font-medium sm:text-6xl'
      initial={{x:10, opacity:0}}
      animate={{x:1, opacity:1}}
      transition={{duration:0.5, delay:0.4, ease:easeInOut}}
    >
      Softwares</motion.h1>
    <motion.h1 
      className='text-2xl font-medium sm:text-6xl'
      initial={{x:10, opacity:0}}
      animate={{x:1, opacity:1}}
      transition={{duration:0.5, delay:0.5, ease:easeInOut}}
    >Websites</motion.h1>
    <motion.h1 
      className='text-2xl font-medium sm:text-6xl'
      initial={{x:10, opacity:0}}
      animate={{x:1, opacity:1}}
      transition={{duration:0.7, delay:0.7, ease:easeInOut}}
    >Mobile Apps</motion.h1>

  </div>
  )
}

export default IntroText