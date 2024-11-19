import React from 'react'
import { IProject } from '@/lib/myInterface'

interface ProjectContainerProps {
  project: IProject
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({project}) => {
  return (
    <div className='border-2 border-b-8 border-black'>{project.title}</div>
  )
}

export default ProjectContainer