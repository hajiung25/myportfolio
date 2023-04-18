import styled from "styled-components";

interface textImProps {
    scrollMove: number
}

export const ReactWordcloudContainer = styled.div.attrs<textImProps>((props) => ({
        style : {
            transform: `translateY(${props.scrollMove}%)` || 'translate(0)',
            opacity: (props.scrollMove * -2 < 30 ? 1 : 1 + props.scrollMove * 0.05) || 0,
        }
    })) <textImProps>`
    width: 75%;
    height: 45vw;
    min-width: 400px;
    min-height: 400px;
    transition: all 1s ;
`