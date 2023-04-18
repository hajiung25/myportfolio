import styled from "styled-components";

export const ProjectTrainCartContainer = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: width 1s;
    position: relative;
    border: 1px solid white;
    overflow: hidden;
    :hover{
        width: 32%;
        transition: width 1s;
    }
`

export const ProjectName = styled.div`
    font-size: 10rem;
    writing-mode: vertical-rl;
    color: rgba(255,255,255,0.2);
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    &.none{
        display: none;
    }
`

export const ProjectContribution = styled.div`
    border: 1px solid red;
    width: 70%;
    height: 60%;
`

export const ProjectVideo = styled.video`
    position: absolute;
    height: 100%;
`

export const ProjectDetailContainer = styled.div`
    width: 90%;
    height: 90%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 3;
`
export const ProjectDetailName = styled.div`
    width: 70%;
    height: 50px;
    border: 2px solid black;
    position: absolute;
    top: 10%;
`



export const ProjectConnectBox = styled.div`
    position: absolute;
    top: 85%;
    width: 70%;
    height: 50px;
    border: 2px solid black;
`

export const GithubURLimg = styled.img`

`

export const WebsitURLimg = styled.img`
    
`