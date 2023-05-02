import styled from "styled-components";

interface HistoryBranchProps {
    isTop: boolean,
}

export const HistoryMiddleLine = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    width: 100%;
    height: 10px;
    background-color: #fff;
    @media (max-width:768px){
        height: 8px;
    }
`

export const HistoryBranchContainer = styled.div`
    width: 30%;
    height: 100%;
    position: relative;
    @media (max-width:768px){
        width: 33%;
    }
`

export const HistoryBranch = styled.div<HistoryBranchProps>`
    height: 25%;
    width: 10px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: ${porps => porps.isTop ? '50%' : '25%'};
    @media (max-width:768px){
        width: 8px;
    }
`

export const HistoryTextContainer = styled.div<HistoryBranchProps>`
    width: 90%;
    height: 25%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: ${porps => porps.isTop ? '75%' : '0'};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const HistoryTitleText = styled.div`
    font-size: 3rem;
    word-break: keep-all;
    white-space: pre;
`
export const HistoryDays = styled.div`
    font-size: 2rem;
    height: 30%;
`

export const HistoryDetailBall = styled.div<HistoryBranchProps>`
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: ${porps => porps.isTop ? '70%' : '20%'};
    transition: all 0.5s;
    @media (max-width:768px){
        width: 25px;
        height: 25px;
    }
`