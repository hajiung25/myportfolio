import React, { useEffect, useState } from "react";
import { wordsEn } from "../../assets/word";
import ReactWordcloud from "react-wordcloud";
import {
  ReactWordcloudContainer,
} from "../../style/main/wordcloud";

interface Option {
  colors: string[],
  enableTooltip: boolean,
  deterministic: boolean,
  fontFamily: string,
  fontSizes: [number, number],
  fontStyle: string,
  fontWeight: string,
  padding: number,
  rotations: number,
  scale: string | any,
  transitionDuration: number,
  overflow: string
}

function WordCloud() {
  const [changeWordcloud, setChangeWordcloud] = useState<boolean>(true)
  const options: Option = {
    colors: ["#fff"],
    enableTooltip: false,
    deterministic: changeWordcloud,
    fontFamily: "impact",
    fontSizes: [5, 185],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 3,
    rotations: 8,
    scale: "log",
    transitionDuration: 1000,
    overflow: "hidden",
  };
  return (
    <ReactWordcloudContainer>
      <ReactWordcloud
        options={options}
        words={wordsEn}
        callbacks={{
          getWordColor: (word) => (word.value > 100 ? "blue" : "rgba(255,255,255,0.5)"),
          onWordClick: () => {
            setChangeWordcloud(prev => !prev)
          },
          onWordMouseOver: (word) =>{
            console.log(word)
          }

        }}
      />
    </ReactWordcloudContainer>
  );
}

export default WordCloud;
