"use client"
import React from 'react'
import {easeInOut, motion} from "framer-motion"
import ContactIconList from '@/components/ContactIconList'
import Image from 'next/image'
import purple from '@/assets/purple.jpg'
import original from '@/assets/original.jpg'

const Intro = () => {
  return (
    <section className='flex flex-col lg:h-screen p-8 gap-4 bg-zinc-900 justify-center'>
      <div className='flex flex-col gap-4 bg-slate-00'>
        {/* Big Text Box */}
        <div className='lg:-b-4 xl:-b-8 rounded-xl p-2 md:p-4 pt-2 text-right border border-indigo-400 text-indigo-300 bg-zinc-900'>
          <motion.h1 
            className='text-xl md:text-2xl lg:text-4xl'
            initial={{x:10, opacity:0}}
            animate={{x:1, opacity:1}}
            // transition={{duration:0.5, delay: 0.3, ease:easeInOut}}
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
        </div>

        {/* Small Text Box */}
        <motion.div 
          initial={{y:10, opacity:0}}
          animate={{y:1, opacity:1}}
          // transition={{duration: 0.8, delay: 1, ease:easeInOut}}
          className='flex justify-end'>
          <div className='flex gap-x-10 text-2xl lg:text-4xl bg-zinc-900 border border-indigo-400 lg:-b-4 xl:-b-8 rounded-xl p-2 md:p-4 pt-2 text-indigo-400'>
            <div>
              <span className='text-base lg:text-xl xl:text-2xl font-medium'>I&#39;m actively </span><br/>
              Looking for <br/> 
              <span className='italic text-3xl lg:text-5xl xl:text-6xl font-medium text-indigo-300'>Opportunities</span>.
              <ContactIconList/>
            </div>
            <div className='hidden sm:block relative'>
              <Image src={original} width={150} alt="profile" className='opacity-60 border border-indigo-950 border-opacity-50 shadow rounded-xl'/>
              <Image src={purple} width={150} alt="purple_profile" className='border border-indigo-950 border-opacity-80 shadow absolute top-0 opacity-100 hover:opacity-0 rounded-xl'/>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Intro
