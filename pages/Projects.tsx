"use client"
import React from 'react'
import {projects} from '@/lib/data'
import ProjectContainer from '@/components/ProjectContainer'
import SectionTitleContainer from '@/components/SectionTitleContainer'

const Projects = () => {
  return (
    <section className='pt-20 w-full flex justify-center items-center md:p-20 bg-slate-00'>
      <div className='w-3/4 flex flex-col items-end bg-slate-00'>
        <SectionTitleContainer title={"02. Projects"}/>
        <div className='mt-8 w-full lg:grid grid-cols-2 gap-4'>
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