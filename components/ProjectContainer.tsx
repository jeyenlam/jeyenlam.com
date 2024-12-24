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
    <div className='mt-2 rounded-xl'>
      {/* Title */}
      <h1 className='bg-indigo-400 pl-2 p-1 sm:p-2 text-slate-950 text-sm sm:text-base font-medium sm:font-semibold flex justify-start rounded-t-xl'>{project.title}</h1>
      {/* Content */}
      <div className='border border-indigo-400 p-2 md:p-6 text-xs flex flex-col gap-3'>
        <Image src={project.media} width={400} alt={project.title} />
        <ul className='flex text-xl sm:text-2xl gap-2 text-indigo-300'>
          {(project.urls).map((url, index) => {return(
            <li key={index} className='p-[2px] px-[6px] rounded-xl hover:text-3xl'><Link href={url.url} target="_blank"><FontAwesomeIcon icon={url.icon}/></Link></li>
          )})}
        </ul>
        <p className='text-[10px] sm:text-xs text-indigo-300'>{project.projectDescription[0]}</p>
        <ul className='flex flex-wrap gap-1 sm:gap-2 text-indigo-400'>
          {(project.tech).map((tech, index) => {return (
            <li key={index} className='p-1 px-2 text-[8px] sm:text-[10px] sm:px-3 rounded-full bg-slate-900 opacity-80'>{tech}</li>
          )})}
        </ul>
      </div>
    
    </div>
  )
}

export default ProjectContainer