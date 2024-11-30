import React from 'react'
import { IProject } from '@/lib/myInterface'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectContainerProps {
  project: IProject
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({project}) => {
  return (
    <div className='border border-b-2 lg:border-b-4 border-zinc-900 mt-2 rounded-2xl bg-zinc-50'>
      {/* Title */}
      <h1 className='bg-lime-200 pl-2 p-1 sm:p-2 text-zinc-800 text-sm sm:text-base font-medium sm:font-semibold flex justify-start rounded-t-2xl border-zinc-900'>{project.title}</h1>
      {/* Content */}
      <div className='p-2 md:p-6 text-xs flex flex-col gap-3'>
        <Image src={project.media} width={400} alt={project.title} />
        <ul className='flex text-xl sm:text-2xl gap-2 text-zinc-800'>
          {(project.urls).map((url, index) => {return(
            <li key={index} className='p-[2px] px-[6px] rounded-xl hover:text-3xl border-zinc-900'><Link href={url.url} target="_blank"><FontAwesomeIcon icon={url.icon}/></Link></li>
          )})}
        </ul>
        <p className='text-[10px] sm:text-xs'>{project.projectDescription[0]}</p>
        <ul className='flex flex-wrap gap-1 sm:gap-2 text-blue-800'>
          {(project.tech).map((tech, index) => {return (
            <li key={index} className='p-1 px-2 text-[8px] sm:text-[10px] sm:px-3 rounded-full bg-indigo-50'>{tech}</li>
          )})}
        </ul>
      </div>
    
    </div>
  )
}

export default ProjectContainer