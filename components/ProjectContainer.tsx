import React from 'react'
import { IProject } from '@/lib/myInterface'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectContainerProps {
  project: IProject
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({project}) => {
  return (
    <div className='text-sm lg:w-96 lg:h-64 relative rounded-xl overflow-hidden group flex text-indigo-300 border border-zinc-800 shadow-lg bg-zinc-800 bg-opacity-10'>   
      <div className='p-2 md:p-6 flex flex-col justify-evenly gap-3'>
        {/* Title */}
        <Link href={project.urls[0].url} target="_blank">
          <h1 className='text-base text-indigo-400'>{project.title}</h1>
        </Link>
        {/* Description */}
        <p className='text-indigo-200 text-xs'>{project.projectDescription[0]}</p>
        {/* Tech */}
        <ul className='flex flex-wrap sm:gap-2 text-indigo-400'>
          {(project.tech).map((tech, index) => {return (
            <li key={index} className='low-opacity-text-box text-indigo-300'>{tech}</li>
          )})}
        </ul>
      </div>

      <Link href={project.urls[0].url} target="_blank" className='hidden sm:block absolute bottom-full group-hover:translate-y-64 duration-300 border border-zinc-800'>
        <Image src={project.media} alt={project.title} className='lg:w-96 lg:h-64 relative'/>
      </Link>
    </div>
  )
}

export default ProjectContainer