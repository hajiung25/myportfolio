import { IntroduceContainer, TextIm, NameClickContainer, IntroduceMainHomeContainer} from "../../../style/main/introduce"
import { useState, useEffect } from 'react'
import WordCloud from "./WordCloud"
import SlideTrail from "../../SlideTrail"
import { useSelector } from "react-redux"
import { BrowserSizeState, OnScrollState } from "../../../redux/reducers/reducer"
import IntroduceDetail from "./IntroduceDetail"

function Introduce() {
    const wordIM = ['I', `'`, 'm']
    const [isClickMyname, setIsClickMyname] = useState(false)
    const scrollValue = useSelector((state: OnScrollState) => state.onScroll.value)
    const browserSizeValue = useSelector((state: BrowserSizeState) => state.browserSize.size)

    const [scrollMove, setScrollMove] = useState<number>(0)
    const [browserSize, setBrowserSize] = useState<{ width: number, height: number }>({ width: window.innerWidth, height: window.innerHeight })

    useEffect(() => {
        const newScroll = (scrollValue / browserSizeValue.height) * -50
        if (newScroll <= 0 && newScroll >= -50) {
            setScrollMove(newScroll)
        }
        if (scrollValue / browserSize.height > 0.5) {
            setIsClickMyname(false)
        }
    }, [scrollValue])
    useEffect(() => {
        setBrowserSize(browserSizeValue)
    }, [browserSizeValue])

    return (
        <IntroduceContainer id="home" onClick={(e) => {
            const target = e.target as HTMLInputElement;
            if (typeof target.className === 'string' && !target?.className.includes('ison')) {
                setIsClickMyname(false)
            }
        }}>
            <IntroduceMainHomeContainer className="modalContainer">
                <TextIm scrollMove={scrollMove}>{wordIM.map((e) => {
                    return <span>{e}</span>
                })}</TextIm>
                <WordCloud scrollMove={scrollMove} setIsClickMyname={setIsClickMyname}></WordCloud>
                <NameClickContainer className={isClickMyname ? 'ison' : ''}></NameClickContainer>
                <SlideTrail></SlideTrail>
            </IntroduceMainHomeContainer>
            <IntroduceDetail></IntroduceDetail>
        </IntroduceContainer>
    )
}

export default Introduce