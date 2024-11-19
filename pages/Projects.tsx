"use client"
import React from 'react'
import {projects} from '@/lib/data'
import ProjectContainer from '@/components/ProjectContainer'

const Projects = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center'>
      <div className='text-3xl'>Projects</div>
      <div className='w-full flex justify-evenly items-center'>
        { 
          projects.map((project) => { 
            return (
              <ProjectContainer project={project}/>
            )})          
        }
      </div>
      
    </section>
  )
}

export default Projects