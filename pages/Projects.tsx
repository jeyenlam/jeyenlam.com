"use client"
import React from 'react'
import { projects } from '@/lib/data'
import ProjectContainer from '@/components/ProjectContainer'
import SectionTitle from '@/components/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import AnimationOnScroll from '@/components/AnimationOnScroll'

const Projects = () => {
  return (
    <section id="projects" className='w-full lg:h-screen flex justify-center items-center p-4 sm:p-8 xl:px-20 bg-zinc-900'>
      <AnimationOnScroll>
        <div className='mt-10 sm:mt-0 xl:px-10 w-full h-full flex flex-col gap-8 items-center sm:items-end'>
          <SectionTitle title={"02. My Projects"} />
          <div className='grid grid-cols-2 gap-6'>
            {projects.map((project, index) => {
              return (
                <div key={index} className='w-flex flex-col justify-center items-center rounded-xl border border-zinc-800 shadow-lg bg-zinc-800 bg-opacity-30'>
                  <ProjectContainer project={project} />
                </div>
              )
            })}
          </div>
        </div>
      </AnimationOnScroll>
      
    </section>
  )
}

export default Projects
