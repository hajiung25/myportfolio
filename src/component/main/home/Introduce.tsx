import { IntroduceContainer, TextIm, NameClickContainer, IntroduceMainHomeContainer } from "../../../style/main/introduce"
import React, { useState, useEffect } from 'react'
import WordCloud from "./WordCloud"

import { useSelector } from "react-redux"
import { BrowserSizeState, OnScrollState } from "../../../redux/reducers/reducer"
import IntroduceDetail from "./IntroduceDetail"
import PageGuide from "../PageGuide"

function Introduce() {
    const wordIM = ['I', `'`, 'm']
    const scrollValue = useSelector((state: OnScrollState) => state.onScroll.value)
    const browserSizeValue = useSelector((state: BrowserSizeState) => state.browserSize.size)

    const [scrollMove, setScrollMove] = useState<number>(0)
    const [browserSize, setBrowserSize] = useState<{ width: number, height: number }>({ width: window.innerWidth, height: window.innerHeight })
    const [whoAmIGuideOpacity, setWhoAmIGuideOpacity] = useState<number>(0)
    const [whoAmIGuideTranslate, setWhoAmIGuideTranslate] = useState<number>(0)

    useEffect(() => {
        const newScroll = (scrollValue / browserSizeValue.height) * -50
        if (newScroll <= 0 && newScroll >= -50) {
            setScrollMove(newScroll)
        }
        setWhoAmIGuideOpacity((prev) => {
            const newOpacity = (scrollValue / browserSizeValue.height-0.3)* 1.6
            if (newOpacity < 0) {
                return 0.0000001
            } else if(newOpacity > 1){
                return 1
            }else{
                return newOpacity
            }
        })
        setWhoAmIGuideTranslate((prev)=>{
            const newTranslate = -(scrollValue / browserSizeValue.height)+0.7
            if (newTranslate >= -1 && newTranslate <= 0) {
                return newTranslate*30
            } else {
                return prev
            }
        })
    }, [scrollValue])
    useEffect(() => {
        setBrowserSize(browserSizeValue)
    }, [browserSizeValue])

    return (
        <IntroduceContainer id="home">
            <IntroduceMainHomeContainer className="modalContainer">
                <TextIm scrollMove={scrollMove}>{wordIM.map((e) => {
                    return <span>{e}</span>
                })}</TextIm>
                <WordCloud scrollMove={scrollMove}></WordCloud>
            </IntroduceMainHomeContainer>
            <PageGuide guideOpacity={whoAmIGuideOpacity} guideTranslate={whoAmIGuideTranslate} guideText={'WHO AM I'} guidePosition={{right: '10rem'}}></PageGuide>
            <IntroduceDetail></IntroduceDetail>
        </IntroduceContainer>
    )
}

export default Introduce