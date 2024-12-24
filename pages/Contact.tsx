"use client"
import AnimationOnScroll from '@/components/AnimationOnScroll'
import ContactForm from '@/components/ContactForm'
import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import ContactIconList from '@/components/ContactIconList'

const Contact = () => {
  return (
    <section id="contact" className='w-full pt-4 lg:h-screen bg-zinc-900 flex flex-col items-center justify-center gap-6'>
      <SectionTitle title="04. What's next?"/>
      <ContactForm/>
      <ContactIconList/>
      <div className='self-center text-[10px] mb-5 sm:text-xs px-4 py-1 bg-zinc-800 opacity-80 rounded-3xl text-indigo-400 flex gap-2'>
          <h1>Made by Yen with ♡</h1>
          <h1>Copyright 2024</h1>
      </div>      
    </section>
  )
}

export default Contact