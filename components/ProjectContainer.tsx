import React from 'react'
import { IProject } from '@/lib/myInterface'

interface ProjectContainerProps {
  project: IProject
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({project}) => {
  return (
    <div className='w-96 h-96 border-2 border-black'>{project.title}</div>
  )
}

export default ProjectContainer