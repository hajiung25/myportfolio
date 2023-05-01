import React, { useRef, useEffect, useState } from 'react'
import { DetailTitleContainer, DetailTitleHi, DetailTitleGrowing, IntroduceDetailContainer, IntroduceTextContainer, DetailTitleMe, DetailMainContainer, DetailMainText, HistoryDetailContainer } from '../../../style/main/introducedetail'
import HistoryDetail from './HistoryDetail';
import { useSelector } from 'react-redux';
import { BrowserSizeState, OnScrollState } from '../../../redux/reducers/reducer';

function IntroduceDetail() {
    const targetsRef = useRef<any>([]); // 여러 요소들에 대한 참조를 배열로 관리
    const scrollValue = useSelector((state: OnScrollState) => state.onScroll.value)
    const browserSizeValue = useSelector((state: BrowserSizeState) => state.browserSize.size)

    const [historyClassName, setHistoryClassName] = useState(false)

    const myHistory = [{
        title: '수도전기공업고등학교 졸업',
        days: '2019.03 ~ 2022.02',
        key: '0'
    }, {
        title: '한국수목원정원관리원 근무',
        days: '2021.11 ~ 2023.06',
        key: '1'
    }, {
        title: '코드스테이츠 수료',
        days: '2022.11 ~ 2023.04',
        key: '2'
    },]
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
                        if (!target.className.includes('isOn'))
                            target.className += ' isOn'
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

    useEffect(()=>{
        const newScroll = scrollValue / browserSizeValue.height
        if(newScroll > 1.3){
            setHistoryClassName(true)
        }
    },[scrollValue])

    // 대상 요소들의 참조를 targetsRef.current에 저장
    const handleRef = (ref: any) => {
        if (ref !== null && !targetsRef.current.includes(ref)) {
            targetsRef.current.push(ref);
        }
    };

    return (
        <IntroduceDetailContainer>
            <IntroduceTextContainer>
                <DetailTitleContainer>
                    <DetailTitleHi ref={handleRef}>안녕하세요.</DetailTitleHi>
                    <DetailTitleGrowing ref={handleRef}><span>성장</span>하는 개발자</DetailTitleGrowing>
                    <DetailTitleMe ref={handleRef}>하지웅입니다.</DetailTitleMe>
                </DetailTitleContainer>
                <DetailMainContainer>
                    <DetailMainText ref={handleRef}>
                        <p><span>'상상하는 모든 것을 구현해보자'</span>, 처음으로 개발을 시작할 때부터 마음먹었던 다짐으로, 아직도 저를 불타오르게 하는 문장이기도 합니다.</p>
                        <p>끊임없는 성장을 도모하며, 목표를 이루는 그날까지 포기하지 않고 굳건히 달려나가보겠습니다.</p>
                    </DetailMainText>
                </DetailMainContainer>
            </IntroduceTextContainer>
            <HistoryDetailContainer className={historyClassName ? 'ison' : ''}>
                {
                    myHistory.map((e,i) => {
                        return (<HistoryDetail isTop={+i % 2 === 0} titleText={e.title} days={e.days}></HistoryDetail>)
                    })
                }
            </HistoryDetailContainer>
        </IntroduceDetailContainer>
    )
}

export default IntroduceDetail