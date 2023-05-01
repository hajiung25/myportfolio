import styled from "styled-components";

export const IntroduceDetailContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const IntroduceTextContainer = styled.div`
    width: 100%;
    display: flex;
    height: 50%;
    justify-content: space-around;
`


export const DetailTitleContainer = styled.div`
    min-width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const DetailTitle = styled.h3`
    display: block;
    font-weight: 200;
    margin-left: 30px;
    font-size: 9.5rem;
    transform: translateY(50%);
    opacity: 0;
    &.isOn{
        transform: translateY(0);
        opacity: 1;
        transition: all 1s;
        transition-delay: 0.3s;
    }
    white-space: pre;
`
export const DetailTitleHi = styled(DetailTitle)``

export const DetailTitleGrowing = styled(DetailTitle)`
    &.isOn{
    transition-delay: 0.5s;
    }
`
export const DetailTitleMe = styled(DetailTitle)`
    &.isOn{
    transition-delay: 0.7s;
    }
`
export const DetailMainContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const DetailMainText= styled.div`
    width: 80%;
    height: 80%;
    font-size: 2.7rem;
    font-weight: 100;
    word-break: keep-all;
    line-height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{ 
        margin-bottom: 5rem;
    }
    span{
        font-weight: 700;
        transition: all 1s;
    }
    span:hover{
        text-decoration: line-through;
        transform: translateY(20px);
        color: #ab3a3a;
    }
    transform: translateX(25%);
    opacity: 0;
    &.isOn{
        transform: translateX(0);
        opacity: 1;
        transition: all 1s;
        transition-delay: 1s;
    }
`
export const HistoryDetailContainer = styled.div`
    width: 100%;
    opacity: 1;
    height: 50%;
    display: flex;
    position: relative;
    clip-path: polygon(0 49.5%, 100% 49.5%, 100% 50.5%, 0 50.5%);
    &.ison{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
    transition: all 1s;
`