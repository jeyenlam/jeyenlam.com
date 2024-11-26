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
    <div className='border-2 border-b-8 border-zinc-900 mt-2 rounded-lg bg-slate-50'>
      <h1 className='pl-2 bg-lime-200 py-1 text-zinc-900 text-lg font-bold flex border-b-2 rounded-t-md border-zinc-900'>{project.title}</h1>
      <div className='p-4 sm:p-6 text-xs flex flex-col gap-3'>
        <Image src={project.media} width={400} alt={project.title}/>
        <ul className='flex text-2xl gap-2 text-zinc-900'>
          {(project.urls).map(url => {return(
            <li className='p-[2px] px-[6px] rounded-lg border hover:bg-lime-200 border-zinc-900 bg-indigo-400'><Link href={url.url} target="_blank"><FontAwesomeIcon icon={url.icon}/></Link></li>
          )})}
        </ul>
        <p>{project.projectDescription[0]}</p>
        <ul className='flex flex-wrap gap-2 text-blue-800'>
          {(project.tech).map((tech) => {return (
            <li className='p-1 px-3 rounded-sm bg-blue-50'>{tech}</li>
          )})}
        </ul>
      </div>
    
    </div>
  )
}

export default ProjectContainer