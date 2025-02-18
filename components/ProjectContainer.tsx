import React from 'react'
import { IProject } from '@/lib/myInterface'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectContainerProps {
  project: IProject
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({project}) => {
  return (
    <div className='project-card  flex-1'>   
      <div className='p-2 flex flex-col justify-evenly gap-3'>
        {/* Title */}
        <Link href={project.urls[0].url} target="_blank">
          <h2 className='text-base text-[var(--primary)] font-medium'>{project.title}</h2>
        </Link>
        {/* Description */}
        <p className='text-xs text-[var(--primary)]'>{project.projectDescription[0]}</p>
        {/* Tech */}
        <ul className='flex flex-wrap gap-2'>
          {(project.tech).map((tech, index) => {return (
            <li key={index} className='text-[#e05485] bg-[#fcf3f7] border-[#fae9f1] border py-1 px-2 rounded-full text-xs'>{tech}</li>
          )})}
        </ul>
      </div>

      <Link href={project.urls[0].url} target="_blank" className='hidden sm:block absolute bottom-full group-hover:translate-y-64 duration-300 border'>
        <Image src={project.media} alt={project.title} className='lg:w-96 lg:h-64 relative'/>
      </Link>
    </div>
  )
}

export default ProjectContainer