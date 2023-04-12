import { useState } from "react"
import { loadingWords } from "../assets/word"
import { LoadingContainer, LoadingMessageContainer, LoadingMessageIM, LoadingMessageWhoAmI } from "../style/loading/loading"

function Loading() {
    const words = loadingWords
    return (
        <LoadingContainer>
            {
                words.map((e) => {
                    return (
                        <LoadingMessageContainer key={e.key} delaySecond={e.key}>
                            <LoadingMessageIM>I'm</LoadingMessageIM>
                            <LoadingMessageWhoAmI>{e.text}</LoadingMessageWhoAmI>
                        </LoadingMessageContainer>
                    )
                })
            }
        </LoadingContainer>
    )
}

export default Loading