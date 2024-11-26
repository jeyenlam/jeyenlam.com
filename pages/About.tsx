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
    <section className='bg-indigo-50 pt-20 w-full flex items-start justify-center md:p-20 gap-4'>
      <div className='w-3/5 bg-slate-00 flex flex-col justify-start items-start'>
        <div className='flex justify-center text-sm sm:text-base'>
          <div className='text-zinc-800 flex flex-col items-baseline bg-lime-200 p-4 border-2 border-zinc-900 rounded-xl'>
            <SectionTitleContainer title='01. About Me'/>
            <br/>
            <p>
              I'm a senior majoring in Computer Science at <b><a target="_blank" href="https://gvsu.edu" className='text-blue-800 hover:border-b-2 border-blue-800'>Grand Valley State University</a></b>.
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
            <ul className='grid grid-cols-2 text-xs sm:grid-cols-5 gap-2 gap-x-4 bg-blue-00'>
              {skills.map((skill) => { return (
                <li className='p-1 rounded-lg px-2 text-center bg-slate-50 text-blue-800'>{skill}</li>
              )})}
            </ul>
          </div>  
        </div>
      </div>
      <IntroImg/>
      
    </section>
  )
}

export default About;
