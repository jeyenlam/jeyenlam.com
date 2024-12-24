"use client"
import React from 'react'
import IntroText from '@/components/IntroText';
import { contacts } from '@/lib/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faDownload, faStar, faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import {easeInOut, motion} from "framer-motion"
import CustomTooltip from '@/components/CustomTooltip';

const Intro = () => {
  return (
    <section className='relative w-full xl:h-full flex flex-col items-center justify-center bg-slate-950 text-lime-200'> 
      {/* Decoration */}
      <motion.div className='hidden xl:block absolute z-10 text-zinc-900'>
        <motion.div 
          initial={{y:-10, opacity:0}}
          animate={{y:1, opacity:1}}
          transition={{duration:0.6, delay: 0.6, ease:easeInOut}}
          className='relative -top-52'>
          <FontAwesomeIcon icon={faStarOfLife} className='text-7xl'/>
        </motion.div>
        <motion.div 
          initial={{y:-10, opacity:0}}
          animate={{y:1, opacity:1}}
          transition={{duration:0.6, delay: 0.8, ease:easeInOut}}
          className='relative text-7xl -top-8 -left-[32rem]'>
          <FontAwesomeIcon icon={faStar} className='text-7xl'/>
        </motion.div>
      </motion.div>
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
        <div className='h-full bottom-96 xl:left-[-10rem] text-2xl lg:text-4xl bg-slate-950 border border-indigo-600 shadow shadow-indigo-900 lg:-b-4 xl:-b-8 rounded-xl p-2 md:p-4 pt-2 text-indigo-600'>
          <span className='text-base lg:text-xl xl:text-2xl font-medium'>I&#39;m actively </span><br/>
          Looking for <br/> 
          <span className='italic text-3xl lg:text-5xl xl:text-6xl font-medium'>Opportunities</span>.
          <ul className='flex text-base justify-evenly w-28 lg:w-40'>
            {contacts.map((contact, index) => { return (
              <Link key={index} target='_blank' href={contact.url} className='mt-2 lg:mt-4'>
                <FontAwesomeIcon icon={contact.icon} className='lg:text-2xl  -zinc-900 rounded-md -b-2 lg:-b-4 hover:mt-[1px] hover:bg-indigo-600 hover:text-indigo-100 p-2 bg-indigo-400 text-zinc-900'/>
              </Link>
            )})}
            <Link target="_blank" href='/YenLamResume2024v3.pdf' download={"YenLamResume2024v3.pdf"} className='mt-2 lg:mt-4 relative group'>
                <FontAwesomeIcon icon={faDownload} className='lg:text-2xl  -zinc-900 rounded-md -b-2 lg:-b-4 hover:-b hover:mt-[1px] hover:bg-indigo-600 hover:text-indigo-100 p-2 bg-indigo-400 text-zinc-900'/>
                <CustomTooltip tip="Download Resume"/>
            </Link>
          </ul>
        </div>
      </motion.div>
    </section>
    
  )
}

export default Intro
