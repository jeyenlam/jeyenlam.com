"use client"
import React from 'react'
import {projects} from '@/lib/data'
import ProjectContainer from '@/components/ProjectContainer'
import SectionTitleContainer from '@/components/SectionTitleContainer'

const Projects = () => {
  return (
    <section className='w-full flex justify-center items-center'>
      <div className='w-3/4 flex flex-col sm:flex-row items-start bg-slate-100'>
        <SectionTitleContainer title={"02. Projects"}/>
        <div className='w-full flex flex-col sm:flex-row justify-evenly items-start sm:items-center'>
          { 
            projects.map((project) => { 
              return (
                <ProjectContainer project={project}/>
              )})          
          }
        </div>
      </div>
      
      
    </section>
  )
}

export default Projects