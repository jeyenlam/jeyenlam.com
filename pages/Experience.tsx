"use client"
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '@/components/SectionTitle';
import { experiences } from '@/lib/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import AnimationOnScroll from '@/components/AnimationOnScroll';

const Experience = () => {
  return (
    <section id='experience' className='outter-padding'>
      <AnimationOnScroll>
        <div className="flex flex-col justify-center items-center text-sm">
          {/* Title */}
          <SectionTitle title='03. My Experience'/>
          {/* Experience Cards */}
          <div className='lg:relative md:w-4/6 xl:w-3/6 text-indigo-200'>
            {experiences.map((experience, index) => {return (
              <div key={index} className='p-2 rounded-3xl -b-2 lg:-b-4 mt-4'>
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center'>
                  {/* Title */}
                  <h1 className='text-indigo-400 md:text-lg font-medium py-1 sm:py-2 sm:px-4'>{experience.title}</h1>
                  {/* Company */}
                  <h1 className='px-2 mb-1 sm:px-4 lg:-r-4 hover:text-indigo-500 bg-zinc-800 opacity-80 rounded-full'><Link target='_blank' href={experience.company.url}>{experience.company.name}</Link></h1>
                </div>
                {/* Duration */}
                <p className='m-1 sm:m-2 pl-2 text-xs sm:text-sm font-medium text-opacity-80 text-indigo-300'>{experience.duration}</p>
                {/* Job Description */}
                <ul className='sm:p-4 rounded-3xl'>
                  {(experience.roleDescription).map((description, index) => {
                    return (
                      <div key={index} className='flex text-sm'>
                        <FontAwesomeIcon icon={faCaretRight} width={10} className='mr-3 mt-3'/>
                        <li className='pt-2'>{description}</li>
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