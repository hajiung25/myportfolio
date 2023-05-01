import React from 'react'
import { PageGuideContainer, PageGuideWord } from '../../style/main/pageguide'

interface PageGuidePrpsType {
    guideOpacity: number,
    guideTranslate:number,
    guideText:string,
    guidePosition:{},
    guideStyle?:{}
}

function PageGuide({guideOpacity, guideTranslate, guideText, guidePosition, guideStyle}:PageGuidePrpsType) {
  return (
    <PageGuideContainer>
        <PageGuideWord guideOpacity={guideOpacity} guideTranslate={guideTranslate} guidePosition={guidePosition} guideStyle={guideStyle}>{guideText}</PageGuideWord>
    </PageGuideContainer>
  )
}

export default PageGuide