import styled from "styled-components"

export const LoadingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
`

export const LoadingMessageContainer = styled.div<{ delaySecond: number }>`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: ${props => { 
        switch(props.delaySecond){
            case 5 : return 'red';
            case 4 : return 'blue';
            case 3 : return 'green';
            case 2 : return 'black';
            case 1 : return 'yellow';
        }
    }};
    @keyframes slideOutRight {
        0% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0);
        }
        50% {
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 0 100%, 0 100%);
        }
        100% {
            clip-path: polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%);
        }
    }
    animation:slideOutRight 1s cubic-bezier(0.215, 0.610, 0.355, 1);
    animation-delay: ${props => props.delaySecond || 0}s;
    animation-fill-mode: forwards;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`

export const LoadingMessageIM = styled.div`
    font-size: 150px;
    font-weight: 700;
    text-align: center;
    width: 500px;
`

export const LoadingMessageWhoAmI = styled.div`
    width: 45vw;
    height: 45vw;
    max-width: 1000px;
    max-height: 1000px;
    min-width: 400px;
    min-height: 400px;
    font-size: 150px;
    font-weight: 700;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`