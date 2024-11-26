"use client"

import React, { useRef } from 'react'
import { easeInOut, motion, useInView } from "framer-motion"
import { easeOut } from 'framer-motion/dom';
import SectionTitleContainer from '@/components/SectionTitleContainer';
import { skills } from '@/lib/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import IntroImg from '@/components/IntroImg';

const About = () => {
  // Set up a ref and inView state for the h1
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef);

  return (
    <section id='about' className='bg-indigo-50 pt-10 md:pt-20 w-full flex items-start justify-center md:p-20 gap-4'>
      <div className='flex flex-col justify-start items-start'>
        <div className='px-5 md:px-0 flex justify-center text-xs sm:text-sm'>
          <div className='md:w-4/5 text-zinc-800 flex justify-between bg-lime-200 p-4 border-2 border-zinc-900 border-b-8 rounded-xl'>
            <div className='w-full lg:w-4/5 flex flex-col items-start'>
              <SectionTitleContainer title='01. About Me'/>
              <br/>
              <p>
                I'm a senior majoring in Computer Science at <a target="_blank" href="https://gvsu.edu" className='font-medium text-indigo-700 hover:font-bold'>Grand Valley State University</a>.
                <br/><br/>
                Over the years, I've built strong technical skills in various programming languages
                and developed soft skills that help me excel in professional environments.
                I'm now focusing on Web and Mobile Development yet still leaving some space for exploring different fields to
                refresh my knowledge as well as being up-to-date to adapt to the fast-paced tech industry.
                <br/><br/>
                At the moment, I'm seeking a software engineering internship for Winter 2025,
                with the goal of securing a full-time position afterward.
                I’m eager to explore potential opportunities and how I can bring value to your team.
                Feel free to reach out if you'd like to connect further.
              </p>
              <br/>
              <h1>Here are some technlogies I've been working with recently:</h1>
              <br/>
              <ul className='grid grid-cols-2 sm:grid-cols-5 gap-2 gap-x-4 bg-blue-00'>
                {skills.map((skill) => { return (
                  <li className='p-1 rounded-xl text-xs px-2 text-center bg-slate-50 text-indigo-700'>{skill}</li>
                )})}
              </ul>
            </div>
            <div className='hidden lg:block relative left-14 top-10 transform rotate-6'><IntroImg/></div>
          </div>  
        </div>
      </div>
      {/* <IntroImg/> */}
      
    </section>
  )
}

export default About;
