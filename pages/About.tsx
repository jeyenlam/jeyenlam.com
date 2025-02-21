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
          <SectionTitle title='About Me'/>
          <div className='w-full mt-8 flex flex-col gap-6'>
            <p>
            I&#39;m a senior CS major at <a className='font-medium text-[var(--pop)]' href='https://gvsu.edu'>Grand Valley State University</a>, and throughout college, I&#39;ve had
            the chance to grow my skills through internships, hackathons,
            and personal projects.
            <br/>
            <br/>
            My passion lies in <span className='font-[400] text-[var(--primary)]'>Web and Mobile Development</span>,
            where I&#39;ve gained experience with modern frameworks, cloud computing,
            and DevOps. Recently, I&#39;ve been exploring <span className='font-[400] text-[var(--primary)]'>AI and Machine Learning</span> and how to integrate them into web and mobile apps, aiming to stay current with industry trends.
            <br/>
            <br/>
            If I&#39;m not at computer, I&#39;m probably either baking, tending to my 🐶🐶, learning Mandarin Chinese or watching a good old movie.
            </p>
          </div>
        </AnimationOnScroll>
      </PageLayout>
    </section>
  )
}

export default About;
