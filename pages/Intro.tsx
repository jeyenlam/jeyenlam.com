"use client"
import React from 'react'
import IntroText from '@/components/IntroText';
import { contacts } from '@/lib/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faStar, faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import {easeInOut, motion} from "framer-motion"

const Intro = () => {
  return (
    <section className='relative w-full lg:h-full flex flex-col items-center justify-center bg-gradient-to-b from-lime-200 to-indigo-50'> 
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
      <motion.div
        initial={{x:10, opacity:0}}
        animate={{x:1, opacity:1}}
        transition={{duration:0.5, ease:easeInOut}} 
        className='z-0 w-full xl:w-11/12 flex flex-col justify-end relative md:pt-10 bg-slate-00 p-5 sm:pr-10'>
        <IntroText/>
      </motion.div>
      
      <motion.div 
        initial={{y:10, opacity:0}}
        animate={{y:1, opacity:1}}
        transition={{duration: 0.8, delay: 1, ease:easeInOut}}
        className='relative -top-28 -left-40'>
        <div className='hidden xl:block h-full bottom-96 xl:left-[-10rem] bg-lime-00 text-5xl bg-lime-200 border-2 border-zinc-900 border-b-8 rounded-lg p-4 pt-2'>
          <span className='text-2xl font-medium'>I'm currently </span><br/>
          Looking for <br/> <span className='italic text-6xl font-medium'>Opportunities</span>.
          <ul className='flex bg-slate-00 justify-evenly w-40'>{contacts.map((contact)=>{ return (
            <Link href={contact.url} className='mt-4'>
              <FontAwesomeIcon icon={contact.icon} className='text-2xl border-2 border-zinc-900 rounded-md border-b-4 hover:bg-lime-300 hover:text-zinc-900 p-2 bg-indigo-400 text-zinc-900'/>
            </Link>
          )})}</ul>
        </div>
      </motion.div>
    </section>
    
  )
}

export default Intro
