"use client"
import React from 'react'
import IntroText from '@/components/IntroText';
import { contacts } from '@/lib/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faStar, faStarOfLife } from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
  return (
    <section className='relative w-full xl:h-full flex flex-col items-center justify-center bg-gradient-to-b from-lime-200 to-indigo-50'> 
      <div className='hidden xl:block absolute z-10 text-zinc-900'>
        <div className='relative -top-52'>
          <FontAwesomeIcon icon={faStarOfLife} className='text-7xl'/>
        </div>
        <div className='relative text-7xl -top-8 -left-[32rem]'>
          <FontAwesomeIcon icon={faStar} className='text-7xl'/>
        </div>
      </div>
      <div className='z-0 w-full flex flex-col justify-end relative md:pt-10 bg-slate-00 p-5 sm:pr-10'>
        <IntroText/>
      </div>
      
      <div className='relative -top-28 -left-32'>
        <div className='hidden xl:block h-full bottom-96 xl:left-[-10rem] bg-lime-00 text-5xl bg-lime-200 border-2 border-zinc-900 border-b-8 rounded-lg p-4 pt-2'>
          <span className='text-2xl font-medium'>I'm currently </span><br/>
          Looking for <br/> <span className='italic text-6xl font-medium'>Opportunities</span>.
          <ul className='flex bg-slate-00 justify-evenly w-40'>{contacts.map((contact)=>{ return (
            <Link href={contact.url} className='mt-4'>
              <FontAwesomeIcon icon={contact.icon} className='text-2xl border-2 border-zinc-900 rounded-md border-b-4 hover:bg-lime-300 hover:text-zinc-900 p-2 bg-indigo-400 text-zinc-900'/>
            </Link>
          )})}</ul>
        </div>
      </div>
    </section>
    
  )
}

export default Intro
