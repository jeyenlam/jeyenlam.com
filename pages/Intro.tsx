"use client"
import React from 'react'
import {easeInOut, motion} from "framer-motion"
import ContactIconList from '@/components/ContactIconList'
import Image from 'next/image'
import purple from '@/public/purple.jpg'

const Intro = () => {
  return (
    <section id='intro'>
      <div className='p-2 mt-10 flex flex-col gap-4'>
        {/* Big Text Box */}
        <motion.div 
          className='lg:-b-4 xl:-b-8 rounded-xl p-2 md:p-4 pt-2 text-right border'
          initial={{x:10, opacity:0}}
          animate={{x:1, opacity:1}}
          transition={{duration:0.5, delay: 0.3, ease:easeInOut}}
        >
          <motion.h1 
            initial={{x:10, opacity:0}}
            animate={{x:1, opacity:1}}
            transition={{duration:0.5, delay: 0.3, ease:easeInOut}}
          >
            I <motion.span>build</motion.span>
          </motion.h1>
          <motion.h1 
            initial={{x:10, opacity:0}}
            animate={{x:1, opacity:1}}
            transition={{duration:0.5, delay:0.4, ease:easeInOut}}
          >
            Softwares</motion.h1>
          <motion.h1 
            initial={{x:10, opacity:0}}
            animate={{x:1, opacity:1}}
            transition={{duration:0.5, delay:0.5, ease:easeInOut}}
          >Websites</motion.h1>
          <motion.h1 
            initial={{x:10, opacity:0}}
            animate={{x:1, opacity:1}}
            transition={{duration:0.7, delay:0.7, ease:easeInOut}}
          >Mobile Apps</motion.h1>
        </motion.div>

        {/* Small Text Box */}
        <motion.div 
          initial={{x:10, opacity:0}}
          animate={{x:1, opacity:1}}
          transition={{duration: 0.7, delay: 0.9, ease:easeInOut}}
          className='flex-1'>
          <div className='flex border gap-x-10 lg:-b-4 xl:-b-8 rounded-xl p-2 md:p-4 pt-2'>
            <div>
              I&#39;m actively<br/>
              looking for a<br/> 
              <span className='italic font-medium'>Full-time <br/>Opportunity</span>
              <ContactIconList/>
            </div>
            <Image src={purple} width={150} alt="purple_profile" className='self-start border shadow rounded-xl'/>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Intro