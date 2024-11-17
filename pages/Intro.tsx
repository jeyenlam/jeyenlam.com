"use client"
import Image from 'next/image'
import React from 'react'
import profileImg from "@/assets/profile.jpeg";
import { easeInOut, motion } from 'framer-motion';
import About from './About';

const Intro = () => {
  return (
    <section className='w-full h-full flex flex-col-reverse pt-5 p-10 md:px-20 md:flex-row md:justify-evenly md:items-center'>
      <div className='items-baseline'>
        <motion.h1 
          className='text-6xl'
          initial={{y:-10, opacity:0}}
          animate={{y:1, opacity:1}}
          transition={{duration:.7, delay:.5, ease:easeInOut}}
        >
          I <motion.span className='italic'>build</motion.span>
        </motion.h1>
        <motion.h1 
          className='text-7xl'
          initial={{y:-10, opacity:0}}
          animate={{y:1, opacity:1}}
          transition={{duration:.7, delay:.7, ease:easeInOut}}
        >
          Softwares</motion.h1>
        <motion.h1 
          className='text-7xl'
          initial={{y:-10, opacity:0}}
          animate={{y:1, opacity:1}}
          transition={{duration:.7, delay:.9, ease:easeInOut}}
        >Websites</motion.h1>
        <motion.h1 
          className='text-7xl'
          initial={{y:-10, opacity:0}}
          animate={{y:1, opacity:1}}
          transition={{duration:.7, delay:1.1, ease:easeInOut}}
        >Mobile Apps</motion.h1>

      </div>
      <motion.div
        className='flex justify-center'
        initial={{y:-10, opacity:0}}
        animate={{y:1, opacity:1}}
        transition={{duration:.5, delay:.5, ease:easeInOut}}
      >
        
        <motion.div 
          className='p-4 border-black border-2 shadow-lg'
          whileHover={{
            rotate: [0, 0, 5, 0], // Rotate left (-10deg), then right (10deg), and back to 0
            transition: { duration: 0.7, ease: "easeInOut" } // Smooth transition
          }}
        >
          <Image src={profileImg} width={300} height={300} alt='profile-pic' className='shadow-sm'/>
          <h1 className='mt-2 text-4xl font-semibold'>Yen Lam</h1>
          <h1 className='text-xl'>Software Developer</h1>
          <h1 className='text-sm'>B.S. Computer Science</h1>
          <h1 className='text-sm'>Senior @ GVSU</h1>
        </motion.div>
      </motion.div>

    </section>
    
  )
}

export default Intro
