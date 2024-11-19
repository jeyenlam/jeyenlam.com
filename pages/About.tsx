"use client"

import React, { useRef } from 'react'
import { easeInOut, motion, useInView } from "framer-motion"
import { easeOut } from 'framer-motion/dom';
import SectionTitleContainer from '@/components/SectionTitleContainer';

const About = () => {
  // Set up a ref and inView state for the h1
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef);

  return (
    <section className='mt-20 w-full flex flex-col items-center justify-center bg-slate-00 md:p-20'>
      <div className='w-3/4 bg-slate-00 flex flex-col justify-start items-start'>
        <SectionTitleContainer title={"01. About Me"}/>
        <div className='flex justify-center text-sm sm:text-base'>
          <div className='flex flex-col items-baseline bg-slate-00'>
            <br/>
            <h3>Hi there <span className='text-2xl'>👋</span></h3>
            <br/>
            <p>
              I'm a senior majoring in <b>Computer Science</b> at <b><a target="_blank" href="https://gvsu.edu" className='text-blue-800'>Grand Valley State University</a></b>.
              <br/><br/>
              Over the years, I've built strong technical skills in various programming languages
              and developed soft skills that help me excel in professional environments.
              I'm now focusing on <b>Web</b> and <b>Mobile Development</b> yet still leaving some space for exploring different fields to
              refresh my knowledge as well as being up-to-date to adapt to the fast-paced tech industry.
              <br/><br/>
              At the moment, I'm seeking a software engineering internship for Winter 2025,
              with the goal of securing a full-time position afterward.
              I’m eager to explore potential opportunities and how I can bring value to your team.
              Feel free to reach out if you'd like to connect further.
            </p>
          </div>  
        </div>
      </div>
      
    </section>
  )
}

export default About;
