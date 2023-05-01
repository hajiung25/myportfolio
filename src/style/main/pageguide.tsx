import styled from "styled-components";

interface GuideType {
    guideOpacity: number,
    guideTranslate: number,
    guidePosition: {},
    guideStyle?: {[key: string]: string}
}

export const PageGuideContainer = styled.div`
    width: 100%;
    height: 50vh;
    position: relative;
    overflow: hidden;
    @media (min-width:320px) and (max-width:1440px){
        height: 30vh
    }
`

export const PageGuideWord = styled.div.attrs<GuideType>((props) => ({
    style : {
        opacity: (props.guideOpacity) || 1,
        bottom: `${props.guideTranslate}%`,
        ...props.guidePosition ,
        color: props.guideStyle ? props.guideStyle.color : 'white',
        textShadow: props.guideStyle ? (props.guideStyle.textShadow || 'none') : 'none',
        transform: props.guideStyle ? (props.guideStyle.transform || 'none') : 'none',
    }
    }
    ))<GuideType>`
    font-size: 20rem;
    position: absolute;
    bottom: -8rem;
    font-weight: 700;
`