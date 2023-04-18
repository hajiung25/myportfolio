import React from 'react'
import { ProjectsContainer, ProjectsTrailContainer } from '../../../style/main/projects'
import ProjectTrainCart from './ProjectTrainCart'

function Projects() {
  const arr = [1,2,3]
  return (
    <ProjectsContainer id='projects'>
      <ProjectsTrailContainer>
        {arr.map(()=>{
          return <ProjectTrainCart></ProjectTrainCart>
        })}
      </ProjectsTrailContainer>
    </ProjectsContainer>
  )
}

export default Projects