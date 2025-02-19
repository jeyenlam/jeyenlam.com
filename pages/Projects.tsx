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
import { useAppContext } from '@/app/context'


const Projects = () => {
  const [projectCounter, setProjectCounter] = useState(4)
  const { theme } = useAppContext()


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
              <div key={project.title} className='flex'>
                <ProjectContainer project={project} theme={theme}/>
              </div>
            ))}
          </div>

          {/* Show the button only if there are more projects */}
          {projectCounter < projects.length && (
            <div className='flex justify-center items-center'>
              <button
                onClick={handleExpandButton}
                className='mt-2 w-8 h-8 border hover:scale-110 duration-150 bg-[var(--teritary)] rounded-full'
              >
                <FontAwesomeIcon icon={faAdd} />
              </button>
            </div>
            
          )}
        </PageLayout>
      </AnimationOnScroll>
    </section>
  )
}

export default Projects
