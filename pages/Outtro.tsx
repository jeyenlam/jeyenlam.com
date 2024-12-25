"use client"
import AnimationOnScroll from '@/components/AnimationOnScroll'
import ContactForm from '@/components/ContactForm'
import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import ContactIconList from '@/components/ContactIconList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Outtro = () => {
  const handleArrowUpButton = () => {
    document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <section id="contact" className='relative w-full pt-4 lg:h-screen lg:pt-20 bg-zinc-900 flex flex-col items-center justify-between gap-6'>
      <AnimationOnScroll>
        <SectionTitle title="04. What's next?"/>
      </AnimationOnScroll>
      <AnimationOnScroll>
        <ContactForm/>
      </AnimationOnScroll>
      <div className='flex flex-col gap-8 items-center'>
        <ContactIconList/>     
        <footer className='mt-5 relative bottom-5 flex justify-center items-center text-[10px] sm:text-xs px-4 py-1 bg-zinc-800 bg-opacity-30 text-opacity-60 rounded-3xl text-indigo-400 gap-2'>
          <h1>Made by Yen with ♡</h1>
          <h1>Copyright 2024</h1>
        </footer>
      </div>
      <button onClick={handleArrowUpButton} className='absolute animate-bounce hover:animate-none bottom-10 right-10 text-indigo-400'><FontAwesomeIcon icon={faArrowUp}/></button>
    </section>
  )
}

export default Outtro