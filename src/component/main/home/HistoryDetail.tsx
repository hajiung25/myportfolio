import React,{ useState } from 'react'
import { HistoryBranch, HistoryBranchContainer, HistoryDays, HistoryDetailBall, HistoryMiddleLine, HistoryTextContainer, HistoryTitleText } from '../../../style/main/historydetail'

interface HistoryPopsType {
  isTop : boolean,
  titleText: string,
  days: string,
}

function HistoryDetail({isTop, titleText, days}:HistoryPopsType) {
  const [ isOpenHistoryDetail, setIsOpenHistoryDetail] = useState(false)
  return (
    <>
      <HistoryBranchContainer>
        <HistoryTextContainer isTop={isTop}>
          <HistoryTitleText>{titleText}</HistoryTitleText>
          <HistoryDays>{days}</HistoryDays>
        </HistoryTextContainer>
        <HistoryBranch isTop={isTop}></HistoryBranch>
        <HistoryDetailBall isTop={isTop}
          onClick={()=>{setIsOpenHistoryDetail(true)}}
        ></HistoryDetailBall>
      </HistoryBranchContainer>
      <HistoryMiddleLine></HistoryMiddleLine>
    </>
  )
}

export default HistoryDetail