import React, { useEffect, useRef, useState } from 'react'
import { SkillsBallContainer, SkillsContainer, SkillsTextContainer, SkillsTextMain, SkillsTextTitle } from '../../../style/main/skills'
import SkillsBall from './SkillsBall'
import { useSelector } from 'react-redux'
import { BrowserSizeState, OnScrollState } from '../../../redux/reducers/reducer'

function Skills() {
  const targetsRef = useRef<any>([]); // 여러 요소들에 대한 참조를 배열로 관리
  const skillmap = [{
    key: '1',
    contents: ['HTML', 'CSS', 'Javascript', 'React', '', 'Typescript'],
    contentDetail: [
      'HTML5를 습득하였으며, semantic tag를 적절히 사용하여 시멘틱한 HTML 문서를 작성할 수 있습니다.',
      'CSS3를 습득하였으며, 반응형 웹과 Transition, Animation을 활용한 인터렉티브한 디자인을 구현할 수 있습니다.',
      'ES6 이상의 최신 문법을 사용하며 라이브러리 활용과 기능성 상호 작용에 익숙해 여러 기능들을 구현할 수 있습니다.',
      '컴포넌트를 기반으로 아키텍처를 이해하고, 컴포넌트 간의 전달되는 각 상태들을 효과적으로 관리 할 수 있습니다.',
      '',
      '정적 타입 시스템을 기반으로 동작하는 Typescript의 개념을 이해하고, 타입 안전성을 유지하며 코드를 작성하는 방법을 숙달했습니다.'],
    imgs: ['/img/html.png', '/img/css.png', '/img/js.png', 'img/react.webp', '', '/img/ts.png' ],
    cubePosition: { top: '15%', left: '30%' },
    cubeSize: 200,
    defaultPosition: { x: 25, y: 25 }
  },
  {
    key: '1',
    contents: ['Redux', 'Redux-toolkit', '', 'styled-component', '', 'Axios'],
    contentDetail: [
      'React의 컴포넌트, 상태 관리, 생명주기 메서드 등의 기본 개념을 이해하여, React 컴포넌트에서 Redux를 사용하는 방법을 익혔습니다.',
      'Redux의 비효율적인 보일러 플레이트 코드에 대해 이해하고, 전역 상태 관리와 비동기 API 처리를 할 수 있습니다.',
      '',
      'CSS-in-JS의 개념을 이해하고, 컴포넌트 디자인과 props를 통한 스타일링 조건부 처리, 그에 따른 메모리 최적화 방법을 이해하고 있습니다',
      '',
      'HTTP 메서드(GET, POST, PUT, DELETE 등), 요청/응답 헤더, 바디 등을 이해하며 Promise의 then, catch 등의 메서드와 await ascyc 함수를 능숙하게 다룰 수 있습니다.'],
    imgs: ['/img/redux.svg','/img/reduxToolkit.png','','/img/styledComponent.jpg','','/img/axios.jpg'],
    cubePosition: { top: '40%', left: '60%' },
    cubeSize: 250,
    defaultPosition: { x: 50, y: 30 }
  },
  {
    key: '1',
    contents: ['Git', '', 'Notion', '', 'Github', ''],
    contentDetail: [
      'Git의 작업 흐름 이해할 수 있으며, 팀 전략에 따라 브랜치를 관리하고 전략을 수립할 수 있습니다.',
      '',
      '기록과 협업 용도로 이용하며, 간단한 관계형 페이지 제작하고 운용할 수 있습니다.',
      '',
      'Git의 기초적인 개념과 명령어를 이해하고 있으며, 능숙한 이슈와 프로젝트 관리를 통해 코드 리뷰 및 협업을 진행할 수 있습니다.',
      ''],
    imgs: ['/img/git.png','','/img/notion.png','','/img/github.png',''],
    cubePosition: { top: '60%', left: '20%' },
    cubeSize: 200,
    defaultPosition: { x: -45, y: -70 }
  }]
  const scrollValue = useSelector((state: OnScrollState) => state.onScroll.value)
  const browserSizeValue = useSelector((state: BrowserSizeState) => state.browserSize.size)

  const [containerOpacity, setContainerOpacity] = useState<number>(1)
  const [skillTitle, setSkillTitle] = useState<string>('배움의 끝은 없다')
  const [skillMainText, setSkillMainText] = useState('React를 기반으로 한 프론트엔드 웹 개발과 관련된 스택을 가지고 있으며, 현재 Typescript, Next.js 등 여러 스택을 추가로 공부하고 있습니다.\n\n오른쪽 스킬들을 누르시면 Skill 별 상세 내용을 보실 수 있습니다.')

  useEffect(() => {
    setContainerOpacity((prev)=>{
      const newOpacity = (scrollValue*1.5/browserSizeValue.height)-3
      if(newOpacity < 0){
        return 0
      }else if(newOpacity > 1){
        return 1
      }
      else{
        return newOpacity
      }
    })
  }, [scrollValue, browserSizeValue])

  useEffect(() => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const target = entry.target as HTMLInputElement;
                if (entry.isIntersecting) {
                    if (!target.className.includes('apear'))
                        target.className += ' apear'
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

// 대상 요소들의 참조를 targetsRef.current에 저장
const handleRef = (ref: any) => {
    if (ref !== null && !targetsRef.current.includes(ref)) {
        targetsRef.current.push(ref);
    }
};
  return (
    <SkillsContainer id='skills' containerOpacity={containerOpacity}>
      <SkillsTextContainer>
        <SkillsTextTitle ref={handleRef}>{skillTitle}</SkillsTextTitle>
        <SkillsTextMain ref={handleRef}>{skillMainText}</SkillsTextMain>
      </SkillsTextContainer>
      <SkillsBallContainer>
        {skillmap.map((e) => {
          if(browserSizeValue.width < 768){
            e.cubeSize = 100  
          }
          return (<SkillsBall cubePosition={e.cubePosition} cubeSize={e.cubeSize} contents={e.contents} contentDetail={e.contentDetail} defaultPosition={e.defaultPosition} imgs={e.imgs} setSkillTitle={setSkillTitle} setSkillMainText={setSkillMainText}></SkillsBall>)
        })}
      </SkillsBallContainer>
    </SkillsContainer>
  )
}

export default Skills