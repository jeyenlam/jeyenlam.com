import React from 'react'
import { IProject } from '@/lib/myInterface'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import image from '@/assets/profile3.png'
import Link from 'next/link'

interface ProjectContainerProps {
  project: IProject
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({project}) => {
  return (
    <div className='border-2 border-b-8 border-zinc-900 mt-2 rounded-2xl bg-zinc-50'>
      <h1 className='bg-lime-200 p-2 text-zinc-900 text-lg font-bold flex justify-start rounded-t-2xl border-zinc-900'>{project.title}</h1>
      <div className='p-2 md:p-6 text-xs flex flex-col gap-3'>
        <Image src={project.media} width={400} alt={project.title} />
        <ul className='flex text-2xl gap-2 text-zinc-900'>
          {(project.urls).map(url => {return(
            <li className='p-[2px] px-[6px] rounded-xl hover:text-3xl border-zinc-900'><Link href={url.url} target="_blank"><FontAwesomeIcon icon={url.icon}/></Link></li>
          )})}
        </ul>
        <p>{project.projectDescription[0]}</p>
        <ul className='flex flex-wrap gap-2 text-blue-800'>
          {(project.tech).map((tech) => {return (
            <li className='p-1 px-3 rounded-lg bg-indigo-50'>{tech}</li>
          )})}
        </ul>
      </div>
    
    </div>
  )
}

export default ProjectContainer