"use client"

import React, { useRef } from 'react'
import { useInView } from "framer-motion"
import SectionTitle from '@/components/SectionTitle';
import { skills } from '@/lib/data';
import AnimationOnScroll from '@/components/AnimationOnScroll';

const About = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef);

  return (
    <section id='about' className='bg-zinc-900 lg:pt-20 lg:items-center w-full flex items-start justify-center lg:p-20 gap-4'>
      <AnimationOnScroll>
        <div className='flex flex-col justify-start items-start'>
          <div className='px-4 py-4 lg:px-0 flex justify-center text-[10px] sm:text-[13px] lg:text-sm text-indigo-200'>
            <div className='p-2 w-full lg:w-4/5 flex flex-col items-start'>
              <SectionTitle title='01. About Me'/>
              <div className='mt-4 flex flex-col gap-6'>
                <p>
                  I&#39;m a senior majoring in Computer Science at <a target="_blank" href="https://gvsu.edu" className='font-medium text-indigo-400 hover:text-indigo-600 hover:font-semibold'>Grand Valley State University</a>.<br/><br/>
                  Throughout my academic journey, I&#39;ve developed a strong foundation in various programming languages, along with essential soft skills that enable me to thrive in professional settings. While I&#39;m currently focusing on Web and Mobile Development, I remain open to exploring new areas to stay up-to-date and adaptable in the fast-evolving tech industry.<br/><br/>
                  I&#39;m actively seeking a software engineering internship for Winter 2025, with the aim of transitioning into a full-time role afterward. I would love to discuss how I can contribute to your team and make a positive impact. Please feel free to reach out if you&#39;re interested in connecting!
                </p>
                <p>Here are some technlogies I&#39;ve been working with recently:</p>
                <ul className='lg:w-3/5 grid grid-cols-3 sm:grid-cols-5 gap-1 sm:gap-2 gap-x-2 sm:gap-x-4'>
                  {skills.map((skill, index) => { return (
                    <li key={index} className='p-1 rounded-xl text-[8px] sm:text-xs px-2 text-center bg-zinc-800 opacity-80 text-indigo-400 text-opacity-50'>{skill}</li>
                  )})}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimationOnScroll>     
    </section>
  )
}

export default About;
