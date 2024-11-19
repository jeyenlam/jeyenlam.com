"use client"
import React from 'react'
import IntroText from '@/components/IntroText';
import IntroImg from '@/components/IntroImg';

const Intro = () => {
  return (
    <section className='w-full h-full flex bg-gray-00'> 
      <div className='w-full flex flex-col relative top-10 right-10 bg-slate-00'>
        <IntroText/>
      </div>

    </section>
    
  )
}

export default Intro
