"use client"
import ContactForm from '@/components/ContactForm'
import SectionTitleContainer from '@/components/SectionTitleContainer'
import { contacts } from '@/lib/data'
import { faStar, faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'

const Contact = () => {

  return (
    <section id="contact" className='relative w-full h-full bg-gradient-to-b from-indigo-50 to-lime-200 flex flex-col justify-center items-center gap-8'>
      <div className='absolute bottom-5 z-10 px-4 py-1 bg-indigo-300 rounded-3xl border-zinc-900 border-2 border-b-4 text-zinc-900 text-sm flex justify-end items-center gap-2'>
        <h1>Made by Yen with ♡</h1>
        <h1>Copyright 2024</h1>
      </div>
      <div className='hidden xl:flex absolute bottom-5 -z-0 text-indigo-400'>
        <div className='relative bottom-2 -left-[28rem]'>
          <FontAwesomeIcon icon={faStar} className='text-4xl text-zinc-900'/>
        </div>
        <div className='relative bottom-16 -left-56'>
          <FontAwesomeIcon icon={faStarOfLife} className='text-6xl'/>
        </div>
        <div className='relative text-6xl -right-56 bottom-4'>
          <FontAwesomeIcon icon={faStar} className='text-7xl text-zinc-800'/>
        </div>
        <div className='relative -right-[28rem]'>
          <FontAwesomeIcon icon={faStarOfLife} className='text-3xl'/>
        </div>
      </div>
      <SectionTitleContainer title="04. What's next?"/>
      <ContactForm/>
      <ul className='flex bg-slate-00 justify-evenly w-40'>{contacts.map((contact)=>{ return (
        <Link href={contact.url} className='mt-4'>
          <FontAwesomeIcon icon={contact.icon} className='text-2xl border-2 border-zinc-900 rounded-md border-b-4 hover:bg-lime-200 hover:text-zinc-900 p-2 bg-indigo-400 text-zinc-900'/>
        </Link>
      )})}</ul>
    </section>
  )
}

export default Contact