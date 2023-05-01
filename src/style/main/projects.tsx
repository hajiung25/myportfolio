import styled from "styled-components";

export const ProjectsContainer = styled.div`
     width: 100%;
     height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
`

export const ProjectsTrailContainer = styled.div`
     width: 90%;
     height: 90%;
     display: flex;
     padding: 20px 0;
     border-top: 5px double white;
     border-bottom: 5px double white;
     position: relative;
`

interface ProjectDetailPropsType {
     isOpenProjectDetail: boolean
}

export const ProjectDetailContainer = styled.div<ProjectDetailPropsType>`
     width: ${props => props.isOpenProjectDetail ? '100%' : '0'};
     height: 100%;
     position: absolute;
     top: 0;
     left: 0;
     background-color: #fff;
     z-index: 20;
     transition: all 0.5s;
     .mySwiper{
          height: 100%;
          .swiper-wrapper{
               height: 100%;
               .swiper-slide{
                    height: 100%;
               }
          }
     }
`

export const ProjectVideoDetailContainer = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     z-index: 10000;
     width: 100vw;
     height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
     background-color: rgba(0,0,0,0.7);
`

export const PrejectVideoDetail = styled.video`
     width: 90%;
     height: 90%;
     border: 2px solid black;
`