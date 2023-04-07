import { MainContainer } from '../style/main/main'
import WordCloud from '../component/main/WordCloud';
import MouseTrail from '../component/main/MouseTrail';

function Main() {
    return (
        <MainContainer>
            <WordCloud></WordCloud>
            <MouseTrail></MouseTrail>
        </MainContainer>
    )
}

export default Main