"use client"
import React, { useEffect, useState } from 'react'
import {easeInOut, motion} from "framer-motion"
import ContactIconList from '@/components/ContactIconList'
import Image from 'next/image'
import purple from '@/public/original.jpg'

const Intro = () => {
  return (
    <section id='intro' className='outter-padding'>
      <div className='pt-2 sm:pt-0 lg:mt-20 flex flex-col gap-4'>
        {/* Big Text Box */}
        {/* <motion.div 
          className='box lg:-b-4 xl:-b-8 rounded-xl p-2 md:p-4 pt-2 text-right border'
          initial={{x:10, opacity:0}}
          animate={{x:1, opacity:1}}
          transition={{duration:0.5, delay: 0.3, ease:easeInOut}}
        >
          <motion.h2 
            className='text-xl md:text-2xl lg:text-4xl'
            initial={{x:10, opacity:0}}
            animate={{x:1, opacity:1}}
            transition={{duration:0.5, delay: 0.3, ease:easeInOut}}
          >
            I <motion.span className='italic'>build</motion.span>
          </motion.h2>
          <motion.h2 
            className='text-2xl md:text-3xl font-medium lg:text-6xl'
            initial={{x:10, opacity:0}}
            animate={{x:1, opacity:1}}
            transition={{duration:0.5, delay:0.4, ease:easeInOut}}
          >
            Softwares</motion.h2>
          <motion.h2 
            className='text-2xl md:text-3xl font-medium lg:text-6xl'
            initial={{x:10, opacity:0}}
            animate={{x:1, opacity:1}}
            transition={{duration:0.5, delay:0.5, ease:easeInOut}}
          >Websites</motion.h2>
          <motion.h2 
            className='text-2xl md:text-3xl font-medium lg:text-6xl'
            initial={{x:10, opacity:0}}
            animate={{x:1, opacity:1}}
            transition={{duration:0.7, delay:0.7, ease:easeInOut}}
          >Mobile Apps</motion.h2>
        </motion.div> */}

        {/* Small Text Box */}
        <Image src={purple} width={50} alt="profile" className='border rounded-full'/>
        <motion.div 
          initial={{x:10, opacity:0}}
          animate={{x:1, opacity:1}}
          transition={{duration: 0.7, delay: 0.9, ease:easeInOut}}
          className='flex'>
          <div className='relative box flex gap-x-10 text-2xl lg:text-4xl border lg:-b-4 xl:-b-8 rounded-xl p-2 md:p-4 pt-2 text-indigo-200'>
            <div>
              <span className='text-base lg:text-xl xl:text-2xl font-medium'>I&#39;m currently</span>
              <br/>Looking for <br/> 
              <span className='text-3xl lg:text-5xl xl:text-6xl font-medium'>Opportunities</span>.
              <ContactIconList/>
            </div>
            <div className="absolute -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-inherit"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Intro
