import styled from 'styled-components'

export const HeaderContainer = styled.div`
    position: fixed;
    height: 100vh;
    width: 150px;
    background-color : transparent;
    display: flex;
    align-items: center;
    z-index: 100;
    background-color: transparent;
    color: rgba(255,255,255,0.5);
    border: 1px solid rgba(255,255,255,0.1);
    transition: background-color 0.2s ease-in-out, color 0.5s ease-in-out;
    :hover{
        background-color: var(--color1);
        color: rgba(255,255,255);
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const HeaderMainContianer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const HeaderLinkText = styled.div`
    flex-grow:1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
`