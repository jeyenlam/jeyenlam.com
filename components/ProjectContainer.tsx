"use client"
import React from 'react'
import { IProject } from '@/lib/myInterface'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faChevronDown } from '@fortawesome/free-solid-svg-icons'

interface ProjectContainerProps {
  project: IProject
  theme: string
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({project, theme="light"}) => {

  return (
    <div className='project-card flex-1 relative max-h-fit sm:max-h-none'>  
      
      {/* Hidden Project Image */}
      <div className='group absolute bottom-full duration-700 flex flex-col items-end w-fit left-0'> 
        <Image src={project.media} alt={project.title} className='group-hover:translate-y-full duration-700'/>
        <FontAwesomeIcon icon={faChevronDown} className='absolute -bottom-5 group-hover:bottom-0 duration-500 group cursor-pointer mr-2 text-[var(--secondary)]'/>
      </div> 

      {/* Text Content */}
      <div className='flex flex-col justify-evenly gap-3'>
        {/* Title */}
        <Link href={project.urls[0].url} target="_blank" className='group flex items-baseline gap-2 hover:-translate-y-1 duration-150'>
          <h2 className='text-lg sm:text-2xl text-[var(--primary)] group-hover:text-[var(--pop)] font-medium'>{project.title}</h2>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='group-hover:block hidden group-hover:text-[var(--pop)]'/>
        </Link>
        {/* Description */}
        <p className='rounded-lg text-sm text-[var(--primary)]'>{project.projectDescription[0]}</p>
        {/* Tech stack */}
        <ul className='flex flex-wrap gap-2'>
          {(project.tech).map((tech, index) => {return (
            <li key={tech} className='small-text-hover'>{tech}</li>
          )})}
        </ul>
      </div>

      {/* Project Background */}
      <Link href={project.urls[0].url} target="_blank" className={`${theme === "dark" ? "opacity-25" : ""} w-fit left-0 absolute blur-3xl top-0 -z-10`}>
        <Image src={project.media} alt={project.title}/>
      </Link>
    </div>
  )
}

export default ProjectContainer