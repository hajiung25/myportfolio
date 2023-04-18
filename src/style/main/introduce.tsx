import styled from "styled-components";

export const IntroduceContainer = styled.div`
    position: relative;
    width: 100%;
    height: 220vh;
`

export const IntroduceMainHomeContainer = styled.div`
    position: relative;
    width: 100%;
    height: 110vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    z-index: 10;
    overflow: hidden;
`


interface textImProps {
    scrollMove: number
}

export const TextIm = styled.div.attrs<textImProps>((props) => ({
    style : {
        transform: `translateY(${props.scrollMove}%)` || 'translate(0)',
        opacity: (props.scrollMove * -2 < 30 ? 1 : 1 + props.scrollMove * 0.05) || 0,
    }
    }
    ))<textImProps>`
    transition: all 1s ;
    font-size: 150px;
    font-weight: 700;
    text-align: center;
    width: 500px;
    background-color: transparent;
    span:hover{  
    position: relative;
        @keyframes bounce {
            0% {
                top: 0;
                color: white;
            }
            20% {
                top: -5px;
                color: #0575E6
            }
            70% {
                top: -50px;
            }
            90% {
                top: 10px;
            }
            100% {
                top: 0;
                color: #0575E6
            }
        }
        animation: bounce 0.5s forwards;
    }
`

export const NameClickContainer = styled.div`
    width: 70vw;
    height: 85vh;
    position: absolute;
    background-color: rgba(255,255,255);
    transform: scale(0 ,0.01);
    transform-origin: left 52% ;
    transition: transform 0.3s ease-out;
    &.ison {
        @keyframes openIntoduceDetail {
            0% {
                transform: scale(0 ,0.01);
            }
            50% {
                transform: scale(1 ,0.01);
            }
            70% {
                transform: scale(1 ,0.01);
            }
            100% {
                transform: scale(1 ,1);
            }
        }
        animation: openIntoduceDetail 1s forwards;
    }
    @keyframes closeIntoduceDetail {
            0% {
                transform: scale(1 ,1);
            }
            35% {
                transform: scale(1 ,0.01);
            }
            100% {
                transform: scale(0 ,0.01);
            }
        }
        animation: closeIntoduceDetail 1s forwards;
`