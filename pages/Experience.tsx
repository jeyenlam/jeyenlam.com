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
    <section id='experience' className='bg-indigo-50 w-full xl:h-full p-4 flex flex-col justify-center items-center'>
      <AnimationOnScroll>
        <div className="mt-5 flex flex-col lg:flex-row justify-center items-center">
          {/* Title */}
          <div className='lg:transform lg:-rotate-90'>
            <SectionTitleContainer title='03. My Experience'/>
          </div>
          {/* Experience Cards */}
          <div className=' text-xs sm:text-sm lg:relative -left-16 md:w-4/6 xl:w-3/6 text-zinc-800'>
            {experiences.map((experience) => {return (
              <div className='p-4 border rounded-3xl border-b-2 lg:border-b-4 border-zinc-900 mt-4 bg-indigo-100'>
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center'>
                  {/* Title */}
                  <h1 className='md:text-lg font-medium sm:font-semibold py-1 sm:py-2 border-zinc-900 border bg-lime-200 rounded-full lg:border-r-4 px-2 sm:px-4'>{experience.title}</h1>
                  {/* Company */}
                  <h1 className='text-[10px] sm:text-sm px-2 sm:px-4 border border-zinc-900 lg:border-r-4 hover:font-bold bg-indigo-400 rounded-full'><Link target='_blank' href={experience.company.url}>{experience.company.name}</Link></h1>
                </div>
                {/* Duration */}
                <p className='m-1 sm:m-2 text-[9px] sm:text-xs font-medium text-zinc-500'>{experience.duration}</p>
                <ul className='bg-slate-50 border border-zinc-900 p-2 sm:p-4 rounded-3xl'>
                  {(experience.roleDescription).map((description) => {
                    return (
                      <div className='flex text-[10px] sm:text-xs lg:text-sm'>
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