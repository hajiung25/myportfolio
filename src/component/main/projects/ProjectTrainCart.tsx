import React, { useState, useRef } from 'react'
import { ProjectTrainCartContainer, ProjectContribution, ProjectName, ProjectVideo, ProjectDetailContainer, ProjectConnectBox, ProjectDetailName } from '../../../style/main/projecttraincart'

function ProjectTrainCart() {
  const [isOnClick, setIsOnClick] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const videoRef = useRef<any>(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsHover(false)
  };
  return (
    <ProjectTrainCartContainer
      onClick={() => { setIsOnClick(true) }}
      onDoubleClick={() => { setIsOnClick(false) }}>
      {isOnClick ?
        <ProjectDetailContainer>
          <ProjectDetailName></ProjectDetailName>
          <ProjectContribution></ProjectContribution>
          <ProjectConnectBox></ProjectConnectBox>
        </ProjectDetailContainer> :
        <>

        </>
      }
      <ProjectVideo
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={videoRef}
        src='/video/carrot_project.mp4' />
      <ProjectName onMouseEnter={() => { setIsHover(true) }} className={isHover ? 'none' : ''}>Carrot_Project</ProjectName>
    </ProjectTrainCartContainer>
  )
}

export default ProjectTrainCart