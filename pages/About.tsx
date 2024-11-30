"use client"

import React, { useRef } from 'react'
import { easeInOut, motion, useInView } from "framer-motion"
import { easeOut } from 'framer-motion/dom';
import SectionTitleContainer from '@/components/SectionTitleContainer';
import { skills } from '@/lib/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import IntroImg from '@/components/IntroImg';
import AnimationOnScroll from '@/components/AnimationOnScroll';

const About = () => {
  // Set up a ref and inView state for the h1
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef);

  return (
    <section id='about' className='bg-indigo-50 lg:pt-20 lg:h-full lg:items-center w-full flex items-start justify-center lg:p-20 gap-4'>
      <AnimationOnScroll>
        <div className='flex flex-col justify-start items-start'>
          <div className='px-4 py-4 lg:px-0 flex justify-center text-[10px] sm:text-xs lg:text-sm'>
            <div className='lg:w-4/5 text-zinc-800 flex justify-between bg-lime-200 p-2 sm:p-4 border border-zinc-900 md:border-b-4 sm:border-b-8 rounded-xl'>
              <div className='w-full lg:w-4/5 flex flex-col items-start'>
                <SectionTitleContainer title='01. About Me'/>
                <br/>
                <p>
                  I&#39;m a senior majoring in Computer Science at <a target="_blank" href="https://gvsu.edu" className='font-medium text-indigo-700 hover:font-bold'>Grand Valley State University</a>.<br/><br/>
                  Throughout my academic journey, I&#39;ve developed a strong foundation in various programming languages, along with essential soft skills that enable me to thrive in professional settings. While I&#39;m currently focusing on Web and Mobile Development, I remain open to exploring new areas to stay up-to-date and adaptable in the fast-evolving tech industry.<br/><br/>
                  I&#39;m actively seeking a software engineering internship for Winter 2025, with the aim of transitioning into a full-time role afterward. I would love to discuss how I can contribute to your team and make a positive impact. Please feel free to reach out if you&#39;re interested in connecting!
                </p>
                <br/>
                <h1>Here are some technlogies I&#39;ve been working with recently:</h1>
                <br/>
                <ul className='grid grid-cols-3 sm:grid-cols-5 gap-1 sm:gap-2 gap-x-2 sm:gap-x-4 bg-blue-00'>
                  {skills.map((skill, index) => { return (
                    <li key={index} className='p-1 rounded-xl text-[8px] sm:text-xs px-2 text-center bg-slate-50 text-indigo-700'>{skill}</li>
                  )})}
                </ul>
              </div>
              <div className='hidden lg:block relative left-14 top-5 transform rotate-6'><IntroImg/></div>
            </div>  
          </div>
        </div>
      </AnimationOnScroll>
      
      
    </section>
  )
}

export default About;
