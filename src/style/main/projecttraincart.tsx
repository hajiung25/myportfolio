import styled from "styled-components";

interface ProjectTainPropsType {
    projectWidth?:string,
}

export const ProjectTrainCartContainer = styled.div<ProjectTainPropsType>`
    width: 30rem;
    height: 100%;
    transition: width 1s;
    position: relative;
    border: 3px solid white;
    border-radius: 20px;
    overflow: hidden;
    :hover{
        width: ${props => props.projectWidth || '30%'};
        transition: width 1s;
    }
    margin-right: 10px;
`

export const ProjectCartMainContainer = styled.div`
    width: 100%;
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid white;
`

export const ProjectName = styled.div`
    font-size: 10rem;
    writing-mode: vertical-rl;
    color: rgba(255,255,255,0.8);
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    height: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
`

export const ProjectVideo = styled.video`
    height: 100%;
    cursor: pointer;
`

export const ProjectTailContainer = styled.div`
    width: 100%;
    height: 5%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const GithubURLimg = styled.div`
    font-size: 3rem;
    margin-right: 50px;
`   

export const WebsiteURLimg = styled.div`
    font-size: 3rem;
`

export const ProjectDetailBtn = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: rgba(0,0,0,0.6);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12rem;
    cursor: pointer;
`