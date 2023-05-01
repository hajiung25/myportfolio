import styled from "styled-components";

interface CubeType {
    mouseMovePosition:{x:number, y:number}
    cubePosition:{top?:string, bottom?:string, left?:string, right?:string}
    cubeSize: number
}

export const SkillCube = styled.div.attrs<CubeType>((props)=>({
    style : {
        position: 'absolute',
        transform: `rotateY(${-props.mouseMovePosition.x}deg) rotateX(${props.mouseMovePosition.y}deg)`,
        transformStyle: 'preserve-3d',
        width: `${(props.cubeSize || '100')}px`,
        height: `${(props.cubeSize || '100')}px`,
        top:  props.cubePosition.top,
        bottom:  props.cubePosition.bottom,
        left:  props.cubePosition.left,
        right: props.cubePosition.right,
    }
}))<CubeType>`
    cursor: move;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    &.apear {
        transform: rotateX(30deg) rotateY(20deg);
    }
    transition: all 0.5s;
`

interface SkillType {
    cubeSize: number
}

export const Skill = styled.div.attrs<SkillType>((props)=>({
    style : {
        width: `${(props.cubeSize || '100')}px`,
        height: `${(props.cubeSize || '100')}px`,
    }
}))<SkillType>`
    position: absolute;
    background-color: var(--color2);
    color: rgba(255,255,255);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 3.5rem;
    font-weight: 700;
    border: 2px solid rgba(255,255,255);
    transform-style: preserve-3d;
    &.none{
        display: none;
    }
`

export const FrontSkill = styled(Skill).attrs<{cubeSize: number}>((props=>({
    style : {
        transform: `translateZ(${props.cubeSize/2}px)`
    }
})))`
    width: 100%;
    height: 100%;
`
export const BackSkill = styled(Skill).attrs<{cubeSize: number}>((props=>({
    style : {
        transform: `translateZ(${-props.cubeSize/2}px) rotateX(180deg)`
    }
})))`
    width: 100%;
    height: 100%;
`

export const LeftSkill = styled(Skill).attrs<{cubeSize: number}>((props=>({
    style : {
        transform: `translateX(${-props.cubeSize/2}px) rotateY(90deg) rotateY(180deg)`
    }
})))`
    width: 100%;
    height: 100%;
`

export const RightSkill = styled(Skill).attrs<{cubeSize: number}>((props=>({
    style : {
        transform: `translateX(${props.cubeSize/2}px) rotateY(90deg)`
    }
})))`
    width: 100%;
    height: 100%;
`

export const UpSkill = styled(Skill).attrs<{cubeSize: number}>((props=>({
    style : {
        transform: `translateY(${-props.cubeSize/2}px) rotateX(90deg)`
    }
})))`
    width: 100%;
    height: 100%;
`

export const DownSkill = styled(Skill).attrs<{cubeSize: number}>((props=>({
    style : {
        transform: `translateY(${props.cubeSize/2}px) rotateX(90deg) rotateX(180deg)`
    }
})))`
    width: 100%;
    height: 100%;
`

export const SikillImg = styled.img`
    position: absolute;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    -webkit-user-drag: none;
    z-index: 0;
    opacity: 0.3;
    transform: translateZ(1px);
    :hover{
        transform: translateZ(20px);
        opacity: 1;
    }
    transition: all 0.5s;
`

export const SkillText = styled.div`
    position: absolute;
    z-index: 1;
    transition: all 0.5s;
`