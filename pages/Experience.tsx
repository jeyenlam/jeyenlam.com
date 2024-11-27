"use client"
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitleContainer from '@/components/SectionTitleContainer';
import { experiences } from '@/lib/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import AnimationOnScroll from '@/components/AnimationOnScroll';

const Experience = () => {
  return (
    <section id='experience' className='bg-indigo-50 w-full xl:h-full flex flex-col justify-center items-center'>
      <AnimationOnScroll>
        <div className="mt-5 sm:mt-0 bg-slate-00 flex flex-col lg:flex-row justify-center items-center">
          <div className='lg:transform lg:-rotate-90'>
            <SectionTitleContainer title='03. My Experience'/>
          </div>
          <div className='w-4/5 text-xs sm:text-base lg:relative -left-16 md:w-3/5'>
            {experiences.map((experience) => {return (
              <div className='p-4 border-2 rounded-3xl border-b-8  border-zinc-900 mt-4'>
                <div className='flex flex-row gap-4 items-center'>
                  <h1 className='sm:text-lg font-semibold py-2 border-zinc-900 border bg-lime-200 rounded-full border-r-4 px-4'>{experience.title}</h1>
                  <h1 className='sm:text-sm px-4 border border-zinc-900 border-r-4 hover:font-bold bg-indigo-400 rounded-full'><Link target='_blank' href={experience.company.url}>{experience.company.name}</Link></h1>
                </div>
                <p className='m-2 sm:text-sm font-medium text-zinc-500'>{experience.duration}</p>
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
      </AnimationOnScroll>

    </section>
  );
}

export default Experience;