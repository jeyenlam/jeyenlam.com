"use client"

import React from 'react'
import {motion, useScroll, useTransform} from "framer-motion"

const About = () => {
  const {scrollYProgress} = useScroll();
  const x = useTransform(scrollYProgress, [0,1], [0, 600])

  return (
    <section className='w-full h-full justify-center items-center bg-slate-300'>
      <div className='p-10'>
        <div className='flex items-baseline'>
          <h3>Hi there</h3>
          <motion.div
            whileHover={{
              rotate: [-20, 0, -20, 0], // Rotate left (-10deg), then right (10deg), and back to 0
              transition: { duration: 0.5, ease: "easeInOut" } // Smooth transition
          }}><h1 className='text-4xl'>👋</h1></motion.div>
        </div>
        
          
        <p>I'm a senior majoring in <b>Computer Science</b> at <b><a target="_blank" href="https://gvsu.edu">Grand Valley State University</a></b>.
          <br/>
          Over the years, I've built strong technical skills in various programming languages
          and developed soft skills that help me excel in professional environments.
          <br/>
          I'm now focusing on <b>Web</b> and <b>Mobile Development</b> yet still leaving some space for exploring different fields to
          refresh my knowledge as well as being up-to-date to adapt to the fast-paced tech industry.
          <br/>
        </p>
      </div>
    </section>
  )
}

export default About