import styled from 'styled-components'

export const MainContainer = styled.div`
    width: calc(100vw - 150px) ;
    height: 100%;
    background-color: var(--color3);
    position: absolute;
    right: 0;
    @media (max-width: 768px) {
        width: 100vw;
    }
`
