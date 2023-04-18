import styled from "styled-components";

export const SlideTrailContainer = styled.div`
    position: absolute;
    width: 1000px;
    height: 200px;
    top: 10%;
    left: 10%;
    transform: translate(-50%) rotate(-40deg) ;
    display: flex;
    justify-content: center;
    overflow: hidden;
    color: rgba(255,255,255,0.5);
`

export const SlideTrailWord = styled.div`
    flex-grow: 1;
    margin: 0 50px;
    height: 100%;
    font-size: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    @keyframes trailWord {
        0%{
            transform: translate(-40%);
        }
        100%{
            transform: translate(100%);
        }
    }
    animation: trailWord 12s infinite linear;
`