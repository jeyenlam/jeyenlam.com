"use client"
import React from 'react'
import IntroText from '@/components/IntroText';
import IntroImg from '@/components/IntroImg';
import { contacts } from '@/lib/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Intro = () => {
  return (
    <section className='w-full sm:h-full flex flex-col items-end bg-gray-00'> 
      <div className='w-full flex flex-col justify-end relative md:pt-10 bg-slate-00 p-5 sm:pr-10'>
        <IntroText/>
        <div className='relative md:h-full sm:flex justify-end items-center mt-10 bg-slate-00'><IntroImg/></div>
      </div>
      <div className='hidden xl:block relative h-full bottom-96 xl:right-[35rem] bg-blue-00 text-5xl'>
        Looking for <br/> <span className='font-durer italic text-8xl'>Opportunities</span>.
        <ul className='flex bg-slate-00 justify-evenly w-40'>{contacts.map((contact)=>{ return (
          <Link href={contact.url} className='mt-4'>
            <FontAwesomeIcon icon={contact.icon} className='text-2xl border border-zinc-900 rounded-sm border-b-4 p-2 bg-blue-800 text-lime-200'/>
          </Link>
        )})}</ul>
      </div>
    </section>
    
  )
}

export default Intro
