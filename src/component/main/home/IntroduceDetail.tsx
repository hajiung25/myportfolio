import React from 'react'
import { DetailInDetailContainer, DetailMainContainer, DetailMainText, DetailTitleContainer, DetailTitleHi, DetailTitleOther, IntroduceDetailContainer, IntroduceTextContainer } from '../../../style/main/introducedetail'

function IntroduceDetail() {
    const introduceDetailText = ['상상하는 모든것을 구현해보고 싶습니다.', '끊임 없은 배움과 성장을 추구합니다.', '협업 중심의 프로그래밍을 중점으로 생각합니다.']
    return (
        <IntroduceDetailContainer>
            <IntroduceTextContainer>
                <DetailTitleContainer>
                    <DetailTitleHi>안녕하세요.</DetailTitleHi>
                    <DetailTitleOther>성장하는 개발자 하지웅입니다.</DetailTitleOther>
                </DetailTitleContainer>
                <DetailMainContainer>
                    {
                        introduceDetailText.map((e,i)=>{
                            return <DetailMainText key={i}>· {e}</DetailMainText>
                        })
                    }
                </DetailMainContainer>
            </IntroduceTextContainer>
            <DetailInDetailContainer></DetailInDetailContainer>
        </IntroduceDetailContainer>
    )
}

export default IntroduceDetail