"use client"
import React, { useState } from 'react'
import { projects } from '@/lib/data'
import ProjectContainer from '@/components/ProjectContainer'
import SectionTitle from '@/components/SectionTitle'
import 'swiper/css';
import 'swiper/css/pagination';
import AnimationOnScroll from '@/components/AnimationOnScroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import PageLayout from '@/components/PageLayout'

const Projects = () => {

  const [projectCounter, setProjectCounter] = useState(4) // Initial count to display

  const handleExpandButton = () => {
    setProjectCounter(projectCounter + 4) // Load 4 more projects on button click
  }

  return (
    <section id="projects">
      <AnimationOnScroll>
        <PageLayout>
          <SectionTitle title={"02. My Projects"} />
          <div className='mt-8 grid xl:grid-cols-2 gap-4 sm:gap-6'>
            {projects.slice(0, projectCounter).map((project, index) => (
              <div key={index} className='flex'>
                <ProjectContainer project={project} />
              </div>
            ))}
          </div>
          {projectCounter < projects.length && ( // Show the button only if there are more projects
            <button
              onClick={handleExpandButton}
              className='mt-2 w-8 h-8 border hover:scale-110 transition-all text-[#e05485] bg-[#fcf3f7] border-[#fae9f1] rounded-full'
            >
              <FontAwesomeIcon icon={faAdd} />
            </button>
          )}
        </PageLayout>
      </AnimationOnScroll>
    </section>
  )
}

export default Projects
