import styled from "styled-components";

interface SkillsProps {
     containerOpacity: number
}

export const SkillsContainer = styled.div.attrs<SkillsProps>((props) => ({
     style: {
          opacity: (props.containerOpacity) || 0,
     }
}
)) <SkillsProps>`
     width: 100%;
     height: 100vh;
     display: flex;
     justify-content: space-around;
     align-items: center;
     /* @media (min-width:320px) and (max-width:768px){
          
     } */
`
export const SkillsTextContainer = styled.div`
     width: 40%;
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     p{
          margin-bottom: 40px;
     }
`
export const SkillsTextTitle = styled.h3`
     width: 100%;
     text-align: center;
     font-size: 10rem;
     margin-bottom: 60px;
     transform: translateX(-50px);
     opacity: 0;
     &.apear {
          transform: translateX(0px);
          opacity: 1;
     }
     transition: all 0.8s;
     white-space: pre;
     @media (min-width:320px) and (max-width:2168px){
          font-size: 8rem;
     }
`

export const SkillsBallContainer = styled.div`
     height: 85%;
     width: 45%;
     border-radius: 20px;
     position: relative;
`

export const SkillsTextMain = styled.pre`
     font-size: 4rem;
     display: flex;
     flex-direction: column;
     justify-content: center;
     white-space: pre-wrap;
     word-break: keep-all;
     transform: translateX(-50px);
     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     min-height: 400px;
     opacity: 0;
     transition: all 0.8s;
     &.apear {
          transform: translateX(0px);
          opacity: 1;
     }
     
`