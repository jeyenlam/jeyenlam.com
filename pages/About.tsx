"use client"

import React from 'react'
import {motion, useScroll, useTransform} from "framer-motion"

const About = () => {
  const {scrollYProgress} = useScroll();
  const x = useTransform(scrollYProgress, [0,1], [0, 600])

  return (
    <section className='w-full flex flex-col justify-center items-center bg-slate-00 md:p-20'>
      <div className='bg-black w-32 p-4 text-center text-white shadow-lg'>About Me</div>
      <div className='text-sx md:text-md p-2 md:w-2/3'>
        <div className='flex items-baseline whitespace-pre-line'>
          <h3>Hi there</h3>
          <motion.div
            whileHover={{
              rotate: [-20, 0, -20, 0], // Rotate left (-10deg), then right (10deg), and back to 0
              transition: { duration: 0.5, ease: "easeInOut" } // Smooth transition
          }}><h1 className='text-4xl'>👋</h1></motion.div>
        </div>
        <br/>
        <p>I'm a senior majoring in <b>Computer Science</b> at <b><a target="_blank" href="https://gvsu.edu">Grand Valley State University</a></b>.
          <br/>
          <br/>
          Over the years, I've built strong technical skills in various programming languages
          and developed soft skills that help me excel in professional environments.
          <br/>
          I'm now focusing on <b>Web</b> and <b>Mobile Development</b> yet still leaving some space for exploring different fields to
          refresh my knowledge as well as being up-to-date to adapt to the fast-paced tech industry.
          <br/>
          <br/>
          At the moment, I'm seeking a software engineering internship for Winter 2025,
          with the goal of securing a full-time position afterward.
          I’m eager to explore potential opportunities and how I can bring value to your team.
          Feel free to reach out if you'd like to connect further.
        </p>
      </div>
    </section>
  )
}

export default About