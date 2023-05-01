import React, { useEffect, useRef, useState } from 'react'
import { FrontSkill, BackSkill, DownSkill, LeftSkill, RightSkill, UpSkill, SkillCube, Skill, SikillImg, SkillText } from '../../../style/main/skillsball'

interface PopsType {
  cubePosition: { top?: string, bottom?: string, left?: string, right?: string }
  cubeSize: number,
  contents: string[],
  contentDetail: string[],
  defaultPosition: { x: number, y: number },
  imgs: string[],
  setSkillTitle: (e: string) => void,
  setSkillMainText: (e: string) => void,
}

function SkillsBall({ cubePosition, cubeSize, contents, contentDetail, defaultPosition, imgs, setSkillTitle, setSkillMainText }: PopsType) {
  const targetsRef = useRef<any>([]); // 여러 요소들에 대한 참조를 배열로 관리
  const [startdrag, setStartdrag] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
  const [mouseMovePosition, setMouseMovePosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
  const [mouseMoveControlPosition, setMouseMoveControlPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
  const cubeMoveHandler = (event: any) => {
    if (startdrag.x === 0 && startdrag.y === 0) {
      return;
    } else {
      setMouseMovePosition((prev) => {
        let newPosX = mouseMoveControlPosition.x + startdrag.x - event.clientX
        let newPosY = mouseMoveControlPosition.y + startdrag.y - event.clientY
        if (newPosX > 91 || newPosX < -91) {
          newPosX = prev.x
        }
        if (newPosY > 360 || newPosY < -360) {
          newPosY = prev.y
        }
        return { x: newPosX, y: newPosY }
      })
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMouseMovePosition(defaultPosition)
            setMouseMoveControlPosition(defaultPosition)
          }
        });
      },
      options
    );

    targetsRef?.current.forEach((target: any) => {
      observer.observe(target); // Intersection Observer를 대상 요소에 등록
    });

    return () => {
      targetsRef?.current.forEach((target: any) => {
        observer.unobserve(target);
      });
    };
  }, []);


  const handleRef = (ref: any) => {
    if (ref !== null && !targetsRef.current.includes(ref)) {
      targetsRef.current.push(ref);
    }
  };

  const SkillNamingHandler = (skillIndexNumber: number) => {
    if (contents[skillIndexNumber] !== '') {
      setSkillTitle(contents[skillIndexNumber])
      setSkillMainText(contentDetail[skillIndexNumber])
    }
  }

  return (
    <SkillCube
      ref={handleRef}
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
      onMouseLeave={() => {
        setStartdrag({ x: 0, y: 0 })
        setMouseMoveControlPosition(mouseMovePosition)
      }}
      mouseMovePosition={mouseMovePosition}
      cubePosition={cubePosition}
      cubeSize={cubeSize}
    >
      <FrontSkill cubeSize={cubeSize}>
        <SkillText>{contents[0]}</SkillText>
        <SikillImg src={imgs[0]} alt='html' onClick={() => {
          SkillNamingHandler(0)
        }}></SikillImg>
      </FrontSkill>
      <BackSkill cubeSize={cubeSize}>
        <SkillText>{contents[1]}</SkillText>
        <SikillImg src={imgs[1]} alt='html' onClick={() => {
          SkillNamingHandler(1)
        }}></SikillImg>
      </BackSkill>
      <LeftSkill cubeSize={cubeSize}>
        <SkillText>{contents[2]}</SkillText>
        <SikillImg src={imgs[2]} alt='html' onClick={() => {
          SkillNamingHandler(2)
        }}></SikillImg>
      </LeftSkill>
      <RightSkill cubeSize={cubeSize}>
        <SkillText>{contents[3]}</SkillText>
        <SikillImg src={imgs[3]} alt='html' onClick={() => {
          SkillNamingHandler(3)
        }}></SikillImg>
      </RightSkill>
      <UpSkill cubeSize={cubeSize}>
        <SkillText>{contents[4]}</SkillText>
        <SikillImg src={imgs[4]} alt='html' onClick={() => {
          SkillNamingHandler(4)
        }}></SikillImg>
      </UpSkill>
      <DownSkill cubeSize={cubeSize}>
        <SkillText>{contents[5]}</SkillText>
        <SikillImg src={imgs[5]} alt='html' onClick={() => {
          SkillNamingHandler(5)
        }}></SikillImg>
      </DownSkill>
    </SkillCube>
  )
}

export default SkillsBall