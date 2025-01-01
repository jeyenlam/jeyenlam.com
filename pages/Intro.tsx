"use client"
import React, { useEffect, useState } from 'react'
import {easeInOut, motion} from "framer-motion"
import ContactIconList from '@/components/ContactIconList'
import Image from 'next/image'
import purple from '@/assets/purple.jpg'

const Intro = () => {
  return (
    <section id='intro' className='outter-padding'>
      <div className='pt-2 sm:pt-0 lg:mt-20 flex flex-col gap-4'>
        {/* Big Text Box */}
        <motion.div 
          className='lg:-b-4 xl:-b-8 rounded-xl p-2 md:p-4 pt-2 text-right border border-indigo-400 text-indigo-200 bg-zinc-900'
          initial={{x:10, opacity:0}}
          animate={{x:1, opacity:1}}
          transition={{duration:0.5, delay: 0.3, ease:easeInOut}}
        >
          <motion.h1 
            className='text-xl md:text-2xl lg:text-4xl'
            initial={{x:10, opacity:0}}
            animate={{x:1, opacity:1}}
            transition={{duration:0.5, delay: 0.3, ease:easeInOut}}
          >
            I <motion.span className='italic text-indigo-400'>build</motion.span>
          </motion.h1>
          <motion.h1 
            className='text-2xl md:text-3xl font-medium lg:text-6xl'
            initial={{x:10, opacity:0}}
            animate={{x:1, opacity:1}}
            transition={{duration:0.5, delay:0.4, ease:easeInOut}}
          >
            Softwares</motion.h1>
          <motion.h1 
            className='text-2xl md:text-3xl font-medium lg:text-6xl'
            initial={{x:10, opacity:0}}
            animate={{x:1, opacity:1}}
            transition={{duration:0.5, delay:0.5, ease:easeInOut}}
          >Websites</motion.h1>
          <motion.h1 
            className='text-2xl md:text-3xl font-medium lg:text-6xl'
            initial={{x:10, opacity:0}}
            animate={{x:1, opacity:1}}
            transition={{duration:0.7, delay:0.7, ease:easeInOut}}
          >Mobile Apps</motion.h1>
        </motion.div>

        {/* Small Text Box */}
        <motion.div 
          // initial={{y:10, opacity:0}}
          // animate={{y:1, opacity:1}}
          initial={{x:10, opacity:0}}
          animate={{x:1, opacity:1}}
          transition={{duration: 0.7, delay: 0.9, ease:easeInOut}}
          className='flex justify-end'>
          <div className='flex gap-x-10 text-2xl lg:text-4xl bg-zinc-900 border border-indigo-400 lg:-b-4 xl:-b-8 rounded-xl p-2 md:p-4 pt-2 text-indigo-200'>
            <div>
              <span className='text-base lg:text-xl xl:text-2xl font-medium'>I&#39;m actively </span><br/>
              Looking for <br/> 
              <span className='italic text-3xl lg:text-5xl xl:text-6xl font-medium text-indigo-400'>Opportunities</span>.
              <ContactIconList/>
            </div>
            <Image src={purple} width={150} alt="purple_profile" className='hidden sm:block self-start border border-indigo-950 border-opacity-80 shadow rounded-xl'/>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Intro
