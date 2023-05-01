import { MainContainer } from '../style/main/main'
import MouseTrail from '../component/main/MouseTrail';
import Introduce from '../component/main/home/Introduce';
import { useState, useEffect } from 'react';
import Skills from '../component/main/skills/Skills';
import Projects from '../component/main/projects/Projects';
import Contect from '../component/main/contect/Contect';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserSizeState, OnScrollState, SET_BROWSER_SIZE, SET_ON_SCROLL_VALLUE } from '../redux/reducers/reducer';
import PageGuide from '../component/main/PageGuide';

function Main() {
    const scrollValue = useSelector((state: OnScrollState) => state.onScroll.value)
    const browserSizeValue = useSelector((state: BrowserSizeState) => state.browserSize.size)

    const [handleMouseMoveState, setHandleMouseMoveState] = useState<any>({})
    const [skillsGuideOpacity, setSkillsGuideOpacity] = useState<number>(0)
    const [skillsGuideTranslate, setSkillsGuideTranslate] = useState<number>(0)
    const [projectGuideOpacity, setProjectGuideOpacity] = useState<number>(0)
    const [projectGuideTranslate, setProjectGuideTranslate] = useState<number>(0)

    const dispatch = useDispatch()

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler)
            window.removeEventListener("resize", resizeHandler);
        }
    }, [])

    useEffect(()=>{
        const newScroll = (scrollValue / browserSizeValue.height)
        setSkillsGuideOpacity(()=>{
            return (newScroll-1.9)*2.5
        })
        setSkillsGuideTranslate(()=>{
            const newTranslate = 35 * (-(scrollValue / browserSizeValue.height)+2.3)
            if(newTranslate>0){
                return 0
            }else if(newTranslate < -30){
                return -30
            }
            return newTranslate
        })
        setProjectGuideOpacity(()=>{
            return (newScroll-3.4)*2.5
        })
        setProjectGuideTranslate(()=>{
            const newTranslate = 35 * (-(scrollValue / browserSizeValue.height)+3.7)
            if(newTranslate>0){
                return 0
            }else if(newTranslate < -30){
                return -30
            }
            return newTranslate
        })
    },[scrollValue])

    const scrollHandler = () => {
        dispatch(SET_ON_SCROLL_VALLUE(window.scrollY))
    }
    const resizeHandler = () => {
        dispatch(SET_BROWSER_SIZE({width: window.innerWidth, height: window.innerHeight}))
    }

    return (
        <MainContainer
            onMouseMove={(event) => {
                if (handleMouseMoveState.handleMouseMove) handleMouseMoveState.handleMouseMove(event)
            }}>
            <Introduce></Introduce>
            <PageGuide guideOpacity={skillsGuideOpacity} guideTranslate={skillsGuideTranslate} guideText='SKILLS' guidePosition={{right: '50%'}} guideStyle={{transform: 'translateX(50%)'}}></PageGuide>
            <Skills></Skills>
            <PageGuide guideOpacity={projectGuideOpacity} guideTranslate={projectGuideTranslate} guideText='PROJECTS' guidePosition={{left: '10rem'}}></PageGuide>
            <Projects></Projects>
            {/* <Contect></Contect> */}
            <MouseTrail setHandleMouseMoveState={setHandleMouseMoveState}></MouseTrail>
        </MainContainer>
    )
}

export default Main