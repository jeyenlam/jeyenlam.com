"use client"
import AnimationOnScroll from '@/components/AnimationOnScroll'
import ContactForm from '@/components/ContactForm'
import SectionTitleContainer from '@/components/SectionTitleContainer'
import { contacts } from '@/lib/data'
import { faDownload, faStar, faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import CustomTooltip from '@/components/CustomTooltip'

const Contact = () => {

  return (
    <section id="contact" className='relative w-full h-[40rem] sm:h-full bg-gradient-to-b from-indigo-50 to-lime-200 flex flex-col sm:justify-center gap-8'>
      <div className='absolute self-center bottom-5 z-10 text-[10px] sm:text-xs px-4 py-1 bg-indigo-300 rounded-3xl border-zinc-900 border border-b-2 lg:border-b-4 text-zinc-800 flex gap-2'>
        <h1>Made by Yen with ♡</h1>
        <h1>Copyright 2024</h1>
      </div>
      {/* Decoration */}
      <div className='hidden xl:flex absolute bottom-10 self-center -z-0 text-indigo-400'>
        {/* 1 */}
        <motion.div 
          animate={{ y: [0,50,0] }}  // Moves from x=0 to x=100 and back to x=0
          transition={{
            duration: 10,                 // The total duration of one cycle (2 seconds)
            repeat: Infinity,            // Repeats infinitely
            ease: "linear",           // Easing function for smooth motion
          }}
          className='relative bottom-2 -left-[28rem]'>
          <FontAwesomeIcon icon={faStar} className='text-4xl text-zinc-900'/>
        </motion.div>
        {/* 2 */}
        <motion.div 
          animate={{ y: [0,50,0] }}  // Moves from x=0 to x=100 and back to x=0
          transition={{
            duration: 10,                 // The total duration of one cycle (2 seconds)
            repeat: Infinity,            // Repeats infinitely
            ease: "linear",           // Easing function for smooth motion
          }}
          className='relative bottom-16 -left-56'>
          <FontAwesomeIcon icon={faStarOfLife} className='text-6xl'/>
        </motion.div>
        {/* 3 */}
        <motion.div 
          animate={{ y: [0,20,0] }}  // Moves from x=0 to x=100 and back to x=0
          transition={{
            duration: 5,                 // The total duration of one cycle (2 seconds)
            repeat: Infinity,            // Repeats infinitely
            ease: "linear",           // Easing function for smooth motion
          }}
          className='relative z-1000 text-6xl -right-56 bottom-4'>
          <FontAwesomeIcon icon={faStar} className='text-7xl text-zinc-800'/>
        </motion.div>
        {/* 4 */}
        <motion.div
          animate={{ y: [0,30,0] }}  // Moves from x=0 to x=100 and back to x=0
          transition={{
            duration: 10,                 // The total duration of one cycle (2 seconds)
            repeat: Infinity,            // Repeats infinitely
            ease: "linear",           // Easing function for smooth motion
          }}
          className='relative -right-[28rem]'>
          <FontAwesomeIcon icon={faStarOfLife} className='text-3xl'/>
        </motion.div>
      </div>
      <div className='h-[90%] flex flex-col justify-evenly items-center'>
        <AnimationOnScroll>
          <SectionTitleContainer title="04. What's next?"/>
        </AnimationOnScroll>
        <ContactForm/>
        <ul className='flex justify-evenly w-28 lg:w-40 z-10'>
          {contacts.map((contact)=>{ return (
            <Link href={contact.url} className='mt-4'>
              <FontAwesomeIcon icon={contact.icon} className='text-base lg:text-2xl border border-zinc-900 rounded-lg border-b-2 lg:border-b-4 hover:border-b hover:mt-[1px] hover:bg-lime-300 hover:text-zinc-900 p-2 bg-indigo-400 text-zinc-900'/>
            </Link>
          )})}
          <Link target="_blank" href='/YenLamResume2024v3.pdf' download={"YenLamResume2024v3.pdf"} className='mt-4 relative group'>
            <FontAwesomeIcon icon={faDownload} className='text-base lg:text-2xl border border-zinc-900 rounded-lg border-b-2 lg:border-b-4 hover:border-b hover:mt-[1px] hover:bg-lime-300 hover:text-zinc-900 p-2 bg-indigo-400 text-zinc-900'/>
            <CustomTooltip tip="Download Resume"/>
          </Link>
        </ul>  
      </div>
      
    </section>
  )
}

export default Contact