"use client"
import React, { useState } from 'react'
import { projects } from '@/lib/data'
import ProjectContainer from '@/components/ProjectContainer'
import SectionTitle from '@/components/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import AnimationOnScroll from '@/components/AnimationOnScroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {

  const [projectCounter, setProjectCounter] = useState(4) // Initial count to display

  const handleExpandButton = () => {
    setProjectCounter(projectCounter + 4) // Load 4 more projects on button click
  }

  return (
    <section id="projects" className='w-full lg:h-screen flex justify-center items-center p-4 sm:p-8 xl:px-20 bg-zinc-900'>
      <AnimationOnScroll>
        <div className='mt-10 sm:mt-0 xl:px-10 w-full h-full flex flex-col gap-8 items-center sm:items-end'>
          <SectionTitle title={"02. My Projects"} />
          <div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
            {projects.slice(0, projectCounter).map((project, index) => (
              <div key={index} className='flex'>
                <ProjectContainer project={project} />
              </div>
            ))}
          </div>
          {projectCounter < projects.length && ( // Show the button only if there are more projects
            <button
              onClick={handleExpandButton}
              className='self-center text-indigo-400 w-8 h-8 border border-indigo-600 hover:bg-indigo-600 hover:scale-110 transition-all bg-transparent rounded-full'
            >
              <FontAwesomeIcon icon={faAdd} />
            </button>
          )}
        </div>
      </AnimationOnScroll>
    </section>
  )
}

export default Projects
