import React, { useState } from 'react'
import { FrontSkill, BackSkill, DownSkill, LeftSkill, RightSkill, UpSkill, SkillCube, Skill } from '../../../style/main/skillsball'

interface PopsType {
  cubePosition:{top?:string, bottom?:string, left?:string, right?:string}
  cubeSize:number,
  contents: string[],
}

function SkillsBall({cubePosition,cubeSize, contents}:PopsType) {
  const [startdrag, setStartdrag] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
  const [mouseMovePosition, setMouseMovePosition] = useState<{ x: number, y: number }>({ x: 25, y: 25 })
  const [mouseMoveControlPosition, setMouseMoveControlPosition] = useState<{ x: number, y: number }>({ x: 25, y: 25 })
  const cubeMoveHandler = (event:any) => {
    if (startdrag.x === 0 && startdrag.y === 0) {
      return;
    } else {
      setMouseMovePosition((prev)=>{
        let newPosX= mouseMoveControlPosition.x + startdrag.x-event.clientX 
        let newPosY = mouseMoveControlPosition.y + startdrag.y-event.clientY
        if(newPosX>90 || newPosX < -90){
          newPosX = prev.x
        }
        if(newPosY > 360 || newPosY < -360){
          newPosY = 0
        }
        return {x:newPosX, y:newPosY}
      })
    }
  }

  return (
    <SkillCube
      onMouseDown={(event) => {
        setStartdrag({ x: event.clientX, y: event.clientY })
      }}
      onMouseMove={(event) => {
        cubeMoveHandler(event)
      }}
      onMouseUp={() => {
        setStartdrag({ x: 0, y: 0 })
        setMouseMoveControlPosition(mouseMovePosition)
      }}
      onMouseLeave={()=>{
        setStartdrag({ x: 0, y: 0 })
        setMouseMoveControlPosition(mouseMovePosition)
      }}
      mouseMovePosition={mouseMovePosition}
      cubePosition={cubePosition}
      cubeSize={cubeSize}
    >
      <FrontSkill cubeSize={cubeSize}>{contents[0]}</FrontSkill>
      <BackSkill cubeSize={cubeSize}>{contents[1]}</BackSkill>
      <LeftSkill cubeSize={cubeSize}>{contents[2]}</LeftSkill>
      <RightSkill cubeSize={cubeSize}>{contents[3]}</RightSkill>
      <UpSkill cubeSize={cubeSize}>{contents[4]}</UpSkill>
      <DownSkill cubeSize={cubeSize}>{contents[5]}</DownSkill>
    </SkillCube>
  )
}

export default SkillsBall