"use client"
import React, { useRef } from 'react'
import { useInView } from "framer-motion"
import SectionTitle from '@/components/SectionTitle';
import AnimationOnScroll from '@/components/AnimationOnScroll';
import PageLayout from '@/components/PageLayout';

const About = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef);

  return (
    <section id='about'>
      <AnimationOnScroll>
        <PageLayout>
          <SectionTitle title='01. About Me'/>
          <hr/>
          <div className='w-full mt-8 flex flex-col gap-6'>
            <p>
            I&#39;m a senior CS major at <a className='font-semibold text-[var(--primary)]' href='https://gvsu.edu'>Grand Valley State University</a>, and throughout college, I&#39;ve had
            the chance to grow my skills through internships, hackathons,
            and personal projects. My passion lies in Web and Mobile Development,
            where I&#39;ve gained experience with modern frameworks, cloud computing,
            and DevOps. Lately, I&#39;ve been diving into AI and Machine Learning to
            stay in tune with where the industry is headed.
            <br/><br/>
            I&#39;m now looking for a full-time Software Development role
            where I can continue to learn, grow, and contribute.
            I&#39;m eager to take on new challenges and make the most of
            every opportunity that comes my way.
            </p>
          </div>
          </PageLayout>
      </AnimationOnScroll>     
    </section>
  )
}

export default About;
