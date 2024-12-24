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
    <div className='rounded-xl text-indigo-300'>   
      <div className='border-indigo-400 p-2 md:p-6 text-xs flex flex-col gap-3'>
        {/* Title */}
        <h1 className='text-sm'>{project.title}</h1>
        {/* <Image src={project.media} width={400} alt={project.title} className='opacity-70'/> */}
        {/* Content */}
        <ul className='flex text-xl sm:text-2xl gap-2 text-indigo-300'>
          {(project.urls).map((url, index) => { return(
            <li key={index} className='px-[6px] rounded-xl hover:text-indigo-500'>
              <Link href={url.url} target="_blank"><FontAwesomeIcon icon={url.icon}/></Link>
            </li>
          )})}
        </ul>
        <p className='text-[10px] sm:text-xs text-indigo-200'>{project.projectDescription[0]}</p>
        <ul className='flex flex-wrap sm:gap-2 text-indigo-400'>
          {(project.tech).map((tech, index) => {return (
            <li key={index} className='p-1 px-2 text-[8px] sm:text-[10px] sm:px-3 rounded-full bg-zinc-800 opacity-80 text-indigo-400 text-opacity-50'>{tech}</li>
          )})}
        </ul>
      </div>
    
    </div>
  )
}

export default ProjectContainer