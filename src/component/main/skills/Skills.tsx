import React from 'react'
import { SkillsBallContainer, SkillsContainer, SkillsTextContainer } from '../../../style/main/skills'
import SkillsBall from './SkillsBall'

function Skills() {
  const skillmap = [{
    key:'1',
    contents: ['HTML','CSS','Javascript','React','Typescript',''],
    cubePosition: {top:'15%', left:'30%'},
    cubeSize: 200
  },
  {
    key:'1',
    contents: ['Redux','Redux-toolkit','Axios','styled-component','',''],
    cubePosition: {top:'40%', left:'60%'},
    cubeSize: 250
  },
  {
    key:'1',
    contents: ['Git','Github','Notion','','',''],
    cubePosition: {top:'60%', left:'20%'},
    cubeSize: 200
  }]
  return (
    <SkillsContainer id='skills'>
      <SkillsTextContainer></SkillsTextContainer>
      <SkillsBallContainer>
        {skillmap.map((e)=>{
          return (<SkillsBall cubePosition={e.cubePosition} cubeSize={e.cubeSize} contents={e.contents}></SkillsBall>)
        })}
      </SkillsBallContainer>
    </SkillsContainer>
  )
}

export default Skills