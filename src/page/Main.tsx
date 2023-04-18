import { MainContainer } from '../style/main/main'
import MouseTrail from '../component/main/MouseTrail';
import Introduce from '../component/main/home/Introduce';
import { useState, useEffect } from 'react';
import Skills from '../component/main/skills/Skills';
import Projects from '../component/main/projects/Projects';
import Blog from '../component/main/blog/Blog';
import { useDispatch } from 'react-redux';
import { SET_BROWSER_SIZE, SET_ON_SCROLL_VALLUE } from '../redux/reducers/reducer';

function Main() {
    const [handleMouseMoveState, setHandleMouseMoveState] = useState<any>({})

    const dispatch = useDispatch()

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler)
            window.removeEventListener("resize", resizeHandler);
        }
    }, [])

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
            <Skills></Skills>
            <Projects></Projects>
            <Blog></Blog>
            <MouseTrail setHandleMouseMoveState={setHandleMouseMoveState}></MouseTrail>
        </MainContainer>
    )
}

export default Main