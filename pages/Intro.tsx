"use client"
import React from 'react'
import IntroText from '@/components/IntroText';
import { contacts } from '@/lib/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faDownload, faStar, faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import {easeInOut, motion} from "framer-motion"
import CustomTooltip from '@/components/CustomTooltip';
import ContactList from '@/components/ContactList';

const Intro = () => {
  return (
    <section className='relative w-full xl:h-full flex flex-col items-center justify-center bg-zinc-900'>
      {/* Intro Text */}
      <motion.div
        initial={{x:10, opacity:0}}
        animate={{x:1, opacity:1}}
        transition={{duration:0.5, ease:easeInOut}} 
        className='z-0 w-[99%] xl:w-11/12 p-4 flex flex-col justify-end relative md:py-5'>
        <IntroText/>
      </motion.div>
      {/* Smaller Intro Text */}
      <motion.div 
        initial={{y:10, opacity:0}}
        animate={{y:1, opacity:1}}
        transition={{duration: 0.8, delay: 1, ease:easeInOut}}
        className='px-4 pb-2 lg:relative -top-28 -left-52 xl:-left-40 w-[99%] lg:w-auto'>
        <div className='h-full bottom-96 xl:left-[-10rem] text-2xl lg:text-4xl bg-zinc-900 border border-indigo-400 lg:-b-4 xl:-b-8 rounded-xl p-2 md:p-4 pt-2 text-indigo-400'>
          <span className='text-base lg:text-xl xl:text-2xl font-medium'>I&#39;m actively </span><br/>
          Looking for <br/> 
          <span className='italic text-3xl lg:text-5xl xl:text-6xl font-medium text-indigo-300'>Opportunities</span>.
          <ContactList/>
        </div>
      </motion.div>
    </section>
    
  )
}

export default Intro
