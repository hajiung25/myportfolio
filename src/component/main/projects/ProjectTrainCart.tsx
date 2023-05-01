import React, { useState, useRef } from 'react'
import { BsGithub, BsTv } from 'react-icons/bs';
import { ProjectTrainCartContainer, ProjectName, ProjectVideo, ProjectCartMainContainer, ProjectTailContainer, GithubURLimg, WebsiteURLimg, ProjectDetailBtn, } from '../../../style/main/projecttraincart'

interface ProjectPropsType {
  projectNameValue: string,
  projectVideoURL: string,
  projectWidth?: string,
  gitHubLink?: string,
  homePageLink?: string,
  setOpenVideoDetail: (e:any)=>void,
}

function ProjectTrainCart({ projectNameValue, projectVideoURL, projectWidth, gitHubLink, homePageLink, setOpenVideoDetail }: ProjectPropsType) {

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
      onMouseLeave={handleMouseLeave}
      projectWidth={projectWidth}>
      <ProjectCartMainContainer>
        <ProjectVideo
          onMouseEnter={handleMouseEnter}
          onClick={()=>{setOpenVideoDetail(projectVideoURL)}}
          ref={videoRef}
          src={projectVideoURL} />
        {isHover ? null : (
          <ProjectName
            onMouseEnter={() => { setIsHover(true) }}>
            {projectNameValue}
          </ProjectName>
        )}
      </ProjectCartMainContainer>
      <ProjectTailContainer
      >
        <GithubURLimg><a href={gitHubLink} target='_blank' rel='noopener noreferrer'><BsGithub /></a></GithubURLimg>
        <WebsiteURLimg><a href={homePageLink} target='_blank' rel='noopener noreferrer'><BsTv></BsTv></a></WebsiteURLimg>
      </ProjectTailContainer>
    </ProjectTrainCartContainer>
  )
}

export default ProjectTrainCart