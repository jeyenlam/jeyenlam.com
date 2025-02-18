"use client"
import React from 'react'
import SectionTitle from '@/components/SectionTitle';
import PageLayout from '@/components/PageLayout';
import Intro from '@/components/Intro';
import AnimationOnScroll from '@/components/AnimationOnScroll';

const About = () => {

  return (
    <section id='about'>
      <Intro/>
      <PageLayout>
        <AnimationOnScroll>
          <SectionTitle title='01. About Me'/>
          <div className='w-full mt-8 flex flex-col gap-6'>
            <p>
            I&#39;m a senior CS major at <a className='font-semibold text-[var(--pop)]' href='https://gvsu.edu'>Grand Valley State University</a>, and throughout college, I&#39;ve had
            the chance to grow my skills through internships, hackathons,
            and personal projects. My passion lies in Web and Mobile Development,
            where I&#39;ve gained experience with modern frameworks, cloud computing,
            and DevOps. Lately, I&#39;ve been diving into AI and Machine Learning to
            stay in tune with where the industry is headed.
            </p>
          </div>
        </AnimationOnScroll>
      </PageLayout>
    </section>
  )
}

export default About;
