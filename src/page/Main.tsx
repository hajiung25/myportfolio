import { MainContainer } from '../style/main/main'
import MouseTrail from '../component/main/MouseTrail';
import Introduce from '../component/main/Introduce';
import { useState } from 'react';

function Main() {
    const [handleMouseMoveState, setHandleMouseMoveState] = useState<any>({})
    return (
        <MainContainer onMouseMove={(event) => {
            if(handleMouseMoveState.handleMouseMove) handleMouseMoveState.handleMouseMove(event)
        }}>
            <Introduce></Introduce>
            <MouseTrail setHandleMouseMoveState={setHandleMouseMoveState}></MouseTrail>
        </MainContainer>
    )
}

export default Main