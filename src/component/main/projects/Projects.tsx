
import { useState } from 'react';
import { PrejectVideoDetail, ProjectVideoDetailContainer, ProjectsContainer, ProjectsTrailContainer } from '../../../style/main/projects'
import ProjectTrainCart from './ProjectTrainCart'
import ReactPlayer from 'react-player/lazy';
import "swiper/css";
import "swiper/css/scrollbar";

function Projects() {
  const arr = [
    {
      projectNameValue: 'DDuBiDuBab',
      projectVideoURL: '/video/DDuBiDuBab.mp4',
      projectWidth: '30%',
      gitHubLink: 'https://github.com/codestates-seb/seb42_main_024',
      homePageLink: 'http://mainprojects4.s3-website.ap-northeast-2.amazonaws.com/',
      projectDetailTitle: '뚜비두밥 프로젝트',
    },
    {
      projectNameValue: 'Carrot_Project',
      projectVideoURL: '/video/carrot_project.mp4',
      gitHubLink: 'https://github.com/kirby-project-2023/carrot_project',
      homePageLink: 'https://kirby-project-2023.github.io/carrot_project/#/',
      projectDetailTitle: '당근 프로젝트',
    }, {
      projectNameValue: 'StackOverFlow',
      projectVideoURL: '/video/erroritOverflow.mp4',
      gitHubLink: 'https://github.com/kirby-project-2023/carrot_project',
      homePageLink: 'https://kirby-project-2023.github.io/carrot_project/#/',
      projectDetailTitle: '당근 프로젝트',
    }]
  const [openVideoDetail, setOpenVideoDetail] = useState(null)
  return (
    <ProjectsContainer id='projects'>
      <ProjectsTrailContainer>
        {arr.map((e) => {
          return <ProjectTrainCart projectNameValue={e.projectNameValue} projectVideoURL={e.projectVideoURL} projectWidth={e.projectWidth} gitHubLink={e.gitHubLink} homePageLink={e.homePageLink} setOpenVideoDetail={setOpenVideoDetail}></ProjectTrainCart>
        })}
      </ProjectsTrailContainer>
      {
        openVideoDetail !== null ? (
          <ProjectVideoDetailContainer onClick={() => { setOpenVideoDetail(null) }}>
            <ReactPlayer
              url={openVideoDetail}
              width='90%'
              height='90%'
              controls={true}       // 플레이어 컨트롤 노출 여부
              light={false}         // 플레이어 모드
            ></ReactPlayer>
          </ProjectVideoDetailContainer>
        ) : null
      }
    </ProjectsContainer>
  )
}

export default Projects