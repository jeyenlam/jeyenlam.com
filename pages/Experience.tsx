"use client"
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitleContainer from '@/components/SectionTitleContainer';
import { experiences } from '@/lib/data';

const Experience = () => {
  return (
    <section className='bg-lime-50 w-full sm:h-full flex flex-col items-center'>
      <SectionTitleContainer title='Experience'/>
      <div>
        {experiences.map((experience) => {return (
          <div>{experience.title}</div>
        )})}
      
      </div> 

    </section>
  );
}

export default Experience;