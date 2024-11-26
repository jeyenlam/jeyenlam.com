"use client"
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitleContainer from '@/components/SectionTitleContainer';
import { experiences } from '@/lib/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Experience = () => {
  return (
    <section id='experience' className='bg-indigo-50 w-full sm:h-full lg:h-full flex flex-col justify-center items-center'>
      <div className="sm:w-4/5 p-2 flex flex-row justify-center items-center">
        <div className='transform -rotate-90'>
          <SectionTitleContainer title='03. My Experience'/>
        </div>
        <div className='lg:relative -left-16 sm:w-2/3'>
          {experiences.map((experience) => {return (
            <div className='p-4 border-2 rounded-3xl border-b-8  border-zinc-900 mt-4'>
              <div className='flex flex-row gap-4 items-center'>
                <h1 className='text-lg font-semibold py-2 border-zinc-900 border bg-lime-200 rounded-full border-r-4 px-4'>{experience.title}</h1>
                <h1 className='text-sm px-4 border border-zinc-900 border-r-4 hover:font-bold bg-indigo-400 rounded-full'><Link target='_blank' href={experience.company.url}>{experience.company.name}</Link></h1>
              </div>
              <p className='m-2 text-sm font-medium text-zinc-500'>{experience.duration}</p>
              <ul className='bg-slate-50 border border-zinc-900 p-4 rounded-3xl'>
                {(experience.roleDescription).map((description) => {
                  return (
                    <div className='flex'>
                      <FontAwesomeIcon icon={faCaretRight} width={10} className='mr-1 mt-1'/>
                      <li>{description}</li>
                    </div>
                  )
                })}
              </ul>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}

export default Experience;